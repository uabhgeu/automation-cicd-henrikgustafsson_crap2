/// <reference types="cypress" />

// This is a first test suite
describe('Regression test suite', function(){
    // Test login function
    it('Perform valid login tc', function(){
        // Open the login page
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.percySnapshot('login-page')

        // Fill in the login information
        cy.get('div.field:nth-child(1) > input:nth-child(2)').type('tester01')
        cy.get('div.field:nth-child(2) > input:nth-child(2)').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        
        // Open dash
        cy.contains('Tester Hotel Overview')
        cy.percySnapshot('dash-page')

        // Click logout
        cy.get('.user > .btn').click()
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
    });

    // Test view rooms
    it('View rooms', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.percySnapshot('login-page')
        // Fill in login credentials
        cy.get('div.field:nth-child(1) > input:nth-child(2)').type('tester01')
        cy.get('div.field:nth-child(2) > input:nth-child(2)').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        // Assert page
        cy.contains('Tester Hotel Overview')
        cy.percySnapshot('Dash page')
        // Click view rooms button
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.percySnapshot('View rooms')
        cy.get('h2 > .btn').contains('Create Room')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')
        // logout
        cy.get('.user > .btn').click()
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
    });

});