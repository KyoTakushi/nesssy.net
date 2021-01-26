---
slug: "mongodb-dockerize"
date: "2021-01-05"
title: "mongodbをdockerizeする - MongoDB, Docker -"
language: "ja"
---

docker-compose.yml
```yml
  version: '3.1'

  services:
    mongo:
      image: mongo
      restart: always
      container_name: dev_mongodb
      environment: 
        MONGO_INITDB_DATABASE: mongodb_database_name //任意変更
        MONGO_INITDB_ROOT_USERNAME: mongodb_user //任意変更
        MONGO_INITDB_ROOT_PASSWORD: mongodb_password //任意変更
      ports:
        - 27017:27017
      volumes:
        - ./docker/mongodb/data:/data/db
        - ./docker/mongodb/init.js:/docker-entrypoint-initdb.d/init.js:ro


    mongo-express:
      image: mongo-express
      restart: always
      ports: 
        - 8081:8081
      environment:
        ME_CONFIG_MONGODB_ADMINUSERNAME: mongodb_user //MONGO_INITDB_ROOT_USERNAMEと同じ
        ME_CONFIG_MONGODB_ADMINPASSWORD: mongodb_password  //MONGO_INITDB_ROOT_PASSWORDと同じ
```
docker-compose.ymlを用意したら以下で起動  
```
$ docker-compose up
```

mongo-expressを入れるとブラウザでmongodbの操作ができます。  
上記の場合は、  
127.0.0.1:8081  
でアクセスすると確認できます。
