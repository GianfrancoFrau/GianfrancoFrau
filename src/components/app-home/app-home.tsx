import { Component, Host, h } from '@stencil/core';

interface WebsiteLink {
  url: string;
  title: string;
  label: string;
  icon: string;
  external?: boolean;
  wip?: boolean;
}
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  menu: WebsiteLink[] = [
    {
      url: '/projects',
      title: '',
      label: 'Projects',
      icon: 'rocket',
      wip: true,
    },
    {
      url: '/notebook',
      title: '',
      label: 'Notebook',
      icon: 'newspaper',
      wip: true,
    },
    {
      url: 'https://it.linkedin.com/pub/gianfranco-frau/aa/555/b25',
      external: true,
      title: 'My Linkedin profile',
      label: 'Linkedin',
      icon: 'logo-linkedin',
    },
    {
      url: 'https://github.com/GianfrancoFrau',
      title: 'My Github profile',
      label: 'Github',
      icon: 'logo-github',
    },
    {
      url: 'https://twitter.com/hybridev1',
      title: 'My X profile',
      label: 'X',
      icon: 'logo-twitter',
    },
    {
      url: 'https://www.codewars.com/users/g14n',
      title: 'My Codewars profile',
      label: 'Codewars',
      icon: 'code',
    },
    {
      url: 'mailto:gian.frau@hotmail.it',
      title: 'Write me an email',
      label: 'Email',
      icon: 'send',
    },
  ];

  what: string[] = ['Nature', 'Climbing', 'Guitar', 'Videogames', 'Trekking', 'Muay Thai'];

  // renderSocial() {
  //   return (
  //     <ul>
  //       {this.socialLinks.map(l => {
  //         return (
  //           <li>
  //             <a href={l.url} rel="noopener noreferrer" target="_blank" title={l.title}>
  //               <span class="icon">
  //                 <ion-icon name={l.icon}></ion-icon>
  //               </span>
  //               <span>{l.label}</span>
  //             </a>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }

  renderMenu() {
    return (
      <ul class="menu">
        {this.menu.map(i => {
          return (
            <li>
              <span class="icon">
                <ion-icon name={i.icon}></ion-icon>
              </span>
              <span>{i.label}</span>
              {i.wip ? <span class="coming-soon">coming soon</span> : null}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <Host>
        <div id="home">
          <header>
            <h1>
              <span>My name is</span>
              <b>Gianfranco Frau.</b>
            </h1>
            <h2>
              <span>I am a</span>
              <b>Web Developer</b>
            </h2>
          </header>
          <main>{this.renderMenu()}</main>
        </div>
      </Host>
    );
  }
}
