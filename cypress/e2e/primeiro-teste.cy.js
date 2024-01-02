describe('template spec', () => {
    it('passes', () => {
      cy.visit(' https://3076-cypress-alurapic-front.vercel.app//')
      cy.contains('a', 'Register now').click();
      
      cy.get('input[formcontrolname="email"]').type('jessimanfio@teste.com');
      cy.get('input[formcontrolname="fullName"]').type('Jessica manfio');
      cy.get('input[formcontrolname="userName"]').type('jessymanfio');
      cy.get('input[formcontrolname="password"]').type('123456789');
      cy.contains('button', 'Register').click();
    })
  })