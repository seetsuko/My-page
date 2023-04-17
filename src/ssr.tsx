import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';

// 実際に返される文字列になります。
const ssr = ():string => (`
  <html>
    <head>
      <title>CountUp</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <div id="app" >
        ${renderToString(<App />)}
      </div>
      <script src="./client.js"></script>
    </body>
  </html>
`);

export default ssr;