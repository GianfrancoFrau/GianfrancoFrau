import '../scss/index.scss';

class App {
  // private title: HTMLElement;

  run(): void {
    // this.title = document.getElementById('main-title');
    // this.title.addEventListener('click', () => {
    //   this.title.classList.toggle('clicked');
    // });
  }
}

window.addEventListener('load', () => {
  const app = new App();
  app.run();
});
