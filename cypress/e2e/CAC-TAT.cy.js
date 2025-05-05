//const { afterEach, beforeEach } = require("node:test");

//const { it } = require("node:test");

describe('Central de Atendimento ao Cliente TAT', () => { //set the test suit

   beforeEach(() => {
      cy.visit('./src/index.html');
    })
    it('Verifica o título da aplicação', () => { 
      // runs after each test block
      cy.title().should('match', /Central de atendimento ao Cliente TAT/i); 
    })

    it('Preenche os campos obrigatórios e envia o formulário', () => { 
    const longText = Cypress._.repeat('test' ,10)

    cy.get('[name="firstName"]')
      .as('Nome')
      .should('be.visible')
      .type('Test')
      cy.get('@Nome')
      .should('have.value', 'Test')

      cy.get('[name="lastName"]')
      .as('Sobrenome')
      .should('be.visible')
      .type('QA')
      cy.get('@Sobrenome')
      .should('have.value', 'QA')
 /////////////     

 cy.get('#email')
      .as('E-mail')
      .should('be.visible')
      .type('test@test.com')
      cy.get('@E-mail')
      .should('have.value', 'test@test.com')
      




//////////
      cy.get('[name="open-text-area"]')
      .type(longText,
      
      //.type('Testando', 
        {delay: 10})
  


    
      //////

      cy.get('button[type="submit"]').click()
      cy.get('.success')
      .as('sucesso')
      .should('be.visible')
      cy.get('@sucesso')
      .should('be.visible');



  })
  
  /*
  it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => { 
    // runs after each test block
    cy.get('#email')
    .type('test@test.com')
    cy.get('button[type="submit"]').click()
    cy.get('.success')
    .should('not.visible')
    cy.get('.error')
    .should('be.visible')
  })
  /*
/*
  it.only('testar campo telefone somente números', () => {

    cy.get('#phone')
    .type('test')
    .should('have.value', '')



  })
*/


 it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

  cy.get('[name="firstName"]')
      .type('Denner')
  .should('have.value','Denner' ).clear()
  .should('have.value', '')
  cy.get('[name="lastName"]')
       .type('Santana')
  .should('have.value','Santana' ).clear()
  .should('have.value', '')
  cy.get('#email')
        .type('denner@test.com')
  cy.get('#phone')
         .type('11982011101')
  .should('have.value','11982011101' ).clear()
  .should('have.value', '')


  
})

  
    


  //it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
   //cy.get('button[type="submit"]').click()
  //cy.get('.error')
  //.should('be.visible')

  
  //})

it('envia o formuário com sucesso usando um comando customizado', () => {
/*
  const data = {
firstName: 'Denner',
lastName: 'Santana',
email: 'denner@test.com',
phone: '123456789'
}
*/

cy.fillMandatoryFieldsAndSubmit()
cy.get('.success').should('be.visible')


})



it('Localizar elementos por contains', () => {

  cy.contains('Nome').type('Test')
  cy.contains('Sobrenome').type('123')
  cy.contains('E-mail').type('denner@test.com')
  cy.contains('Telefone').type('123456666')
  cy.contains('Como podemos te ajudar?').type('testtestest')
  cy.contains('Enviar').click()
  cy.contains('Mensagem enviada com sucesso').should('be.visible')
  cy.get('#product').select(1)
  .should('have.value', 'blog')
  cy.get('input[type="radio"]')
  .check('feedback')
  cy.get('input[type="checkbox"]').check('phone')
  .should('be.checked')

})

it('marca o tipo de atendimento Feedback & marcador de seleção', () => {
cy.get('input[type="radio"]').check('feedback')
.should('be.checked')
cy.get('input[type="radio"]').check('ajuda')
.should('be.checked')
cy.get('input[type="radio"]').check('elogio')
.should('be.checked')
cy.get('input[type="checkbox"]').check('phone')
.should('be.checked')
cy.get('input[type="checkbox"]').check('email')
.should('be.checked')
} )

it('marca o tipo de atendimento Feedback & marcador de seleção', () => {
  cy.get('input[type="radio"]')
  .each(typeOfService => {
    cy.wrap(typeOfService)
    .check()
    .should('be.checked')

  })


})

it('marcar ambos checkboxes,depois desmarcar o último', () => {
  cy.get('input[type="checkbox"]')
  .check('phone')
  .should('be.checked')
  cy.get('input[type="checkbox"]').check('email')
  .should('be.checked')  
  cy.get('input[type="checkbox"]').last().uncheck()
  .should('not.checked')

})

it('marcar ambos checkboxes com best practices', () => {
  cy.get('input[type="checkbox"]')
  .check()
  .should('be.checked')
  .first()
  .uncheck()
  .should('not.checked')


})

it('seleciona um arquivo da pasta fixtures', () => {
cy.get('#file-upload')
.selectFile('cypress/fixtures/example.txt')
.should(input => { 
expect(input[0].files[0].name).to.equal('example.txt')
//console.log(input[0].files[0].name)
})

})

it('seleciona um arquivo simulando um drag-and-drop', () =>{
  cy.get('#file-upload')
  .selectFile('cypress/fixtures/example.txt', {action: 'drag-drop'})
  .should(input => {//.then(input => { 
  expect(input[0].files[0].name).to.equal('example.txt')})


})

it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () =>{
  cy.fixture('example.txt', {encoding: null}).as('arquivo')
  cy.get('#file-upload')
  .selectFile('@arquivo')
  .should('be.visible')
  

})


it('testando e2e testing', () =>{
cy.fillMandatoryFieldsAndSubmit()

})

it('verifica que a política abre em outra aba sem a necessidade de um clique', () => {
cy.contains('a', 'Política de Privacidade')
.should('have.attr', 'href', 'privacy.html')
.and('have.attr', 'target', '_blank')
.click()



})

it.only('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
  cy.contains('a', 'Política de Privacidade').invoke('removeAttr', 'target')
  .click()
cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')

})


})
