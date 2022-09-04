describe('Error handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the Not Found component', () => {
    cy.visit('http://localhost:3000/NotFound')
    cy.get('h1')
    .should('be.visible')
    .contains(`Sorry, can't find that.`)
  })
})