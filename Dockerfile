FROM node:latest

WORKDIR /usr/src/CognitiveFunc

COPY package*.json /usr/src/CognitiveFunc/

RUN npm install

COPY . .

CMD [ "node", "src/Index.js"]
