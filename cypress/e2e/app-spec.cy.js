
beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('User navigating main page', () => {
  it('boilerplate truthy test', () => {
    expect(true).to.equal(true)
  })
  
  it('Should not complete fetch() if error code occurs', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 401
    })
    .get('h1').should('contain', 'Our server appears to be down, please try again later')
  })
  
  it('Should complete fetch() on a healthy 201 response', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 201,
      body: {
        id: 694919,
        poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        title: "Money Plane",
        average_rating: 6.875,
        release_date: "2020-09-29"
      }
    })
  })
  
  it('Should be able to click on a movie, and open the corresponding URL', () => {
    cy.get('img#694919').click()
    cy.url().should('include', '/694919')
  });

  it('Should be able to render the correct elements on page load', () => {
    cy.contains('Rancid Tomatillos')
    .get('img#694919')
  })



  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })
})