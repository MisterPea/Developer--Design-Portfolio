const website = 'http://localhost:3000';

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(website);
  });
  it('should see a site head portfolio name', () => {
    cy.get('.landing-greeting').contains("Hello! I'm");
    cy.get('.landing-name').contains("Perry Angelora");
  });

  it('should have 2 projects', ()=> {
    cy.get('.landing_project-ul').find('.landing_project-li').should('have.length', 2)
  })


});

/* 800px - 1200px */
describe('Tests for 800px - 1200px', () => {
  beforeEach(() => {
    cy.visit(website);
    cy.viewport('ipad-2', 'landscape');
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

  it('should not contain elements for large screens', () => {
    cy.get('.landing_header-icon_wrapper')
      .should('have.css', 'display', 'none');
  });
});

/* 1200px and above */
describe('Tests for 1200px and above', () => {
  beforeEach(() => {
    cy.visit(website);
    cy.viewport('macbook-11');
  });

  it('should find the "Home" link and verify it is correctly labeled and styled as the current page', () => {
    cy.get('.main_wrap-about_wrap nav')
      .contains('a', 'Home')
      .should('have.class', '--current-page')
      .and('have.attr', 'href', '/')
      .and('have.attr', 'style', 'cursor: default;');
  });

  it('should find the "About" link and verify it points to the correct path', () => {
    cy.get('.main_wrap-about_wrap nav')
      .contains('a', 'About')
      .should('have.attr', 'href', '/about');
  });

  it('should have a github link', () => {
    cy.get('.landing_header-icon_wrapper')
      .find('a[href="https://github.com/MisterPea"]')
      .should('exist')
      .and('have.attr', 'href', 'https://github.com/MisterPea');
  });

  it('should have a linkedin link', () => {
    cy.get('.landing_header-icon_wrapper')
      .find('a[href="https://www.linkedin.com/in/perry-angelora/"]')
      .should('exist')
      .and('have.attr', 'href', 'https://www.linkedin.com/in/perry-angelora/');
  });

  it('should have a email button', () => {
    cy.get('.landing_header-icon_wrapper')
      .find('button')
      .should('exist');
  });

  it('should not contain small-screen elements', () => {
    cy.get('.project_footer-home_page')
      .should('have.css', 'display', 'none');
  });
});
