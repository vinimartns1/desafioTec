describe('Autenticação um usuario', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
    });
    it('Login com sucesso', () => {

        //Acessando o site do sistema
        cy.visit('/')

        //Realizar Login com sucesso no sistema
        cy.login(Cypress.env('username'), Cypress.env('senha'))

   });
});