describe('Pagina de cadastro', () => {
  it('Preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
    cy.contains('a','Register now').click();
    cy.get('[data-test="email"]').type('jessi@testando.com.br')
    cy.get('[data-test="fullName"]').type('jessi manfio silva ')
    cy.get('[data-test="registerUserName"]').type('jessicamanfio')
    cy.get('[data-test="registerPassword"]').type('jessi123')
    cy.contains('button','Register').click();
  })
})