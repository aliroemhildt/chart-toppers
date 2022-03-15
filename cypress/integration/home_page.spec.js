describe('Home Page', () => {
  it('Should show quiz options and page info on home page', () => {
    cy.intercept('GET', 'https://chart-toppers-api.herokuapp.com/api/v1/songs', { fixture: 'sampleSongData.json' })
      .visit('http://localhost:3000')

      .get('.home-link').contains('CHART TOPPERS')
      .get('.quiz-button').should('have.text', '1980\'s1990\'s2000\'s2010\'s')
      .get('footer > p').contains('Created by Ali Roemhildt')
      .get('.linkedin').should('have.attr', 'href', 'https://www.linkedin.com/in/aliroemhildt/')
  });
})