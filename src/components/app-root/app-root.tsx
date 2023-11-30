import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <Host>
        <div id="container">
          <div id="box">
            {/* <header>
              <stencil-route-link url="/">
                <h1>
                  <span>gianfranco</span>
                  <span>frau</span>
                </h1>
              </stencil-route-link>
            </header> */}
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/profile/:name" component="app-profile" />
              </stencil-route-switch>
            </stencil-router>
          </div>
          <footer>Footer</footer>
        </div>
      </Host>
    );
  }
}
