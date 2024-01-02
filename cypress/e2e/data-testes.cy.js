describe('Página de cadastro', () => {
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
      cy.get('[data-test="register"]').click();
      cy.get('input[data-test="email"]').type('jessimanfio@teste.com');
      cy.get('input[data-test="fullName"]').type('Jessica manfio');
      cy.get('input[data-test="registerUserName"]').type('jessymanfio');
      cy.get('input[data-test="registerPassword"]').type('123456789');
      cy.get('[data-test="btnRegister"]').click();
    })
  })