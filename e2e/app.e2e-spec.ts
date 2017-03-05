import { AngularGifSearchPage } from './app.po';

describe('angular-gif-search App', () => {
  let page: AngularGifSearchPage;

  beforeEach(() => {
    page = new AngularGifSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
