import { NovusAppPage } from './app.po';

describe('novus-app App', () => {
  let page: NovusAppPage;

  beforeEach(() => {
    page = new NovusAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
