it('Testando a nova janela privacy de forma independente', () => {

cy.visit('./src/privacy.html')
cy.contains('CAC TAT').should('be.visible')


})