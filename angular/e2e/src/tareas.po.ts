import { browser, by, element } from 'protractor';

export class TareasPage {
  navigateTo() {
    return browser.get('/tareas');
  }

  getTitleTest() {
    return element(by.css('header h1')).getText();
  }

  getFooterTest(){
    return element(by.css('footer address')).getText();
    }

}
