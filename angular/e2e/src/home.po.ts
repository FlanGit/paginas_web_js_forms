import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getTitleTest() {
    return element(by.css('header h1')).getText();
  }

  getFooterTest(){
    return element(by.css('footer address')).getText();
    }

}
