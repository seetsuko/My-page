import React from 'react';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from '../src/App';
import { RecoilRoot } from 'recoil';

const PORT = process.env.PORT || 9000;
const server = express();

// https://localhost:9000 にアクセスがあったら
server.get('/', (req, res) => {
  // ./public/index.htmlを取得
  fs.readFile(path.resolve('./public/index.html'), 'utf8', (err, data) => {
    const context = {};
    const app = renderToString(
      <StaticRouter location={req.url} context={context}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </StaticRouter>,
    );

    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    // 下記の処理を返す
    return res.send(
      data.replace(
        // rootを書き換え
        '<div id="root"></div>',
        `<div id="root">${app}</div>`,
      ),
    );
  });
  // 処理ができたら表示する
  const responseMessage = 'connection successful!';
  console.log(`response : ${responseMessage}`);
});

// http://localhost/client.jsにアクセスすることで、publicを取得する
server.use(express.static('./public'));

// 9000番ポートでWebサーバを立てる
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
