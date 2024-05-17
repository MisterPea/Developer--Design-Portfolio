const circuitWebsite = 'http://localhost:3000/project/circuit-app';

/* Project Test: Circuit */
describe('Tests for Circuit App Page', () => {
  beforeEach(() => {
    cy.visit(circuitWebsite);
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
      cy.get('h1:nth-of-type(1)').should('have.text', 'Circuit App');
      cy.get('h1:nth-of-type(2)').should('have.text', 'Revolutionizing Time Management for Creatives');
      cy.get('p').should('have.text', 'An iOS app to empower creative minds by bettering focus and eliminating burnout.');
    });
  });

  it('should scroll to and find the first "approach" element', () => {
    cy.scrollTo(0, 1500, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.circuit_project_page-approach-section_one figure').should('be.visible');
    });
  });
  it('should scroll to and find the second "approach" element', () => {
    cy.scrollTo(0, 2250, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.circuit_project_page-approach-section_two figure').should('be.visible');
    });
  });
  it('should scroll to and find the third "approach" element', () => {
    cy.scrollTo(0, 3300, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.circuit_project_page-approach-section_three picture')
        .should('have.length', 3)
        .each(($picture) => {
          cy.wrap($picture).find('img').should('be.visible');
        });
    });
  });

  it('should properly display the phone diagrams', () => {
    cy.scrollTo(0, 4600, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.diagram_section figure')
        .should('have.length', 4)
        .each(($picture, index) => {
          if (index !== 3) {
            cy.wrap($picture).find('img').should('be.visible');
          } else {
            cy.wrap($picture).find('img').should('not.be.visible');
          }
        });
    });
  });

  it('should scroll to and find the flowchart element', () => {
    cy.scrollTo(0, 6000, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.circuit_project_page-site_flow img').should('be.visible');
    });
  });
  it('should scroll to and not find the flowchart element on small screens', () => {
    cy.viewport('iphone-xr');
    cy.scrollTo(0, 5500, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.circuit_project_page-site_flow img').should('not.be.visible');
    });
  });
  // it('should display the alt designs', () => {
  //   cy.scrollTo('bottom', { easing: 'linear', duration: 2000 }).then(() => {
  //     cy.get('.circuit_project_page-approach.circuit_alts picture')
  //       .should('have.length', 2)
  //       .each(($img) => {
  //         cy.wrap($img).find('img').should('be.visible');
  //       });
  //   });
  // });

  // it('should scroll to bottom to reveal a `back to all work` button, then scroll to top and hide button', () => {
  //   cy.scrollTo('bottom', { easing: 'linear', duration: 2000 }).then(() => {
  //     cy.get('.back_to_all_work').should('be.visible');
  //   }).then(() => {
  //     cy.scrollTo('top', { easing: 'linear', duration: 2000 }).then(() => {
  //       cy.get('.back_to_all_work').should('be.hidden');
  //     });
  //   });
  // });
});