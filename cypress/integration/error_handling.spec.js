describe('Error Handling', () => {
  it('Should handle 404 error', () => {
    cy.intercept('GET', 'https://chart-toppers-api.herokuapp.com/api/v1/songs', { statusCode: 404 })
      .visit('http://localhost:3000')
    
    cy.get('header').should('have.text', 'Put your music knowledge to the test...CHART TOPPERS')
      .get('footer').should('have.text', 'Created by Ali RoemhildtLinkedInGitHub')
      .get('.error-message').should('have.text', '404. Oops! Looks like this page doesn\'t exist.')
      .get('.error-link').should('have.attr', 'href', '/home').should('have.text', 'Take me to Chart Toppers home page')
  });

  it('Should handle 400 errors', () => {
    cy.intercept('GET', 'https://chart-toppers-api.herokuapp.com/api/v1/songs', { statusCode: 400 })
      .visit('http://localhost:3000')

    cy.get('header').should('have.text', 'Put your music knowledge to the test...CHART TOPPERS')
      .get('footer').should('have.text', 'Created by Ali RoemhildtLinkedInGitHub')
      .get('.error-message').should('have.text', '400. Something went wrong... please reload the page and try again!')
      .get('.error-link').should('have.attr', 'href', '/home').should('have.text', 'Take me to Chart Toppers home page')
  });

  it('Should handle 500 error', () => {
    cy.intercept('GET', 'https://chart-toppers-api.herokuapp.com/api/v1/songs', { statusCode: 500 })
      .visit('http://localhost:3000')

    cy.get('header').should('have.text', 'Put your music knowledge to the test...CHART TOPPERS')
      .get('footer').should('have.text', 'Created by Ali RoemhildtLinkedInGitHub')
      .get('.error-message').should('have.text', '500. Sorry, looks like we\'re having some trouble on our end. We\'re working on it... please come back later!')
  });

  it('Should handle incorrect URLs', () => {
    cy.intercept('GET', 'https://chart-toppers-api.herokuapp.com/api/v1/songs', { fixture: 'sampleSongData.json' })
      .visit('http://localhost:3000/test')

    cy.get('header').should('have.text', 'Put your music knowledge to the test...CHART TOPPERS')
      .get('footer').should('have.text', 'Created by Ali RoemhildtLinkedInGitHub')
      .get('.error-message').should('have.text', 'Oops! Looks like this page doesn\'t exist.')
      .get('.error-link').should('have.attr', 'href', '/home').should('have.text', 'Take me to Chart Toppers home page')

    cy.visit('http://localhost:3000/quiz/test')
    
    cy.get('header').should('have.text', 'Put your music knowledge to the test...CHART TOPPERS')
      .get('footer').should('have.text', 'Created by Ali RoemhildtLinkedInGitHub')
      .get('.error-message').should('have.text', 'Oops! Looks like this page doesn\'t exist.')
      .get('.error-link').should('have.attr', 'href', '/home').should('have.text', 'Take me to Chart Toppers home page')
  });
});