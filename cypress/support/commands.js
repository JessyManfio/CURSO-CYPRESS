
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('[data-test="loginUserName"]').type(nome);
    cy.get('[data-test="loginPassword"]').type(senha);
    cy.get('[data-test="loginBtn"]').click();
    cy.contains('a', '(Logout)').should('be.visible');
})