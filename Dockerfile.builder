FROM node:5

WORKDIR /usr/src/app
COPY /package.json /usr/src/app/package.json

# Log spam destroys travis load times... :(
RUN npm config set loglevel warn && npm install --silent > /dev/null
