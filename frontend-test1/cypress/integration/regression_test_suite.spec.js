/// <reference types="cypress" />

// This is a first test suite
describe('Regression test suite', function(){
    // Test login function
    it('Perform valid login tc', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get('div.field:nth-child(1) > input:nth-child(2)').type('tester01')
        cy.get('div.field:nth-child(2) > input:nth-child(2)').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
    });

    // Test view rooms
    it('View rooms', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get('div.field:nth-child(1) > input:nth-child(2)').type('tester01')
        cy.get('div.field:nth-child(2) > input:nth-child(2)').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').contains('Create Room')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')
        // logout
        cy.get('.user > .btn').click()
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
    });

    // Test create/add room
    it('Create room', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get('div.field:nth-child(1) > input:nth-child(2)').type('tester01')
        cy.get('div.field:nth-child(2) > input:nth-child(2)').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').contains('Create Room')
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > select').select('Twin')
        cy.get(':nth-child(2) > input').type('333')
        cy.get(':nth-child(3) > input').type('3')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('900')
        cy.get('[value="sea_view"]').click()
        cy.get('body').type('{ctrl}', {release: false})
            cy.get('[value="penthouse"]').click()
        cy.get('a.btn:nth-child(2)').click()

    });
});