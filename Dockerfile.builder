FROM node:5

WORKDIR /usr/src/app
COPY /package.json /usr/src/app/package.json

RUN npm install
