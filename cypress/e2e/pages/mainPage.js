class MainPage{
    constructor(){
        this.discountProductsButton = () => cy.get('[href="/special_offers/promo.html?discountTypes=sale"]');
        this.reviewCardsButton = () => cy.get('.ReviewsHome_play__2QEYU') 
    }

    
    openDiscountProductspage(){
        this.cookieBannerButton().click()
    }

    openReviev(){
        this.reviewCardsButton().eq(1).click()
    }
}

module.exports = new MainPage();