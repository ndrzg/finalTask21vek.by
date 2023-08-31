const userAccount = require("./userAccount")
const randEmailGenerator = require('./helpers/randEmailFunc');



class LoginFlow  {
    constructor(){
        this.wrongPasswordMessage = () => cy.get('.styles_errorText__3XlSD')
        this.registartionButton  = () => cy.contains('Регистрация')
        this.registerEmail = () => cy.get('[id="register-email"]')
        this.submitAccountCreationButton = () => cy.contains('Продолжить')
        this.agreeButton =() => cy.get('[data-testid="agreeButton"]')
        this.accontCreatedTitle =() => cy.get('.styles_successTitle__1IDi2')
        this.forgotPasswordButton = () => cy.get('.Button-module__button.styles_resetPasswordLink__QkkpS.Button-module__blue-inline');
        this.resetPasswordEmailField = () => cy.get('[id="reset-password-email"]'); 
        this.resetPasswordModalSendButton = () => cy.get('.Form-module__submitContainer > .Button-module__button')
        this.resetPasswordSucessModal = () => cy.get('[data-testid="success-message-wrapper"]')
        this.accountModalButton = () => cy.get('.userToolsText');
        this.logOutButton = ()=> cy.get(':nth-child(6) > .ProfileItem_itemCommon__1pPYj');
        this.logInButton = () => cy.get('[data-testid="loginButton"]');

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
    newAccountCreation(){
        userAccount.openAccountModal()
        userAccount.openLogInModal()
        this.registartionButton().click()
        this.registerEmail().type(randEmailGenerator() + '@'+  randEmailGenerator() + '.com')
        this.submitAccountCreationButton().click()
        this.agreeButton().click()
        this.accontCreatedTitle().contains('Вы зарегистрированы')

    }

    resetPassword(){
        userAccount.openAccountModal()
        userAccount.openLogInModal()
        this.forgotPasswordButton().click()
        this.resetPasswordEmailField().click().type(Cypress.env('emailSuccessLogin'))
        this.resetPasswordModalSendButton().click()
        this.resetPasswordSucessModal().contains('Письмо отправлено')

    }

    logOut(){
        userAccount.verifyUserAccountName()
        this.accountModalButton().click()
        this.logOutButton().click()
        this.accountModalButton().click()
        this.logInButton().contains('Войти')
    }

    
}

module.exports = new LoginFlow();
  