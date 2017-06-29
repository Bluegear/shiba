import { ShibaPage } from './app.po';

describe('shiba App', () => {
  let page: ShibaPage;

  beforeEach(() => {
    page = new ShibaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
