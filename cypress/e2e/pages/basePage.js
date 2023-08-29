class BasePage{
    constructor(){
        this.cookieBannerButton = () => cy.get('.AgreementCookie_buttons__F4XNa > .Button-module__blue-primary');
    }

    closeCookieBanner(){
        this.cookieBannerButton().click()
    }
}

module.exports = new BasePage();