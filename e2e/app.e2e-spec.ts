import { Ng2TsSystemjsPage } from './app.po';

describe('ng2-ts-systemjs App', function() {
  let page: Ng2TsSystemjsPage;

  beforeEach(() => {
    page = new Ng2TsSystemjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
