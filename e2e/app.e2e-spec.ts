import { BlogFrontendPage } from './app.po';

describe('blog-frontend App', () => {
  let page: BlogFrontendPage;

  beforeEach(() => {
    page = new BlogFrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
