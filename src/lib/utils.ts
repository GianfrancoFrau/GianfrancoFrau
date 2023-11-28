export class Utils {
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
