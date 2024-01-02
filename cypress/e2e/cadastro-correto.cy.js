describe('Pagina de cadastro', () => {
    it('Preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
      cy.contains('a','Register now').click();
      cy.get('[data-test="email"]').type('jessimanfio@teste.com')
      cy.get('[data-test="fullName"]').type('jessi manfio')
      cy.get('[data-test="registerUserName"]').type('jessymanfio')
      cy.get('[data-test="registerPassword"]').type('123456789')
      cy.contains('button','Register').click();
    })
  })