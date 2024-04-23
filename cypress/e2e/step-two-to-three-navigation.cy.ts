describe('step two to three navigation', () => {
  beforeEach(() => {
    cy.visit('/step-two')
  })
  it('should not navigate to the third step if the form has not been completed', () => {
    cy.contains('2/3').should('be.visible')

    cy.get('button').click()

    cy.contains('3/3').should('not.exist')
  })

  it('should navigate to the third step when clicking the next button', () => {
    cy.contains('2/3').should('be.visible')

    cy.get('#select-option').click()

    cy.get('button').click()

    cy.contains('3/3').should('be.visible')
  })
})
