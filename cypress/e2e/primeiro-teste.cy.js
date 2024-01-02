describe('template spec', () => {
    it('passes', () => {
      cy.visit(' https://3076-cypress-alurapic-front.vercel.app//')
      cy.contains('a', 'Register now').click();
      
      cy.get('input[formcontrolname="email"]').type('jessi@testando.com.br');
      cy.get('input[formcontrolname="fullName"]').type('jessi manfio silva ');
      cy.get('input[formcontrolname="userName"]').type('jessicamanfio');
      cy.get('input[formcontrolname="password"]').type('jessi123');
      cy.contains('button', 'Register').click();
    })
  })