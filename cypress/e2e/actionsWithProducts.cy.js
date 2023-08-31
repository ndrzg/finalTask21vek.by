const basePage = require('./pages/basePage')
const loginFlow = require('./pages/loginFlow');
const userAccount = require('./pages/userAccount');
const catalogPage = require('./pages/catalogPage');
const header = require('./components/header');

describe('Suite for catalog', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        basePage.closeCookieBanner()
    })

    it('Verify that user can add multiply products into chart', ()=>{
        loginFlow.successfulLogIn()
        catalogPage.addMultipyProductIntoChart()
    })
    it('Verifies that its possible to remove  good from chart', () => {
        catalogPage.addProductIntoChart('xiaomi')
        userAccount.removeFromChart()
    })
    it('Verify that products can be added to and removed from favorites', ()=>{
        loginFlow.successfulLogIn()
        header.searchForProductAndSelect('Тонометр Microlife A2 Standard с адаптером + манжета M-L')
        catalogPage.addToFavorites()
        userAccount.openAccountModal()
        userAccount.verfifyThatProductAddedToFavoritesAndRemove()
    })
    it('Verify that its possible to buy product', ()=>{
        loginFlow.successfulLogIn()
        catalogPage.addProductIntoChart('xiaomi')
        userAccount.checkChartAndConfirmPurchase()
        catalogPage.chooseCourierDelivery()
        catalogPage.fillPhoneNumber('257560221')
        catalogPage.selectOnlinePaymentByCC()

    })
    it('Verify that its possible to wipe enetered search request', ()=>{
        header.clearSearchField('xiaomi')
    })
    it('Verify sorting by discount size',() =>{
        header.opensDiscountProductsPage()
        catalogPage.sortProductByDiscountSize()
    })


})