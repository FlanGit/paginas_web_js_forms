import { HomePage } from './home.po';
import { TareasPage } from './tareas.po';

describe('workspace-project Home', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should display "Angular" in h1', () => {
    homePage.navigateTo();
    expect(homePage.getTitleText()).toContain('Angular');
  });

  it('should display "CAS" in footer', () => {
    homePage.navigateTo();
    expect(homePage.getFooterText()).toContain('CAS');
  });


});

describe('Tareas', ()=>{
  let tareasPage: TareasPage;

  beforeEach(() => {
    tareasPage = new TareasPage();
  });

  it('should display "Proyecto" in h1', () => {
    tareasPage.navigateTo();
    expect(tareasPage.getTitleText()).toContain('Proyecto');
  });
  
  it('should display "Getafe" in footer', () => {
    tareasPage.navigateTo();
    expect(tareasPage.getFooterText()).toContain('CAS');
  });
})
