const d3Website = 'http://localhost:3000/project/made-with-d3';

/* Project Test: Circuit */
describe('Tests for D3 Projects Page', () => {
  beforeEach(() => {
    cy.visit(d3Website);
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
      cy.get('h1:nth-of-type(1)').should('have.text', 'Made With D3.js');
      cy.get('h1:nth-of-type(2)').should('have.text', 'From Numbers to Narratives');
      cy.get('p').should('have.text', 'Exploring datasets with JavaScript and D3.js visualizations.');
    });
  });

  it('should scroll to and find the Anscombe Quartet Project element', () => {
    cy.scrollTo(0, 1200, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-anscombe').should('be.visible');
    });
  });
  it('should scroll to and find 4 Anscombe chart elements', () => {
    cy.scrollTo(0, 1200, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.anscombe-main-div').should('be.visible')
        .find('svg')
        .should('have.length', 4);
    });
  });
  it('should find the title and text for Anscombe Quartet', () => {
    cy.scrollTo(0, 1200, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.anscombe-text h3').should('have.text', 'Anscombe Quartet');
      cy.get('.anscombe-text p').should('have.text', 'An illustration of why visualizing data is important. The summary statistics (regression line) can be the same, while the data distributions can be very different.');
    });
  });
  it('should have the appropriate link for Anscombe Gist', () => {
    cy.scrollTo(0, 1200, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-anscombe a').should('have.attr', 'href').should('equal', 'https://gist.github.com/MisterPea/8a71b1d359a12c8f9fd1eadcc83deadb');
    });
  });

  it('should scroll to and find the LIRR Schedule Project element', () => {
    cy.scrollTo(0, 2060, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-lirr').should('be.visible');
      cy.get('.project_page_d3-project_wrapper-lirr svg').should('be.visible');
    });
  });
  it('should find the title and text for LIRR Schedule Project', () => {
    cy.scrollTo(0, 2000, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.lirr-text h3').should('have.text', 'Ibry/Marey Train Schedule');
      cy.get('.lirr-text p').should('have.text', "A contemporary recreation of the train schedule designed by Charles Ibry and published by Étienne-Jules Marey in his book on data visualizations: La Méthode Graphique Dans les Sciences Expérimentales et Principalement en Physiologie et en Médecine — brought to our attention in Edward Tufte's book The Visual Display of Quantitative Information. This version is the elucidation of the Long Island Railroad schedule.");
    });
  });
  it('should have the appropriate link for LIRR Schedule Gist', () => {
    cy.scrollTo(0, 2000, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-lirr a').should('have.attr', 'href').should('equal', 'https://gist.github.com/MisterPea/c4e1048486832fa26f7a9f0e21ee01aa');
    });
  });

  it('should scroll to and find the Insertion Sort Project element', () => {
    cy.scrollTo(0, 3000, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-insertion_sort').should('be.visible');
      cy.get('.project_page_d3-project_wrapper-insertion_sort svg').should('be.visible');
    });
  });
  it('should find the title and text for Insertion Sort Project', () => {
    cy.scrollTo(0, 3000, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.insertion_sort-text h3').should('have.text', 'Visualizing Insertion Sort: An Asynchronous Callback Approach');
      cy.get('.insertion_sort-text p').should('have.text', "This project is a visualization of the classic insertion sort algorithm, an O(n2) complexity method. Due to the challenges of sequencing and updating asynchronous operations, this implementation primarily uses callbacks. This approach ensures the animations of bar positions is accurately sequenced, which keeps the bars and the array they represent in sync with each other.");
    });
  });
  it('should have the appropriate link for Insertion Sort Gist', () => {
    cy.scrollTo(0, 3000, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-insertion_sort a').should('have.attr', 'href').should('equal', 'https://gist.github.com/MisterPea/edabc35517d98830752a405ab13b1047');
    });
  });

  it('should scroll to and find the Subway Ridership Project element', () => {
    cy.scrollTo(0, 3950, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-ridership').should('be.visible');
      cy.get('.project_page_d3-project_wrapper-ridership svg').should('be.visible');
    });
  });
  it('should find the title and text for Subway Ridership Project', () => {
    cy.scrollTo(0, 3950, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.ridership-text h3').should('have.text', 'New York City Subway Pandemic Ridership');
      cy.get('.ridership-text p').should('have.text', "A plotting of the precipitous decline in subway ridership following the discovery of COVID-19 in New York City. This chart is a combination of a daily bar graph with pandemic-related touchstones, which furnish context to the variance in subway ridership.");
    });
  });
  it('should have the appropriate link for Subway Ridership Gist', () => {
    cy.scrollTo(0, 3950, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-ridership a').should('have.attr', 'href').should('equal', 'https://gist.github.com/MisterPea/b6cfd16570d16ac57bd0d0b97611eb00');
    });
  });
  
  it('should scroll to and find the NYC Weather Project element', () => {
    cy.scrollTo(0, 4820, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-weather').should('be.visible');
      cy.get('.project_page_d3-project_wrapper-weather svg').should('be.visible');
    });
  });
  it('should find the title and text for NYC Weather Project', () => {
    cy.scrollTo(0, 4820, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.weather-text h3').should('have.text', 'New York City Weather');
      cy.get('.weather-text p').should('have.text', "A dual axis, time series chart plotting the daily temperature range and the corresponding cumulative precipitation for New York City.");
    });
  });
  it('should have the appropriate link for NYC Weather', () => {
    cy.scrollTo(0, 4820, { easing: 'linear', duration: 1000 }).then(() => {
      cy.get('.project_page_d3-project_wrapper-weather a').should('have.attr', 'href').should('equal', 'https://gist.github.com/MisterPea/066915295ec71286a2d2c01da9037b19');
    });
  });
  
  // it('should scroll to bottom to reveal a `back to all work` button, then scroll to top and hide button', () => {
  //   cy.scrollTo('bottom', { easing: 'linear', duration: 5000 }).then(() => {
  //     cy.get('.back_to_all_work').should('be.visible');
  //   }).then(() => {
  //     cy.scrollTo('top', { easing: 'linear', duration: 5000 }).then(() => {
  //       cy.get('.back_to_all_work').should('be.hidden');
  //     });
  //   });
  // });
});