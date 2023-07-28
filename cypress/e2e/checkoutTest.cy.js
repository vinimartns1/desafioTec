describe('Realizando todo o processo de Checkout', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
    });
    it('Compra realizada com sucesso', () => {

        //Realizar Login no sistema
        cy.login(Cypress.env('username'), Cypress.env('senha'))

        //Adicionando produto ao carrinho
        cy.contains('Iphone 6 32gb').click()
        cy.contains('Product description').should('be.visible')
        cy.get('[onclick="addToCart(5)"]').click()

        //Acessando o carrinho
        cy.get('#cartur').click()
        cy.contains('Iphone 6 32gb').should('be.visible')
        cy.get('[class="btn btn-success"]').click()

        //Preenchendo dados de entrega e pagamento
        cy.get('#name').type('Vinicius Martins')
        cy.get('#country').type('Brasil')
        cy.get('#city').type('São José do Rio Pardo')
        cy.get('#card').type('5386 5162 7284 9629')
        cy.get('#month').type('05')
        cy.get('#year').type('2024')
        cy.get('[onclick="purchaseOrder()"]').click()

        //Compra realizada com sucesso
        cy.contains('Thank you for your purchase!').should('be.visible')

   });
});