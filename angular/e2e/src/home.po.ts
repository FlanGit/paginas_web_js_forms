import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getTitleText() {
    return element(by.css('header h1')).getText();
  }

  getFooterText() {
    return element(by.css('footer address')).getText();
  }
}
