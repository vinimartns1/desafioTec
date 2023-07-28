describe('Cadastro de um usuario', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
    });
    it('Cadastro com sucesso', () => {

        //Acessando o site do sistema
        cy.visit('/')

        //Criando um usuário no sistema
        cy.get('#signin2').click().wait(1000)
        cy.get('#sign-username').type(Cypress.env('username')).wait(1000)
        cy.get('#sign-password').type(Cypress.env('senha'), {log: false})
        cy.get('[onclick="register()"]').click()

   });
});