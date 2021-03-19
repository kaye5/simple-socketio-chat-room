FROM node:alpine 

WORKDIR /app

COPY package.json .
COPY yarn.lock .

COPY /client  ./client
COPY /server ./server

ENV REACT_APP_SERVER_ENDPOINT=http://localhost:3000
ENV PORT=3000

RUN yarn install --pure-lockfile --non-interactive

WORKDIR /app/client
RUN yarn install
RUN yarn build

WORKDIR /app/server
RUN yarn install

WORKDIR /app
COPY . .

WORKDIR /app/server
CMD ["node","server.js"]
