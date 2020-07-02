/// <reference types="cypress" />

// Elements

const titleOfCreateClientsPage = 'Testers Hotel'
const logoutButton = 'button.btn'
const saveClientButton = 'a.btn:nth-child(2)'
const goBackButton = 'a.btn:nth-child(1)'

const nameTextfield = 'div.field:nth-child(1) > input:nth-child(2)'
const emailTextfield = 'div.field:nth-child(2) > input:nth-child(2)'
const telephoneTextfield = 'div.field:nth-child(3) > input:nth-child(2)'


// Actions/Functions

// Assert right page
function checkTitleOfCreateClientsPage(cy){
    cy.title().should('eq', titleOfCreateClientsPage)
}

// Logout and assert
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

// Go back and assert
function performGoBack(cy){
    cy.get(goBackButton).click()
    cy.contains('Clients')
}

// Create client
function createClient(cy, clientName, clientEmail, clientTelephone){
    cy.get(nameTextfield).type(clientName)
    cy.get(emailTextfield).type(clientEmail)
    cy.get(telephoneTextfield).type(clientTelephone)
}

// Save client and assert Name, Email and phone
function saveClient(cy, clientName, clientEmail, clientTelephone){
    cy.get(saveClientButton).click()
    cy.contains(clientName)
    cy.contains(clientEmail)
    cy.contains(clientTelephone)
}

// Exports

module.exports = {
    checkTitleOfCreateClientsPage,
    performLogout,
    performGoBack,
    createClient,
    saveClient,
}