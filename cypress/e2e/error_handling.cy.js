describe('Error handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/NotFound')
  })

  it('should display the Not Found component', () => {
    cy.get('[class*=error-wrapper]')
    .should('be.visible')
    .get('h1')
    .should('be.visible')
    .contains(`Sorry, can't find that.`)
    .get('h2')
    .should('be.visible')
    .contains('404')
  })
})