describe('App loading', () => {
  it('Loads successfully', () => {
    cy.visit('http://127.0.0.1:3000')
    cy.get('div.App').should('be.visible')
  })
})