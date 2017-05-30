import { NgModuleSamplePage } from './app.po';

describe('ng-module-sample App', () => {
  let page: NgModuleSamplePage;

  beforeEach(() => {
    page = new NgModuleSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
