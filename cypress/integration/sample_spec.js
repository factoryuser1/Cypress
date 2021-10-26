describe('My First Test',  ()=>{
    it('Gets, types and asserts', function () {
        // expect(true).to.equal(false)
        //Visits the kitchen sink
        cy.visit('https://example.cypress.io')

        //pause the test
        // cy.pause()

        //Finds an element
        cy.contains('type')

        //Clicks an element and assert
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')

        //Gets, types and asserts
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

    });
})
/*"Given, When, Then", or "Arrange, Act, Assert".*/

/*
First you put the application into a specific state,
then you take some action in the application that causes it to change,
and finally you check the resulting application state.
*/

//Arrange - setup the initial app state
//-visit a web page
//-query for an element

//Act - take an action
//-interact with that element

//Assert - make an assertion
//-make an assertion about the page content/change
