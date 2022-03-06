describe('Question Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://chart-toppers-api.herokuapp.com/api/v1/songs', { fixture: 'sampleSongData.json' })
      .visit('http://localhost:3000')
      .get('.quiz-button').eq(3).click()
  });

  it('Should show five answer options for each year', () => {
    cy.get('header').contains('Chart Toppers')
      .get('footer').contains('Created by Ali Roemhilt')
    
      .get('#151').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/61bqP3BMkUL._UX500_FMwebp_QL85_.jpg')
      .get('#151').find('.title').contains('Tik Tok')
      .get('#151').find('.artist').contains('Ke$ha')

      .get('#152').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/51h3DyhycIL._UX500_FMwebp_QL85_.jpg')
      .get('#152').find('.title').contains('Need You Now')
      .get('#152').find('.artist').contains('Lady A')

      .get('#153').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/51Z9+pW08xL._UX500_FMwebp_QL85_.jpg')
      .get('#153').find('.title').contains('Hey, Soul Sister')
      .get('#153').find('.artist').contains('Train')

      .get('#154').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/41J6+SiG+pL._UX500_FMwebp_QL85_.jpg')
      .get('#154').find('.title').contains('California Gurls')
      .get('#154').find('.artist').contains('Katy Perry featuring Snoop Dogg')

      .get('#155').find('img').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/517VaI8N9ZL._UX500_FMwebp_QL85_.jpg')
      .get('#155').find('.title').contains('OMG')
      .get('#155').find('.artist').contains('Usher featuring will.i.am');
  });

  it('Should show score and link to home page at the end of the quiz', () => {
    cy.get('#151').click()
      .get('#157').click()

      .get('.results-container').find('p').contains('Score: 1/2')

      .get('.player-answers').find('p').contains('Your Guesses:')
      .get('.player-answers').find('.song-card').eq(0).contains('Tik Tok')
      .get('.player-answers').find('.song-card').eq(1).contains('Party Rock Anthem')

      .get('.correct-answers').find('p').contains('Answers:')
      .get('.correct-answers').find('.song-card').eq(0).contains('Tik Tok')
      .get('.correct-answers').find('.song-card').eq(1).contains('Rolling In The Deep')

      .get('.results-container').find('a:first').should('have.attr', 'href', '/')
  });
});