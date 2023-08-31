const header = require("../components/header");

class UserAccount {
    constructor(){
        this.favoriteProductsButton = () => cy.get('[href="/aside/"]');
        this.viewedItemsButton = () => cy.get('[href="/viewed/"]');
        this.accountName = ()=> cy.get('.userToolsSubtitle');
        this.logInButton = () => cy.get('[data-testid="loginButton"]');
        this.loginSubmitButton = () => cy.get('[data-testid="loginSubmit"]');
        this.removeButton = () => cy.get('[aria-label="Удалить товар"]')
        this.emailField = () => cy.get('[data-testid="login-form-email"]');
        this.passwordField = () => cy.get('[data-testid="login-form-password"]');
        this.emptyChartText = () =>  cy.get('.EmptyBasket_text__2iKar')
        this.accountModalButton = () => cy.get('.userToolsText');
        this.purchaseHistoryButton  = () => cy.get('[href="/profile/bought/"]');
        this.purchaseInHistory = () =>cy.get(".OrdersHistoryItems_grid__18fFU >:nth-child(2)")
        this.purchaseTitleInHistory = () =>cy.get('.OrdersHistoryOrderScreen_animate__29-kR')
        this.viewedProductCards  = () =>cy.get('.b-columns__center')
        this.shoppingСartButton = () => cy.get('.headerCartBox');
        this.chartItemTitle = () =>cy.get('.BasketItem_title__m55zb')
        this.confirmPurchase = () => cy.get('[data-testid="basketConfirmation"]')
        this.modalConfirmationButton  = () =>  cy.get('[data-testid="modal-confirmation-button"]')
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

    checkViewedItems(productName){
        this.openAccountModal()
        this.viewedItemsButton().click() 
        this.viewedProductCards().contains(productName)
    }
    
    verfifyThatProductAddedToFavoritesAndRemove(){
        let pageTitle;
        cy.get('h1').invoke('text').then((text) => {
                pageTitle = text;
            });

        this.checkFavorites()

        cy.get('.OldProductCard_name__180Yx').invoke('text').then((text) => {
                expect(text).to.equal(pageTitle);
            });
        cy.contains('Удалить из списка').click()
    }
    
    removeFromChart(){
        header.openChart()
        this.chartItemTitle().contains('Xiaomi')
        this.removeButton().click()
        this.modalConfirmationButton().click()
        this.emptyChartText().contains("У вас пока нет ни одного товара в корзине")
    }



}

module.exports = new UserAccount();