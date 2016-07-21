import { MyHeroesPage } from './app.po';

describe('my-heroes App', function() {
  let page: MyHeroesPage;

  beforeEach(() => {
    page = new MyHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
