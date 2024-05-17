const nytWebsite = 'http://localhost:3000/project/the-times-pilot';
/* Project Test: NYT */
describe('Tests for NYT Page', () => {
  beforeEach(() => {
    cy.visit(nytWebsite);
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
      .should('exist');
  });

  it('should have the appropriate headline and sub-headline', () => {
    cy.get('.project-headline').within(() => {
      cy.get('h1:nth-of-type(1)').should('have.text', 'the.times.pilot');
      cy.get('h1:nth-of-type(2)').should('have.text', 'Tailoring Your NY Times Digest');
      cy.get('p').should('have.text', 'Seamlessly curate and receive the stories that matter to you with a custom news aggregator and subscriber-focused daily email service.');
    });
  });

  it('should scroll to and find the first "approach" element', () => {
    cy.scrollTo(0, 1800, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.nyt_project_page-approach-section_one').should('be.visible');
    });
  });
  it('should scroll to and find the second "approach" element', () => {
    cy.scrollTo(0, 2000, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.nyt_project_page-approach-section_two').should('be.visible');
    });
  });
  it('should scroll to and find the third "approach" element', () => {
    cy.scrollTo(0, 2600, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.nyt_project_page-approach-section_three').should('be.visible');
    });
  });
  it('should scroll to and find the fourth "approach" element', () => {
    cy.scrollTo(0, 3000, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.nyt_project_page-approach-section_four').should('be.visible');
    });
  });
  it('should scroll to and find the flowchart element', () => {
    cy.scrollTo(0, 4500, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.nyt_project_page-site_flow img').should('be.visible');
    });
  });
  it('should hide the flowchart on small screens', () => {
    cy.viewport('iphone-xr');
    cy.scrollTo(0, 4500, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.nyt_project_page-site_flow img').should('not.be.visible');
    });
  });

  it('should find and load all four images at the bottom of the page', () => {
    cy.scrollTo('bottom', { easing: 'linear', duration: 2000 }).then(() => {
      cy.get('.nyt_project_page-problems-section_three-group figure')
        .should('have.length', 4)
        .each(($figure) => {
          cy.wrap($figure).find('img').should('be.visible');
        });
    });
  });

  it('should scroll to bottom to reveal a `back to all work` button, then scroll to top and hide button', () => {
    cy.scrollTo('bottom', { easing: 'linear', duration: 2000 }).then(() => {
      cy.get('.back_to_all_work').should('be.visible');
    }).then(() => {
      cy.scrollTo('top', { easing: 'linear', duration: 2000 }).then(() => {
        cy.get('.back_to_all_work').should('be.hidden');
      });
    });
  });
});