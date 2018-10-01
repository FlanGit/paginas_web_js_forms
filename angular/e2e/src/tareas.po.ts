import { browser, by, element } from 'protractor';

export class TareasPage {
  navigateTo() {
    return browser.get('/tareas');
  }

  getTitleText() {
    return element(by.css('header h1')).getText();
  }

  getFooterText() {
    return element(by.css('footer address')).getText();
  }
}
