import { Component, Host, h } from '@stencil/core';

// import { Utils } from '../../lib/utils';
// import { ANIMATION_DELAY } from '../../lib/constants';

interface WebsiteLink {
  url: string;
  title: string;
  label: string;
  icon: string;
}

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  links: WebsiteLink[] = [
    {
      url: 'https://it.linkedin.com/pub/gianfranco-frau/aa/555/b25',
      title: 'My Linkedin profile',
      label: 'Linkedin',
      icon: 'la-linkedin',
    },
    {
      url: 'https://github.com/GianfrancoFrau',
      title: 'My Github profile',
      label: 'Github',
      icon: 'lab la-github-alt',
    },
    {
      url: 'https://twitter.com/hybridev1',
      title: 'My X profile',
      label: 'X',
      icon: 'lab la-twitter',
    },
    {
      url: 'https://www.codewars.com/users/g14n',
      title: 'My Codewars profile',
      label: 'Codewars',
      icon: 'las la-code',
    },
    {
      url: 'mailto:gian.frau@hotmail.it',
      title: 'Write me an email',
      label: 'Email',
      icon: 'las la-envelope',
    },
  ];

  // private titleIcon: any;
  // private icons: string[] = [];

  // private async animateTitleIcon(loop?: boolean) {
  //   const animated = '.animated';
  //   const entranceAnim = "animation_bounceIn";
  //   const exitAnim = "animation_bounceOut";
  //   [animated, entranceAnim].map(c => this.titleIcon.classList.add(c));
  //   await Utils.onAnimationEnd(this.titleIcon);
  //   await Utils.delay(ANIMATION_DELAY);
  //   this.titleIcon.classList.remove(entranceAnim);
  //   this.titleIcon.classList.add(exitAnim);
  //   await Utils.onAnimationEnd(this.titleIcon);
  //   if (loop) {
  //     this.randomizeTitleIcon(true);
  //   }
  // }

  // private randomizeTitleIcon(animate?: boolean) {
  //   if (!this.icons.length) {
  //     this.icons = [...ICONS];
  //   }
  //   if (!this.titleIcon) {
  //     this.titleIcon = document.querySelector('h2 .icons i');
  //   }
  //   const i = Utils.getRandomInt(this.icons.length - 1);
  //   const icon = this.icons[i];
  //   this.titleIcon.classList.remove(...Array.from(this.titleIcon.classList));
  //   icon.split(' ').map(c => this.titleIcon.classList.add(c));
  //   this.icons.splice(i, 1);
  //   // console.log('randomizeTitleIcon', this.icons.length, i, icon);
  //   if (animate) {
  //     this.animateTitleIcon(true);
  //   }
  // }

  render() {

    // <div>
    //   <header>
    //     <h1>Stencil App Starter</h1>
    //   </header>
    //   <main>
    //     <stencil-router>
    //       <stencil-route-switch scrollTopOffset={0}>
    //         <stencil-route url="/" component="app-home" exact={true} />
    //         <stencil-route url="/profile/:name" component="app-profile" />
    //       </stencil-route-switch>
    //     </stencil-router>
    //   </main>
    // </div>

    return (
      <Host>
        <div id="container">
          <header>
            <h1>Gianfranco Frau</h1>
            <h2>
              <span class="text">Web Developer</span>
              <span class="icons">
                {/* <i class="las la-cog"></i> */}
                {/* <i class="icon ion-md-heart"></i> */}
                <ion-icon name="heart"></ion-icon>
              </span>
            </h2>
            <h3 class="animated animation_slideInLeft">
              Currently @
              <a href="https://startupitalia.eu" target="_blank" class="startupitalia">
                StartupItalia
              </a>
            </h3>
          </header>
          <nav>
            <ul>
              {this.links.map(l => {
                return (
                  <li>
                    <a href={l.url} rel="noopener noreferrer" target="_blank" title={l.title}>
                      <span class="icon">
                        <i class={l.icon}></i>
                      </span>
                      <span>{l.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <footer>Footer</footer>
        </div>
      </Host>
    );
  }
}
