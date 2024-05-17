const websiteAbout = 'http://localhost:3000/about';

describe('Tests for about page', () => {
  beforeEach(() => {
    cy.visit(websiteAbout);
  });

  it('should have a header with name', () => {
    cy.get('.project_navbar-content_wrapper h1')
      .should('have.text', 'Perry Angelora');
  });
  it('should have a header with nav home button', () => {
    cy.get('.project_navbar-content_wrapper nav')
      .find('a[href="/"]')
      .should('exist');
  });
  it('should have a header with nav about button', () => {
    cy.get('.project_navbar-content_wrapper nav')
      .find('a[href="/about/"]')
      .should('exist')
      .should('have.attr', 'class', '--current-page');
  });

  it('should render a canvas image', () => {
    cy.get('.about_page-image_wrapper canvas')
      .should('exist');
  });

  it('should have a github link', () => {
    cy.get('.project_footer-all_links')
      .find('a[href="https://github.com/MisterPea"]')
      .should('exist')
      .and('have.attr', 'href', 'https://github.com/MisterPea');
  });

  it('should have a linkedin link', () => {
    cy.get('.project_footer-all_links')
      .find('a[href="https://www.linkedin.com/in/perry-angelora/"]')
      .should('exist')
      .and('have.attr', 'href', 'https://www.linkedin.com/in/perry-angelora/');
  });

  it('should have a email button', () => {
    cy.get('.project_footer-link')
      .find('button')
      .should('exist');
  });
});