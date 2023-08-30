const userAccount = require("./userAccount")

class LoginFlow  {
    constructor(){
        this.wrongPasswordMessage = () => cy.get('.styles_errorText__3XlSD')
        
    }


    successfulLogIn(){
        userAccount.openAccountModal()
        userAccount.openLogInModal()
        userAccount.loginFromModal(Cypress.env('emailSuccessLogin'), Cypress.env('passwordSuccessLogin'))
    }

    unsuccessfulLogIn(){
        userAccount.openAccountModal()
        userAccount.openLogInModal()
        userAccount.loginFromModal(Cypress.env('emailFailedLogin'), Cypress.env('passwordFailedLogin'))
    }


    
}

module.exports = new LoginFlow();
  