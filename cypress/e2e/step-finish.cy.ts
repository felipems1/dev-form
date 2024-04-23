describe('step finish', () => {
  beforeEach(() => {
    cy.visit('/step-three')
  })

  it('should not complete this step if the form has not been completed', () => {
    cy.contains('3/3').should('be.visible')

    cy.get('button').click()

    cy.contains('1/3').should('not.exist')
  })

  it('must complete the step by clicking the next button', () => {
    cy.contains('3/3').should('be.visible')

    cy.get('input[type="email"]').type('teste@gmail.com')

    cy.get('input[type="text"]').type('user')

    cy.get('button').click()

    cy.contains('1/3').should('be.visible')
  })
})
