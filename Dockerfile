FROM node:12-alpine

RUN mkdir /app
WORKDIR /app

COPY .

RUN npm i
RUN npm run test
RUN npm run build

CMD npm run start:prod
