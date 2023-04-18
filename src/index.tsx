import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './css/index.css';
// import { Test } from './Test';

// idがappの部分をhydrateで描画する
const container = document.querySelector('#root')!;
hydrateRoot(
  container,
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
  );