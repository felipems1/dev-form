describe('step one to two navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should not navigate to the second stage if the form has not been filled out', () => {
    cy.contains('1/3').should('be.visible')

    cy.get('button').click()

    cy.contains('2/3').should('not.exist')
  })

  it('must navigate to the second step when clicking the next button', () => {
    cy.contains('1/3').should('be.visible')

    cy.get('input').type('Felipe')

    cy.get('button').click()

    cy.contains('2/3').should('be.visible')
  })
})
