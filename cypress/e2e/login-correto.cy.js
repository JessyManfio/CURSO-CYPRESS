describe('Pagina de Login', () => {
    it('Preencher os campos do login corretamente pararealizar login', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.get('[data-test="loginUserName"]').type('jessicamanfio')
      cy.get('[data-test="loginPassword"]').type('jessi123')
      cy.contains('button',' login ').click();
    })
  })