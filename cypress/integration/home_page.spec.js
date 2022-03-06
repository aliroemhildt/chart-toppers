describe('Home Page', () => {
  it('Should show quiz options and page info on home page', () => {
    cy.intercept('GET', 'https://chart-toppers-api.herokuapp.com/api/v1/songs', { fixture: 'sampleSongData.json' })
    cy.visit('http://localhost:3000')

    cy.get('.page-title').contains('Chart Toppers')
      .get('.quiz-button').should('have.text', '1980\'s1990\'s2000\'s2010\'s')
      .get('footer > p').contains('Created by Ali Roemhilt')
      .get('.linkedin').should('have.attr', 'href', 'https://www.linkedin.com/in/aliroemhildt/')
  })
})