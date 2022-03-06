describe('Question Page', () => {
  it('Should show five answer options for each year', () => {
    cy.intercept('GET', 'https://chart-toppers-api.herokuapp.com/api/v1/songs', { fixture: 'sampleSongData.json' })
    cy.visit('http://localhost:3000')
    cy.get('.quiz-button').eq(3).click()

    cy.get('header').contains('Chart Toppers')
    cy.get('footer').contains('Created by Ali Roemhilt')
    
    cy.get('#151').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/61bqP3BMkUL._UX500_FMwebp_QL85_.jpg')
    cy.get('#151').find('.title').contains('Tik Tok')
    cy.get('#151').find('.artist').contains('Ke$ha')

    cy.get('#152').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/51h3DyhycIL._UX500_FMwebp_QL85_.jpg')
    cy.get('#152').find('.title').contains('Need You Now')
    cy.get('#152').find('.artist').contains('Lady A')

    cy.get('#153').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/51Z9+pW08xL._UX500_FMwebp_QL85_.jpg')
    cy.get('#153').find('.title').contains('Hey, Soul Sister')
    cy.get('#153').find('.artist').contains('Train')

    cy.get('#154').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/41J6+SiG+pL._UX500_FMwebp_QL85_.jpg')
    cy.get('#154').find('.title').contains('California Gurls')
    cy.get('#154').find('.artist').contains('Katy Perry featuring Snoop Dogg')

    cy.get('#155').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/517VaI8N9ZL._UX500_FMwebp_QL85_.jpg')
    cy.get('#155').find('.title').contains('OMG')
    cy.get('#155').find('.artist').contains('Usher featuring will.i.am')
  })
})