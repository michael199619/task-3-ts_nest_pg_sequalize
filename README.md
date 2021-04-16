# [Article](https://vk.com/@-202627164-the-technical-task-5)

## [Schema of database](https://miro.com/app/board/o9J_lKvzEPc=/)

## build
```bash
$ git https://github.com/michael199619/task-3-ts_nest_pg_sequalize
$ cd task-3-ts_nest_pg_sequalize
$ cp .env.example .env.development # or .env.production 
$ yarn install
```

### fixtures ./src/db/fixures.ts

## start

```bash
$ yarn build
$ cp .env.example .env.production
$ cross-env NODE_ENV=production nest start
```
Server started at http://localhost:3000/

## start docker
```bash
$ cp .env.example .env.production
$ docker-compose up 
```

Server started at http://localhost:3000/ \
Swagger at http://localhost:3000/api/docs

## debug
```bash
$ npm run debug
```

After connect to 9229
