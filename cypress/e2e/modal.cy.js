describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/modal/597398')
  })
  
  it('makes a call to the API to access data of single movie details', () => {
    
  })

  it('should be able to visit the page and find the header', () => {
    cy.get('h1')
    .contains('Rancid Tomatillos')
  })

  it('should be able to find the logo', () => {
    cy.get('img[class="logo-header"]')
    .should('be.visible')
  })
  
  it('should return home when the X button is clicked', () => {
    cy.get('button')
    .click()
    .get('div[class="movie-container"]')
    .should('be.visible')
  })
  
  it('should find the Modal with the single movie details', () =>{
    cy.get('section[class="movie-info"]')
    .should('be.visible')
    .children()
    .should('be.visible')
    .get('section[class="movie-details-container"]')
    // .should('include')
  })

  it('should ', () => {

  })
})