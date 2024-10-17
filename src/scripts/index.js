import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';

import App from './views/app';
import swRegister from './utils/sw-register';


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
});
