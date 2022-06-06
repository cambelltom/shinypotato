it('google test', function(){
    cy.visit('https://www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    
    cy.get('.gLFyf')
        .type('automation step by step')
        .type('{enter}')

})