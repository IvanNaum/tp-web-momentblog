FROM node:18

WORKDIR /usr/src/app

ADD package.json ./
COPY package-lock.json ./

#RUN npm ci
COPY node_modules/ ./node_modules
COPY public/ ./public
COPY src/ ./src