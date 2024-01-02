<<<<<<< HEAD

Cypress.Commands.add('login', (nome, senha) => {
    cy.get('[data-test="loginUserName"]').type(nome);
    cy.get('[data-test="loginPassword"]').type(senha);
    cy.get('[data-test="loginBtn"]').click();
    cy.contains('a', '(Logout)').should('be.visible');
})
=======
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
>>>>>>> c5089fe17af5d6e59394665f87f638e826d85b16
