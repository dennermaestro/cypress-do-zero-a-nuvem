
Cypress._.times(5, () => {
    it('Testando a nova janela privacy de forma independente', () => {

        cy.visit('./src/privacy.html')
        cy.contains('h1', 'CAC TAT').should('be.visible')
        
        
        })
})


