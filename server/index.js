import React from 'react';
import express from 'express';
import path from 'path';
import fs from "fs";
// babelでコンパイル
import { App } from '../src/App'
import { renderToString } from 'react-dom/server';

const PORT = process.env.PORT || 9000;
const app = express();
const router = express.Router()


// https://localhost:9000 にアクセスがあったらhtmlを返す
app.get('/', (_, res) => {
  // ./public/index.htmlを取得
  fs.readFile(path.resolve("./public/index.html"),'utf8',(err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    // 返す
    return res.send(
      data.replace(
        // 書き換え
        '<div id="root"></div>',
        `<div id="root">${renderToString(<App />)}</div>`
      )
    );
  })
  const responseMessage = "Hello World";
  console.log(`レスポンス : ${responseMessage}`)
  // res.send(ssr());
  // res.sendFile(path.join(__dirname, '../index.html'));
});

// http://localhost/client.jsにアクセスすることで、publicを取得する

app.use(express.static('./public'))

// 9000番ポートでWebサーバを立てる
app.listen(PORT,()=>{
  console.log(`Server is listening on port ${PORT}`);
})
