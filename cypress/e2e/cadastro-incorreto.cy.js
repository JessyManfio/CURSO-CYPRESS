describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit(' https://3076-cypress-alurapic-front.vercel.app')
    })

    it('Verifica mensagens de campos obrigatórios na página de cadastro', () => {
        cy.get('[data-test="register"]').click();
        cy.get('[data-test="btnRegister"]').click();
        cy.get('[data-test="btnRegister"]').click();
        cy.contains('Email is required!').should('be.visible');
        cy.contains('Full name is required!').should('be.visible');
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
    })
})