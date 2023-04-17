import React from 'react';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { App } from '../src/App';

const PORT = process.env.PORT || 9000;
const app = express();
const router = express.Router();

// https://localhost:9000 にアクセスがあったら
app.get('/', (_, res) => {
  // ./public/index.htmlを取得
  fs.readFile(path.resolve('./public/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    // 下記の処理を返す
    return res.send(
      data.replace(
        // rootを書き換え
        '<div id="root"></div>',
        `<div id="root">${renderToString(<App />)}</div>`,
      ),
    );
  });
  // 処理ができたら表示する
  const responseMessage = 'Hello World';
  console.log(`レスポンス : ${responseMessage}`);
});

// http://localhost/client.jsにアクセスすることで、publicを取得する
app.use(express.static('./public'));

// 9000番ポートでWebサーバを立てる
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
