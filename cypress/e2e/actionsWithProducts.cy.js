//const { enterEmail } = require('../e2e/pages/loginPage');
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
            // userAccount.openAccountModal()
            // userAccount.openLogInModal()
            // userAccount.loginFromModal(Cypress.env('emailSuccessLogin'), Cypress.env('passwordSuccessLogin'))
        loginFlow.successfulLogIn()
        catalogPage.addProductIntoChart('xiaomi')
        //cy.get('#catalogSearch').type('xiaomi')
        cy.get('.SearchResults_content__3F9-E > ul > :nth-child(10)').click()
        cy.get('.j-to_basket > .g-button').click()
        //cy.get('title of good')
        cy.get('[data-testid="header-count"]').should('exist')
        cy.get('.headerCartBox').click()
        cy.get('.BasketItem_title__m55zb').contains('Xiaomi')

    })
    it('Verifies that its possible to remove  good from chart', () => {
        catalogPage.addProductIntoChart('xiaomi')
        cy.get('#catalogSearch').type('xiaomi')
        cy.get('.SearchResults_content__3F9-E > ul > :nth-child(10)').click()
        cy.get('.j-to_basket > .g-button').click()
        //cy.get('title of good')
        cy.get('[data-testid="header-count"]').should('exist')
        cy.get('.headerCartBox').click()
        cy.get('.BasketItem_title__m55zb').contains('Xiaomi')
        cy.get('[aria-label="Удалить товар"]').click()
        cy.get('[data-testid="modal-confirmation-button"]').click()
        cy.get('.EmptyBasket_text__2iKar').contains("У вас пока нет ни одного товара в корзине")
    })

    it('verifies sort', () => {
        // cy.get('#catalogSearch').type('xiaomi')
        // cy.get('.SearchResults_content__3F9-E > ul > :nth-child(10)').click()
        // cy.get('.j-to_basket > .g-button').click()
        // //cy.get('title of good')
        // cy.get('[data-testid="header-count"]').should('exist')
        // cy.get('.headerCartBox').click()
        // cy.get('.BasketItem_title__m55zb').contains('Xiaomi')
        cy.get('.styles_catalogButton__1K6kI').click()
        cy.get('[href="/refrigerators/"] > .styles_categoryName__28yR1').click()
        // cy.get(':nth-child(2) > dl > .catalog-result__item_tools > .g-price > .g-item-data').invoke('attr', 'data-price').then(initialPrice => {
        //     const initialPriceValue = parseFloat(initialPrice);
            
        //     // Здесь выполните какое-то действие на странице
        //     cy.get('.cr-tools-sort__bi > .tools-sort__link > .g-pseudo_href').click()
        //     // Получение нового значения атрибута data-price
        //     cy.get(':nth-child(2) > dl > .catalog-result__item_tools > .g-price > .g-item-data').invoke('attr', 'data-price').then(newPrice => {
        //       const newPriceValue = parseFloat(newPrice);
              
        //       // Сравнение значений
        //       expect(newPriceValue).to.be.greaterThan(initialPriceValue);
        //     });
        //   });

//           cy.get('#j-result-page-1 .catalog-result__item_tools [data-price]').eq(1)
//             .first()
//             .invoke('attr', 'data-price')
//             .then(initialPrice => {
//                 const initialPriceValue = parseFloat(initialPrice);

//                 // Здесь выполните какое-то действие на странице
//                 // ...
//                 cy.get('.cr-tools-sort__bi > .tools-sort__link > .g-pseudo_href').click()

//                 // Получение нового значения атрибута data-price для первого элемента ul
//                 cy.get('#j-result-page-1 .catalog-result__item_tools [data-price]').eq(2)
//                 .first()
//                 .invoke('attr', 'data-price')
//                 .then(newPrice => {
//                     const newPriceValue = parseFloat(newPrice);

//                     // Сравнение значений
//                     expect(newPriceValue).to.be.lessThan(initialPriceValue);
//       });
//   });


//   cy.get('.result__item:first-child .catalog-result__item_tools [data-price]')
//   .invoke('attr', 'data-price')
//   .then(initialPrice => {
//     const initialPriceValue = parseFloat(initialPrice);

//     // Здесь выполните какое-то действие на странице
//     cy.get('.cr-tools-sort__bi > .tools-sort__link > .g-pseudo_href').click()


//     // Получение нового значения атрибута data-price для первого элемента списка
//     cy.get('.result__item:first-child .catalog-result__item_tools [data-price]')
//       .invoke('attr', 'data-price')
//       .then(newPrice => {
//         const newPriceValue = parseFloat(newPrice);

//         // Сравнение значений
//         expect(newPriceValue).to.be.greaterThan(initialPriceValue);
//       });
//   });
//})
//     
})
it('Verify that products can be added to and removed from favorites', ()=>{
            loginFlow.successfulLogIn()
            header.searchForProductAndSelect('Тонометр Microlife A2 Standard с адаптером + манжета M-L')
            catalogPage.addToFavorites()
            userAccount.openAccountModal()
            userAccount.verfifyThatProductAddedToFavoritesAndRemove()
})
it.only('Verify that its possible to buy product', ()=>{
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