---
slug: "s3-static-hosting-return-error"
date: "2020-09-10"
title: "CloudFrontを経由してS3で静的サイトホスティングをするとPermission Deniedが出てしまう - AWS, S3, CloudFront -"
language: "ja"
---

CloudFront経由でS3で静的サイトホスティングをしようとすると以下のエラーが出ました。  
```
Permission Denied
This XML file does not appear to have any style information associated with it. The document tree is shown below.
```

原因：
CloudFrontのDistribution作成時に設定するDefault Root ObjectもS3のindex documentに合わせないといけませんでした。  
  
S3でindex documentをindex.htmlとしている場合はDefault Root Objectもindex.htmlに設定します。
