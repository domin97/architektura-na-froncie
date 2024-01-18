/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom/client';

import './pubsub';

window.PubSub.subscribe(arg => console.info('vulgar subscriber', arg));

import App from './App';
import './index.css';

import './bundle-web-component';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 🔥 schowaj komponent reaktowy (uruchamiany przez ReactDOM.render):
// document.getElementById('root')!.hidden = true
