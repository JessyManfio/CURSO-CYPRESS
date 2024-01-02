
describe('Página de login', () => {

    beforeEach(() => {
        cy.visit(' https://3076-cypress-alurapic-front.vercel.app')
    })

        it('Verifica mensagens de campos obrigatórios na página de login', () => {
            cy.contains('User name is required!').should('be.visible');
            cy.contains('Password is required!').should('be.visible');
        
        })
})

describe('Pagina de Login', () => {
    it('Verificar mensagens de campos obrigatórios', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
      
    })
  })

