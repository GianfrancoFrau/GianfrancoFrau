import { newSpecPage } from '@stencil/core/testing';
import { AppAnimatedIcon } from '../app-animated-icon';

describe('app-animated-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppAnimatedIcon],
      html: `<app-animated-icon></app-animated-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <app-animated-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-animated-icon>
    `);
  });
});
