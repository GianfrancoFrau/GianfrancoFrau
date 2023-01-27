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
    const enterAnim = 'animate__slideInUp';
    const outAnim = 'animate__slideOutDown';

    Array.from(triggers).map(t => {
      t.addEventListener('click', () => {
        const modalId = t.getAttribute('data-modal-id');
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
        modal.classList.remove(outAnim);
        modal.classList.add(enterAnim);
        modal.style.setProperty('--animate-duration', '0.2s');
        console.log('open', modalId, modal);
      });
    });

    Array.from(closeBtns).map(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal-close');
        const modal = document.getElementById(modalId);
        modal.classList.remove(enterAnim);
        modal.classList.add(outAnim);
        modal.style.setProperty('--animate-duration', '0.2s');
        console.log('close', modalId, modal);
        modal.addEventListener(
          'animationend',
          () => {
            modal.classList.add('hidden');
          },
          { once: true },
        );
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
