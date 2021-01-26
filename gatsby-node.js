const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const moment = require('moment')

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 100
  const numPages = Math.ceil(posts.length / postsPerPage)
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0  ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve(`./src/components/blog/blogList.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const path = createFilePath({ node, getNode, trailingSlash: false})
    const postDate = moment(node.frontmatter.date)
    const url = `/blog/${postDate.format("YYYY/MM/DD")}/${node.frontmatter.slug}`
    createNodeField({
      node,
      name: `slug`,
      value: url,
    })
  }
}