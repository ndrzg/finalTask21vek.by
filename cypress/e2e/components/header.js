class Header {
    constructor(){

        this.searchInputField = () => cy.get('#catalogSearch');
        this.searchingResults = () => cy.get('.SearchSuggestList_title__1KIok + a .ProductItem_productItem__3reep');
        this.clearSearchFieldButton = () => cy.get('.Search_clearBtn__3iMtB');
        this.shoppingСartButton = () => cy.get('.headerCartBox');
        this.discountProductsButton = () => cy.get('[href="/special_offers/promo.html?discountTypes=sale"]');
    }

    
    opensDiscountProductsPage(){
        this.discountProductsButton().eq(1).click()
    }
    enterSearchRequest(searchRequest){
        this.searchInputField().click().type(searchRequest)
        
    }
    selectSearchingResult(searchingItem){
        this.searchingResults().contains(searchingItem).click()
    }

    searchForProductAndSelect(searchRequest, searchingItem){
        this.enterSearchRequest(searchRequest)
        this.searchingResults().click()
    }

    clearSearchField(searchRequest){
        this.enterSearchRequest(searchRequest)
        this.clearSearchFieldButton().click()
        this.searchInputField().should('have.attr', 'placeholder', 'Поиск товаров');

    }
    
}

module.exports = new Header();