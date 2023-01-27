import '../scss/index.scss';

class App {
  animateMenu() {
    const links: any = document.querySelectorAll('.home-menu a') || [];
    Array.from(links).map((link: HTMLAnchorElement) => {
      link.classList.add('animate__animated');
      link.classList.add('animate__backInLeft');
    });
  }

  animateTitle() {
    const header = document.querySelector('header.header');
    header.classList.add('animate__animated');
    header.classList.add('animate__bounceInDown');
  }

  run() {
    this.animateTitle();
    // this.animateMenu();
  }
}

window.addEventListener('load', () => {
  const app = new App();
  app.run();
});
