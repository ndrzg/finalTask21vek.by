class MainPage{
    constructor(){
        this.discountProductsButton = () => cy.get('[href="/special_offers/promo.html?discountTypes=sale"]');
        this.reviewCardsButton = () => cy.get('.ReviewsHome_play__2QEYU') 
        this.homePageBanner = () => cy.get('.Banners_mainBanner__1Bo_y')
        this.promoBanner = () =>  cy.get('.popmechanic-content')
        this.promoBannerTimer = () => cy.get('.popmechanic-timer')
    }

    
    openDiscountProductspage(){
        this.cookieBannerButton().click()
    }

    openReview(){
        this.reviewCardsButton().eq(1).click()
    }
    verifyMainBannerIsDisplayed(){
        this.homePageBanner().should('exist')
    }
    verifyPromoBannerIsDisplayed(){
        this.promoBanner().should('contain', 'До конца акции' )
    }




    
}

module.exports = new MainPage();