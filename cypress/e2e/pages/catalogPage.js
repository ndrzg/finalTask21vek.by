const header = require("../components/header");

class CatalogPage {
    constructor(){
        this.privacyPopUpCloseButon = () => cy.get('.osano-cm-dialog__close.osano-cm-close');
        
        this.addressField = () => cy.get('[data-testid="address"]');
        this.deliveryDateSelector = () => cy.get('[data-testid="delivery-date-select"] > .styles_selectValue__2wP2f');
        this.suggestedDeliveryDateSelector = () => cy.get('.styles_selectList__Aqpxi > :nth-child(1)');
        this.addressField = () => cy.get('[data-testid="address"]');
        this.suggestedAddresSelector = () => cy.get('.styles_selectList__Aqpxi > :nth-child(2)');
        this.suggestedTimeSelector = () => cy.get('.DeliveryIntervals_selectList__1YUkV')
        this.saveButton = () => cy.get('.CourierForm_submit__2wZLT > .Button-module__button');
        this.timeSelector = () => cy.get('[data-testid="delivery-time-select"]')
        this.searchField = () => cy.get('#catalogSearch')
        this.firstItemFromSearch  = () => cy.get(':nth-child(10) > .SearchSuggestList_link__3H2j0 > :nth-child(1) > .ProductItem_productItem__3reep')
        this.addToChartButton = () => cy.get('.j-to_basket > .g-button')
        this.emptyBasketTitle = () => cy.get('.EmptyBasket_text__2iKar')
        this.addFavoritesButton= () => cy.get('#favoriteOldProductCard > .g-pseudo_href')
        this.selectCourierDelivery = () => cy.get('[data-testid="deliveryItem-courier"] > .DeliveryField_item__3Iwc1 > label > .Radio_label__1Fl2c')
        this.phoneForDeliveryField = () => cy.get('.style_phoneInput__McmXH > input')
        this.multipyProductInChart = () => cy.get('[aria-label="Увеличение количества"]')
        this.productCounter = () => cy.get('.Counter_counterInput__b-ehV')
    }   

    addToFavorites(){
        this.addFavoritesButton().click()
    }
    clickprivacyPopUpCloseButon(){
        
    }
    enterSearchRequest(searchReqeust){
        this.searchButton().click()
        this.searchInputField().type(searchReqeust)
    }
    selectSearchingResult(searchingItem){
        this.searchingResults().contains(searchingItem).click()
    }
    verifyUrlAndResult(searchingItem){
        this.searchingResultsUrl().should('eq', Cypress.env('searchingResultUrl'))
        this.docsPageBody().should("contain",searchingItem)
    }
    verifyMessageForNonExistingSearchingResult(){
        this.searchingResults().contains('No results for')
    }
    verifyThatThemeSwitched(){
        this.darkTheme().should('exist');
    }


    chooseCourierDelivery(){
        this.selectCourierDelivery().click()
        this.addressField().type('казинца')
        this.suggestedAddresSelector().click()
        this.deliveryDateSelector().click()
        this.suggestedDeliveryDateSelector().click()
        this.timeSelector().click()
        this.suggestedTimeSelector().first().click()
        this.saveButton().click()
    }

    addProductIntoChart(product){
        this.searchField().click().type(product)
        this.firstItemFromSearch().click()
        this.addToChartButton().click()
        cy.get('[data-testid="header-count"]').should('exist')
    }

    fillPhoneNumber(number){
        this.phoneForDeliveryField().type(number)
        cy.contains('Продолжить').click()
    }

    sortProductByDiscountSize(){
        //cy.get('.DiscountRange_discountRangeContainer__23LHb').should('have.attr', 'value', 'от 50%').click()
        cy.get(':nth-child(2) > label > .Radio_label__1Fl2c').click()
        cy.get('.style_promoDiscount__2Z5dm')  
            .each(($element) => {
        const discountText = $element.text();  
        const discountValue = Math.abs(parseInt(discountText));  
        expect(discountValue).to.be.greaterThan(49.9);
        });
    }

    selectOnlinePaymentByCC(){
        cy.get('.styles_selectValue__2wP2f').click()
        cy.get('[data-testid="online-pay-method"]').click()
    }

    addMultipyProductIntoChart(){
        this.addProductIntoChart('xiaomi')
        header.openChart()
        this.multipyProductInChart().click()
        this.productCounter().should('exist').click()   
        header.headerCounter()
        .invoke('text')
        .then((text) => {

          const count = parseInt(text);
          expect(count).to.equal(2);
        });
    }

}

module.exports = new CatalogPage();
  