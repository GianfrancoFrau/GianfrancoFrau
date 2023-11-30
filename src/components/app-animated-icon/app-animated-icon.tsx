import { Component, Host, Prop, State, h } from '@stencil/core';
import { Utils } from '../../lib/utils';
import { ANIMATION_DELAY } from '../../lib/constants';

@Component({
  tag: 'app-animated-icon',
  styleUrl: 'app-animated-icon.scss',
  shadow: true,
})
export class AppAnimatedIcon {
  @Prop({ mutable: true, reflect: true }) icon: string;
  @Prop() icons: string[];
  @Prop() in: string;
  @Prop() out: string;

  @State() dummyRenderFlag: number = 0;

  private current: 'in' | 'out' = 'in';

  get animationIn() {
    return `animation_${this.in}`;
  }

  get animationOut() {
    return `animation_${this.out}`;
  }

  private innerIcons: string[] = [];

  //@ts-ignore
  private getRandomIcon() {
    if (!this.innerIcons.length) {
      this.innerIcons = [...this.icons];
    }
    const i = Utils.getRandomInt(this.innerIcons.length - 1);
    const icon = this.innerIcons[i];
    this.innerIcons.splice(i, 1);
    console.log('getRandomIcon', icon, this.innerIcons);
    return icon;
  }

  async onAnimationEnd(e) {
    console.log('onAnimationEnd', this.icon, this.current, e.animationName);
    await Utils.delay(ANIMATION_DELAY);
    console.log('onAnimationEnd after delay');

    // if (this.current === 'in') {
    //   this.current = 'out';
    //   this.dummyRenderFlag = Date.now();
    // } else {
    //   this.current = 'in';
    //   this.icon = this.getRandomIcon();
    //   this.dummyRenderFlag = Date.now();
    // }
  }

  // componentDidLoad() {
  //   this.current = 'in'
  //   this.dummyRenderFlag = Date.now();
  // }


  render() {
    console.log('-- app-animated-icon-render:', this.icon, this.current);
    return (
      <Host>
        <ion-icon
          name={this.icon}
          class={{
            animated: true,
            [this.animationIn]: this.current === 'in',
            [this.animationOut]: this.current === 'out'
          }}
          onAnimationend={async e => await this.onAnimationEnd(e)}
        ></ion-icon>
      </Host>
    );
  }
}
