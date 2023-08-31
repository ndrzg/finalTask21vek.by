const basePage = require('./pages/basePage');
const mainPage = require('./pages/mainPage');

describe('Suite for login functionalities', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        basePage.closeCookieBanner()
    })
        
    it('Verifies that main banner is displayed', ()=>{            
        mainPage.verifyMainBannerIsDisplayed()
    })
    it('Verifies that video reviews can be opened', () => {
        mainPage.openReview()
    })
    it('Verifies that Promo Banner Is Displayed and contains timer', () => {
        mainPage.verifyPromoBannerIsDisplayed()
    })

    




    





})