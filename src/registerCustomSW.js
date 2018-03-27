export default function register() {
  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    registerValidSW(swUrl);
  });
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
  .register(swUrl)
  .then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            console.log('New content is available; please refresh.');
          } else {
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  })
  .catch(error => {
    console.error('Error during service worker registration:', error);
  });
}