const website = 'http://localhost:3000';

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(website);
  });
  it('should see a site head portfolio name', () => {
    cy.get('.landing-greeting').contains("Hello! I'm");
    cy.get('.landing-name').contains("Perry Angelora");
  });

  it('should have 2 projects', () => {
    cy.get('.landing_project-ul').find('.landing_project-li').should('have.length', 2);
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
  it('should find the nyt pilot project on the main page', () => {
    cy.get('.landing_project-ul li')
      .find('a[href="/project/circuit-app/"]')
      .should('exist');
  });
});

/* Project Test: NYT */
describe('Tests for NYT Page', () => {
  beforeEach(() => {
    cy.visit(`${website}/project/the-times-pilot`);
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



/* Project Test: Circuit */
describe('Tests for Circuit App Page', () => {
  beforeEach(() => {
    cy.visit(`${website}/project/circuit-app`);
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
  it('should display the alt designs', { retries: 3 }, () => {
    cy.scrollTo('bottom', { easing: 'linear', duration: 2000 }).then(() => {
      cy.get('.circuit_project_page-approach.circuit_alts picture', { timeout: 10000 })
        .should('have.length', 2)
        .each(($img) => {
          cy.wrap($img).find('img').should('be.visible');
        });
    });
  });
  it('should scroll to bottom to reveal a `back to all work` button, then scroll to top and hide button', { retries: 3 }, () => {
    cy.scrollTo('bottom', { easing: 'linear', duration: 2000 }).then(() => {
      cy.get('.back_to_all_work', { timeout: 10000 }).should('be.visible');
    }).then(() => {
      cy.scrollTo('top', { easing: 'linear', duration: 2000 }).then(() => {
        cy.get('.back_to_all_work', { timeout: 10000 }).should('be.hidden');
      });
    });
  });
});

describe('Tests for about page', () => {
  beforeEach(() => {
    cy.visit(`${website}/about`);
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