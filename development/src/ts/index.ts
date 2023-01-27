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

  initModals() {
    const triggers = document.querySelectorAll('[data-modal-id]');
    const closeBtns = document.querySelectorAll('[data-modal-close]');

    Array.from(triggers).map(t => {
      t.addEventListener('click', () => {
        const modalId = t.getAttribute('data-modal-id');
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
        modal.classList.remove('animate__bounceOutDown');
        modal.classList.add('animate__backInUp');
        console.log('open', modalId, modal);
      });
    });

    Array.from(closeBtns).map(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal-close');
        const modal = document.getElementById(modalId);
        modal.classList.remove('animate__backInUp');
        modal.classList.add('animate__bounceOutDown');
        console.log('close', modalId, modal);
      });
    });
  }

  run() {
    this.animateTitle();
    // this.animateMenu();
    this.initModals();
  }
}

window.addEventListener('load', () => {
  const app = new App();
  app.run();
});
