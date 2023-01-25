import '../scss/index.scss';

declare interface SiteHeader {
  el: HTMLElement;
  classes: string[];
  index: number;
  interval: any;
}

class App {
  private header: SiteHeader = {
    el: null,
    classes: ['cogs', 'topografy'],
    index: 0,
    interval: null,
  };

  initHeaderDynamicBackground() {
    this.header.el = document.querySelector('header');
    this.header.el.classList.add(this.header.classes[this.header.index]);
    this.header.interval = setInterval(() => {
      this.header.index++;
      if (this.header.index >= this.header.classes.length) {
        this.header.index = 0;
      }
      const next = this.header.classes[this.header.index];
      const prev = this.header.classes[this.header.index - 1];
      this.header.el.classList.remove(prev);
      this.header.el.classList.add(next);
    }, 3000);
  }

  run() {
    // this.initHeaderDynamicBackground();
  }
}

window.addEventListener('load', () => {
  const app = new App();
  app.run();
});
