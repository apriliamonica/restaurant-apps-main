import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';

import './components/footer-bar.js';
import './components/header-bar.js';

import swRegister from './utils/sw-register';

import App from './views/app';

const app = new App({
  button: document.querySelector('#drawer-button'),
  drawer: document.querySelector('.nav-daftar'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
