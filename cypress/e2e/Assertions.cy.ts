it('Learning Assertions', function(){
    cy.visit('https://example.cypress.io')

    cy.contains('get').click()

    cy.get('#query-btn', {timeout: 3000})
        .should('contain', 'Button')
        .should('have.class','query-btn')
        .should('be.visible')
        .should('be.enabled')

     cy.get('#query-btn').invoke('attr', 'id')
        .should('equal','query-btn')
    
    cy.get('#query-btn')
    .should('contain', 'Button')
    .and('have.class','query-btn')



    ///Explicit Assertons
    //expect
    expect(true).to.be.true

    let name = 'test'
    expect(name).to.be.equal('test')


    //Assert
    assert.equal(4,4, 'Not Equal')
    assert.strictEqual(4,4, 'Not strictEqual')

})