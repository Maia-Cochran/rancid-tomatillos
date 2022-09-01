describe('Movie Container user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should be able to visit the page and find the header', () => {
    cy.get('h1')
    .contains('Rancid Tomatillos')
  })

  it('should be able to find the logo', () => {
    cy.get('img[class="logo-header"]')
    .should('be.visible')
  })

  it('should find the movie container and the 40 movie cards', () => {
    cy.get('div[class="movie-container"]')
    .should('be.visible')
    .children()
    .should('be.visible')
    .should('have.length', 40)
  })

  it('should be able to click on a movie card and go to Modal', () => {
    cy.get('div[class="movie-card"]')
    .contains('Money Plane')
    .click()
    .location('pathname').should('eq', '/modal/694919')
    .go('back')
    .contains('Away')
    .click()
    .location('pathname').should('eq', '/modal/597398')
    .go('back')
  })
  //modal tests here 
})