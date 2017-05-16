import { Client.Cotato.IoPage } from './app.po';

describe('client.cotato.io App', () => {
  let page: Client.Cotato.IoPage;

  beforeEach(() => {
    page = new Client.Cotato.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
