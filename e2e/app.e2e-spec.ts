import { Angular01Page } from './app.po';

describe('angular01 App', () => {
  let page: Angular01Page;

  beforeEach(() => {
    page = new Angular01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
