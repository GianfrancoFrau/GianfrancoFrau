import '../scss/index.scss';

const ICONS: string[] = [
  'las la-dragon',
  'las la-coffee',
  'las la-beer',
  'las la-seedling',
  'las la-robot',
  'las la-tools',
  'las la-terminal',
  'las la-project-diagram',
  'las la-sitemap',
  'las la-flask',
  'las la-laptop-code',
  'las la-hat-wizard',
  'las la-cog',
  'las la-snowboarding',
  'las la-otter',
  'las la-hiking',
  'las la-mountain',
  'las la-magic',
  'las la-brush',
  'las la-theater-masks',
  'las la-pizza-slice',
  'las la-gamepad',
  'las la-ghost',
  'las la-cloud-moon',
  'las la-dungeon',
  'las la-sliders-h',
  'las la-shipping-fast',
  'las la-yin-yang',
  'las la-brain',
  'las la-rocket',
  'las la-bug',
  'las la-meteor',
];
const ANIMS = {
  IN: ['animate__bounceIn', 'animate__bounceInDown', 'animate__bounceInLeft', 'animate__bounceInRight', 'animate__bounceInUp'],
  OUT: ['animate__bounceOut', 'animate__bounceOutDown', 'animate__bounceOutLeft', 'animate__bounceOutRight', 'animate__bounceOutUp'],
};
const DELAY = 500;

class Utils {
  static getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  static delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static onAnimationEnd(el: any): Promise<void> {
    return new Promise(resolve => {
      el.addEventListener('animationend', () => resolve(), { once: true });
    });
  }
}

class App {
  private currentIcon: number = 0;
  private titleIcon: any;

  private async animateTitleIcon(loop?: boolean) {
    const animated = 'animate__animated';
    const animIndex = 0; // Utils.getRandomInt(ANIMS.IN.length - 1);
    const entranceAnim = ANIMS.IN[animIndex];
    const exitAnim = ANIMS.OUT[animIndex];
    [animated, entranceAnim].map(c => this.titleIcon.classList.add(c));
    await Utils.onAnimationEnd(this.titleIcon);
    await Utils.delay(DELAY);
    this.titleIcon.classList.remove(entranceAnim);
    this.titleIcon.classList.add(exitAnim);
    await Utils.onAnimationEnd(this.titleIcon);

    if (loop) {
      this.randomizeTitleIcon(true);
    }
  }

  private randomizeTitleIcon(animate?: boolean) {
    let i = 0;
    const classes = [...ICONS];
    this.titleIcon = document.querySelector('h2 .icons i');
    do {
      i = Utils.getRandomInt(classes.length - 1);
    } while (i === this.currentIcon);
    this.currentIcon = i;
    this.titleIcon.classList.remove(...Array.from(this.titleIcon.classList));
    classes[i].split(' ').map(c => this.titleIcon.classList.add(c));
    // console.log('randomizeTitleIcon', classes.length, i, classes[i]);
    if (animate) {
      this.animateTitleIcon(true);
    }
  }

  run(): void {
    this.randomizeTitleIcon(true);
  }
}

window.addEventListener('load', () => {
  const app = new App();
  app.run();
});
