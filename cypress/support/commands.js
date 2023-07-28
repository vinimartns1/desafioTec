Cypress.Commands.add('login', (username, senha) => {
    cy.visit('/')
    cy.get('#login2').click().wait(1000)
    cy.get('#loginusername').type(username).wait(1000)
    cy.get('#loginpassword').type(senha, {log: false})
    cy.get('[onclick="logIn()"]').click()
    cy.contains('Welcome Vinimartns1').should('be.visible')      
})