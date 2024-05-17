const website = 'http://localhost:3000';

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(website);
  });
  it('should see a site head portfolio name', () => {
    cy.get('.landing-greeting').contains("Hello! I'm");
    cy.get('.landing-name').contains("Perry Angelora");
  });

  it('should have 3 projects', () => {
    cy.get('.landing_project-ul').find('.landing_project-li').should('have.length', 3);
  });
});

// /* 800px - 1200px */
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

// /* 1200px and above */
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
      .should('have.attr', 'href', '/about/');
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

describe('Find project links on main page', () => {
  beforeEach(() => {
    cy.visit(website);
  });
  it('should find the nyt pilot project on the main page', () => {
    cy.get('.landing_project-ul li')
      .find('a[href="/project/the-times-pilot/"]')
      .should('exist');
  });
  it('should find the circuit project on the main page', () => {
    cy.get('.landing_project-ul li')
      .find('a[href="/project/circuit-app/"]')
      .should('exist');
  });
  it('should find the d3 projects on the main page', () => {
    cy.get('.landing_project-ul li')
      .find('a[href="/project/made-with-d3/"]')
      .should('exist');
  });
});

describe('Check click-through of links on home screen', () => {
  beforeEach(() => {
    cy.visit(website);
  });

  it('should finds and clicks the about link - on desktop,', () => {
    cy.viewport('macbook-13');
    cy.get('.main_wrap-about_wrap nav')
      .find('a[href="/about/"]')
      .click();
    cy.url().should('contain', '/about/');
  });

  it('should finds and clicks the times pilot link - on desktop,', () => {
    cy.viewport('macbook-13');
    cy.get('.landing_project-ul')
      .find('a[href="/project/the-times-pilot/"]')
      .click();
    cy.url().should('contain', '/project/the-times-pilot/');
  });

  it('should finds and clicks the times pilot link - on desktop,', () => {
    cy.viewport('macbook-13');
    cy.get('.landing_project-ul')
      .find('a[href="/project/circuit-app/"]')
      .click();
    cy.url().should('contain', '/project/circuit-app/');
  });

  it('should finds and clicks the about link - on small,', () => {
    cy.viewport('iphone-x');
    cy.get('.project_footer-home_page-about_link')
      .find('a[href="/about/"]')
      .click();
    cy.url().should('contain', '/about/');
  });

  it('should finds and clicks the times pilot link - on small,', () => {
    cy.viewport('iphone-x');
    cy.get('.landing_project-ul')
      .find('a[href="/project/the-times-pilot/"]')
      .click();
    cy.url().should('contain', '/project/the-times-pilot/');
  });

  it('should finds and clicks the times pilot link - on small,', () => {
    cy.viewport('iphone-x');
    cy.get('.landing_project-ul')
      .find('a[href="/project/circuit-app/"]')
      .click();
    cy.url().should('contain', '/project/circuit-app/');
  });
});

describe('Check click-through of links from times-pilot screen', () => {
  beforeEach(() => {
    cy.visit(`${website}/project/the-times-pilot/`);
  });

  it('should link back to the home page', () => {
    cy.get('.project_navbar nav')
      .find('a[href="/"]')
      .click();
    cy.url().should('equal', `${website}/`);
  });

  it('should link back to the about page', () => {
    cy.get('.project_navbar nav')
      .find('a[href="/about/"]')
      .click();
    cy.url().should('contain', '/about/');
  });
});

describe('Check click-through of links from circuit-app screen', () => {
  beforeEach(() => {
    cy.visit(`${website}/project/circuit-app/`);
  });
  it('should link back to the home page', () => {
    cy.get('.project_navbar nav')
      .find('a[href="/"]')
      .click();
    cy.url().should('equal', `${website}/`);
  });

  it('should link back to the about page', () => {
    cy.get('.project_navbar nav')
      .find('a[href="/about/"]')
      .click();
    cy.url().should('contain', '/about/');
  });
});