import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
  shadow: true,
})
export class AppAbout {

  render() {
    return (
      <Host>
        ABOUT
      </Host>
    );
  }

}
