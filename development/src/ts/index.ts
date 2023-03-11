import '../scss/index.scss';
import { ICONS } from './icons';
import { Utils } from './utils';

const ANIMS = {
  IN: ['animate__bounceIn', 'animate__bounceInDown', 'animate__bounceInLeft', 'animate__bounceInRight', 'animate__bounceInUp'],
  OUT: ['animate__bounceOut', 'animate__bounceOutDown', 'animate__bounceOutLeft', 'animate__bounceOutRight', 'animate__bounceOutUp'],
};
const DELAY = 500;

class App {
  private titleIcon: any;
  private icons: string[] = [];

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
    if (!this.icons.length) {
      this.icons = [...ICONS];
    }
    if (!this.titleIcon) {
      this.titleIcon = document.querySelector('h2 .icons i');
    }
    const i = Utils.getRandomInt(this.icons.length - 1);
    const icon = this.icons[i];
    this.titleIcon.classList.remove(...Array.from(this.titleIcon.classList));
    icon.split(' ').map(c => this.titleIcon.classList.add(c));
    this.icons.splice(i, 1);
    console.log('randomizeTitleIcon', this.icons.length, i, icon);
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
