import { HomePage } from './home.po';
import { TareasPage } from './tareas.po';


describe('workspace-project Home', () => {
  let homepage: HomePage;

  beforeEach(() => {
    homepage = new HomePage();
  });

  it('should display "Angular"in h1', () => {
    homepage.navigateTo();
    expect(homepage.getTitleTest()).toContain('Angular');
  });
  it('should display "CAS" in footer', () => {
    homepage.navigateTo();
    expect(homepage.getFooterTest()).toContain('CAS');
  });
});

describe('Tareas', () => {
  let tareasPage: TareasPage;

  beforeEach(() => {
    tareasPage = new TareasPage();
  });

  it('should display "Proyecto"in h1', () => {
    tareasPage.navigateTo();
    expect(tareasPage.getTitleTest()).toContain('Proyecto');
  });
  it('should display "Getafe" in footer', () => {
    tareasPage.navigateTo();
    expect(tareasPage.getFooterTest()).toContain('CAS');
  });
});