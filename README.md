# Nodejs and Reactjs simple chat room using socket io
----
pada path ./server terdapat backend dari aplikasi
pada path ./client terdapat frontend dari aplikasi

- Pertama jalankan ```yarn init:install``` atau ```npm init:install```
- Pada dalam ./server buatlah sebuah .env dengan isi yang sama dengan .env.example
    - PORT = port backend yang akan dijalankan
- Pada dalam ./client buat lah sebuah untuk development .env.development.local dan .env.production.local untuk production. dengan isi yang sama dengan .env
    - REACT_APP_SERVER_ENDPOINT = endpoint dari backend

Untuk menjalankan development mode
- jalankan ```yarn start:client``` atau ```npm start:client``` untuk menjalankan frontend
- Jalankan ```yarn start:server``` atau ```npm start:server``` untuk menjalankaan server

Untuk production  mode
- Jalankan ```yarn build``` atau ```npm build```
- Kemudian jalankan ```yarn production``` atau ```npm production```

--- 
## Penjelasan app
- Pada awal masuk maka akan di minta memasukan username 
- Kemudian pada bagian awal halaman terdapat list dari chat room yang dapat di click
- Setelah di click maka akan memasuki halaman chat room

## Docker
```docker run -p 3000:3000 kaye5/socket-io-chat-room ```
**OPTIONAL** Env : 
- ```REACT_APP_SERVER_ENDPOINT``` server endpoint 
- ```PORT``` server running port


## Dependencies
Backend : 
- express
- cors
- dotenv
- morgan
- socket io
- uuid

Frontend : 
- React
- Axios
- Socket io client