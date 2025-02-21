describe('Verivy Login Functional', () => {
  it('Success Login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/')
    cy.get('#email').type('mawar@mail.com')
    cy.get('#pass').type('Abcde123')
    cy.get('#send2').click()
    cy.get('.base').should('have.text','My Account')
  })
})