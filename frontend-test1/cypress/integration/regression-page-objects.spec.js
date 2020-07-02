/// <reference types="cypress" />

import faker from 'faker'
import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as roomsPageFunctions from '../pages/roomsPage'
import * as createRoomFunction from '../pages/createRoomsPage'
import * as clientsPageFunctions from '../pages/clientsPage'
import * as createClientsPageFunctions from '../pages/createClientsPage'

describe('Test suite with page objects', function(){

    this.beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    // Test case. Test login and logout function
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
    })

    // Test. View rooms
    it('View rooms', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.viewRooms(cy, 'Rooms')
        roomsPageFunctions.performLogout(cy, 'Login')
    })

    // Test create room, using faker
    it('Create room', function(){
        let fakerRoomType = faker.random.arrayElement(["Single","Double","Twin"])
        let fakerRoomNumber = faker.random.number({min:200, max:500})
        let fakerFloorNumber = faker.random.number({min:2, max:5})
        let fakerPrice = faker.random.number({min:500, max:1499})
        let fakerFeature = faker.random.arrayElement(["Balcony", "Ensuite", "Sea View", "Penthouse"])
        
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.viewRooms(cy, 'Rooms')
        roomsPageFunctions.createRoom(cy)
        createRoomFunction.createRoom(cy, fakerRoomType, fakerRoomNumber, fakerFloorNumber, fakerPrice, fakerFeature)
        createRoomFunction.saveRoom(cy, fakerRoomNumber)
        roomsPageFunctions.performLogout(cy, 'Login')
    })

    // Test view clients
    it('View clients', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.viewClient(cy, 'Clients')
        clientsPageFunctions.performLogout(cy, 'Login')
    })

    // Test create client
    it('Create client', function(){
        let fakerClientName = faker.name.findName()
        let fakerEmail = faker.internet.email()
        let fakerTelephoneNumber = faker.phone.phoneNumber()

        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.viewClient(cy, 'Clients')
        clientsPageFunctions.checkTitleOfClientsPage(cy, 'Tester Hotel Overview')
        clientsPageFunctions.createClient(cy)
        createClientsPageFunctions.createClient(cy, fakerClientName, fakerEmail, fakerTelephoneNumber)
        createClientsPageFunctions.saveClient(cy, fakerClientName, fakerEmail, fakerTelephoneNumber)
        clientsPageFunctions.performLogout(cy, 'Login')
    })

})