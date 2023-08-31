const basePage = require('./pages/basePage');
const loginFlow = require('./pages/loginFlow');
const userAccount = require('./pages/userAccount');

describe('Suite for login functionalities', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        basePage.closeCookieBanner()
    })
        
    it.only('Verifies that error message displayes when incorrect credentials are entered', ()=>{            
        loginFlow.unsuccessfulLogIn()
    })
    it('Verifies sucessful login with valid credentails', ()=>{
        loginFlow.successfulLogIn()
        userAccount.openAccountModal()
        userAccount.verifyUserAccountName()
    })
    it('Verifies that its possible to log out', () => {
        loginFlow.successfulLogIn()
        loginFlow.logOut()
    })
    it('Verfies that its possible to create new user', ()=>{
        loginFlow.newAccountCreation()
    })
    it('verifies that its possible to reset password', () => {
        loginFlow.resetPassword()
    })


    





})