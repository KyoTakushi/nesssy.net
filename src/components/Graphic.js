import React, { useEffect } from "react";
import * as THREE from 'three';
import styled from "styled-components";

export default () => {

  useEffect(() => {
    createSpace();
  }, []);

  let container;
  let scene, camera, renderer;
  let geometry, material, texture;
  let stars;
  const PARTICLE_NUMBER = 6000;

  //宇宙
  function createSpace() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;
    //camera.rotation.x = Math.PI/2;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    container = document.getElementById('container')
    container.appendChild( renderer.domElement );

    geometry = new THREE.Geometry();

    for (let i = 0; i < PARTICLE_NUMBER; i++) {
      stars = new THREE.Vector3(
        Math.random() * 700 - 350,
        Math.random() * 700 - 350,
        Math.random() * 700 - 350
      );
      geometry.vertices.push(stars);
    }

    texture = new THREE.TextureLoader().load( 'point_map.png' );
    //https://threejs.org/docs/#api/en/loaders/TextureLoader

    material = new THREE.PointsMaterial({
      size: 0.6,
      map: texture
    });

    stars = new THREE.Points(geometry,material);
    scene.add(stars);

    animate();
  }

  function animate() {
    renderer.render( scene, camera );
    const time = new Date() * 0.00005;
    // for ( let i = 0; i < scene.children.length; i ++ ) {
      const object = scene.children[0];
      // if ( object instanceof THREE.Points ) {
        object.rotation.y = time;
      // }
    // }
    requestAnimationFrame(animate);
  }

  // function fakeSolarSystem() {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize( window.innerWidth, window.innerHeight );
  //   document.body.appendChild( renderer.domElement );

  //   //fake Sun
  //   const sunTexture = new THREE.TextureLoader().load('sun_map.jpg');
  //   const sungeo = new THREE.SphereGeometry( 3, 32, 32 );
  //   const sunMaterial = new THREE.MeshBasicMaterial( { map: sunTexture } );
  //   const sunSphere = new THREE.Mesh( sungeo, sunMaterial );

  //   //fake Earth
  //   const earthTexture = new THREE.TextureLoader().load('earth_map.jpg');
  //   const earthGeo = new THREE.SphereGeometry( 1, 32, 32 );
  //   const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
  //   const earthSphere = new THREE.Mesh( earthGeo, earthMaterial );
  //   earthSphere.position.x = 1.0;
  //   earthSphere.position.y = 1.0;

  //   scene.add( earthSphere, sunSphere );
  //   camera.position.z = 30;

  //   animate();

  //   function animate() {
  //     orbit();
  //     requestAnimationFrame( animate );
  //     renderer.render( scene, camera );
  //     sunSphere.rotation.x += 0.001;
  //     sunSphere.rotation.y += 0.001;
  //     earthSphere.rotation.y += 0.001;
  //     earthSphere.rotation.x += 0.001; 
  //   }  

  //   function orbit() {
  //     let date = Date.now() * 0.0005;
  //     earthSphere.position.x = Math.cos(date) * 10.0;
  //     earthSphere.position.y = Math.sin(date) * 10.0;
  //   }
  // }
  
  return (
    <GlRenderArea id="container"></GlRenderArea>
  );
}

const GlRenderArea = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;

  canvas {
    display: block;
    margin: auto;
    width: 100%;
    height: 550px;
    //background: #000;
  }
`