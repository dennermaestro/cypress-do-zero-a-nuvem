// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {

    firstName: 'Default',
    lastName: 'Standard',
    email: 'default@example.com',
    phone: '58454400'
    }) => {

    const longText = Cypress._.repeat('test' ,10)
    cy.get('[name="firstName"]').type(data.firstName)
    cy.get('[name="lastName"]').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#phone').type(data.phone)
    cy.get('[name="open-text-area"]').type(longText, {delay: 10})
    cy.get('button[type="submit"]').click()
    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.txt')
     .should(input => { 
      expect(input[0].files[0].name).to.equal('example.txt')
    
     })

})