class UserAccount {
    constructor(){
        this.favoriteProductsButton = () => cy.get('[href="/aside/"]');
        this.viewedItemsButton = () => cy.get('[href="/viewed/"]');
        this.purchaseHistoryButton = () => cy.get('');
        this.accountName = ()=> cy.get('.userToolsSubtitle');
        this.logOutButton = ()=> cy.get(':nth-child(6) > .ProfileItem_itemCommon__1pPYj');
        this.logInButton = () => cy.get('[data-testid="loginButton"]');
        this.loginSubmitButton = () => cy.get('[data-testid="loginSubmit"]');
        this.forgotPasswordButton = () => cy.get('.Button-module__button.styles_resetPasswordLink__QkkpS.Button-module__blue-inline');
        this.emailField = () => cy.get('[data-testid="login-form-email"]');
        this.passwordField = () => cy.get('[data-testid="login-form-password"]');
        this.resetPasswordEmailField = () => cy.get('[id="reset-password-email"]'); 
        this.resetPasswordModalSendButton = () => cy.get('.Form-module__submitContainer > .Button-module__button')
        this.accountModalButton = () => cy.get('.userToolsText');
        this.purchaseHistoryButton  = () => cy.get('[href="/profile/bought/"]');
        this.purchaseInHistory = () =>cy.get(".OrdersHistoryItems_grid__18fFU >:nth-child(2)")
        this.purchaseTitleInHistory = () =>cy.get('.OrdersHistoryOrderScreen_animate__29-kR')
        this.viewedProductCards  = () =>cy.get('.b-columns__center')
        this.resetPasswordSucessModal = () => cy.get('[data-testid="success-message-wrapper"]')
        this.shoppingСartButton = () => cy.get('.headerCartBox');
        this.chartItemTitle = () =>cy.get('.BasketItem_title__m55zb')
        this.confirmPurchase = () => cy.get('[data-testid="basketConfirmation"]')
    }

    openAccountModal(){
        this.accountModalButton().click()
    }
    openLogInModal(){
        this.logInButton().click()
    }
    loginFromModal(login,password){
        this.emailField().type(login)
        this.passwordField().type(password)
        this.loginSubmitButton().click()
    }
    verifyUserAccountName(){
        this.accountName().should('contain', Cypress.env('emailSuccessLogin') )
    }
    logOut(){
        this.verifyUserAccountName()
        this.accountModalButton().click()
        this.logOutButton().click()
        this.accountModalButton().click()
        this.logInButton().contains('Войти')
    }
    checkFavorites(){
        this.favoriteProductsButton().click()

    }
    checkChartAndConfirmPurchase(){
       this.shoppingСartButton().click()
       this.chartItemTitle().contains('Xiaomi')
       this.confirmPurchase().click()
    }

    checkPurchaseHistory(){
        this.openAccountModal()
        this.purchaseHistoryButton().click()
        this.purchaseInHistory().contains('Заказ 259.684.237').click()
        this.purchaseTitleInHistory().contains('Тонометр Microlife A2 Standard с адаптером + манжета M-L')

    }

    verifylogInProcess(){
        this.openAccountModal()
        this.openLogInModal()
        this.loginFromModal(Cypress.env('emailSuccessLogin'), Cypress.env('passwordSuccessLogin'))
    }

    checkViewedItems(productName){
        this.openAccountModal()
        this.viewedItemsButton().click() 
        this.viewedProductCards().contains(productName)
    }

    resetPassword(){
        this.openAccountModal()
        this.openLogInModal()
        this.forgotPasswordButton().click()
        this.resetPasswordEmailField().click().type(Cypress.env('emailSuccessLogin'))
        this.resetPasswordModalSendButton().click()
        this.resetPasswordSucessModal().contains('Письмо отправлено')

    }
    
    verfifyThatProductAddedToFavoritesAndRemove(){
        let pageTitle;
            cy.get('h1').invoke('text').then((text) => {
                pageTitle = text;
              });

        this.checkFavorites()
            //cy.get('.OldProductCard_name__180Yx').should('contain', pageTitle)
            cy.get('.OldProductCard_name__180Yx').invoke('text').then((text) => {
                expect(text).to.equal(pageTitle);
              });
        cy.contains('Удалить из списка').click()
    }



}

module.exports = new UserAccount();