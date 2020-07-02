/// <reference types="cypress" />

// Elements

const titleOfDasboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const viewRoomButton = ':nth-child(1) > .btn'
const viewClientButton = ':nth-child(2) > a:nth-child(3)'


// Actions/Functions

// Assert right page
function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDasboardPage)
}

// View rooms and assert
function viewRooms(cy, contentToConfirm){
    cy.get(viewRoomButton).click()
    cy.contains(contentToConfirm)
}

// View client and assert
function viewClient(cy, contentToConfirm){
    cy.get(viewClientButton).click()
    cy.contains(contentToConfirm)
}

// Logout and assert
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

// Exports

module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    viewRooms,
    viewClient,
}