import { newE2EPage } from '@stencil/core/testing';

describe('app-animated-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-animated-icon></app-animated-icon>');

    const element = await page.find('app-animated-icon');
    expect(element).toHaveClass('hydrated');
  });
});
