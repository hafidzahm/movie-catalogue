import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';

import App from './views/app';
import swRegister from './utils/sw-register';

import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';


const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')


});

window.addEventListener('hashchange', () => {
  // hashchange (ketika url hash diubah)
  app.renderPage();
});

window.addEventListener('load', () => {
  // load (ketika halaman dimuat)
  app.renderPage();
  swRegister();

  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
