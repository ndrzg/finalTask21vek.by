// describe('API Tests', () => {
//     it('should validate JSON schema and status code', () => {
//       cy.request('GET', 'https://www.21vek.by/notebooks/')  // Замените URL на ваш API-эндпоинт
//         .its('status')
//         .should('equal', 200);  // Проверяем статус-код
//       })
    
//         it.only('should make a POST request', () => {
//           cy.request({
//             method: 'POST',
//             url: 'https://www.21vek.by/users/action/login/', // Замените на ваш URL
//             headers: {
//               'Content-Type': 'application/json; charset=UTF-8',
//               'Accept': 'application/json;version=1.1'
//               // Другие необходимые заголовки
//             },
//             body: {
//               email: "dushesio@gmail.com",
//               password: "21vekpassword"
//             },
//           }).then((response) => {
//             // Проверки на статус код и тело ответа
//             expect(response.status).to.equal(200); // Пример для статус кода 201 Created
//             //expect(response.body.title).to.equal('New Post');
//           });
//         })



//         //https://www.21vek.by/users/action/login/
//     //   cy.request('GET', 'https://api.example.com/data')
//     //     .its('body')
//     //     .should('have.property', 'key')  // Проверяем наличие свойства в JSON
//     //     .and('have.property', 'value');  // Проверяем наличие другого свойства в JSON
  
//     //   cy.request('GET', 'https://api.example.com/data')
//     //     .its('body')
//     //     .should('deep.equal', {
//     //       key: 'value',
//     //       // другие ожидаемые свойства и значения
//     //     });  // Проверяем точное соответствие JSON
  
//     //   // Подключите библиотеку "chai-json-schema-ajv" для проверки JSON-схемы
//     //   cy.request('GET', 'https://api.example.com/data')
//     //     .then((response) => {
//     //       cy.log(JSON.stringify(response.body));  // Выводим тело ответа для создания JSON-схемы
//     //       expect(response.body).to.be.validJsonSchema(yourJsonSchema);  // Проверяем JSON-схему
//     //     });
//     });
//   });
  

  describe('API Tests', () => {
    it('should make a GET 404 request', () => {
      cy.request({
        method: 'GET',
        url: 'www.21vek.by/js/deliveryIntervals.js', 
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.equal(404); // Пример для статус кода 201 Created
        expect(response.body).to.contain('404 Not Found');
      });
    })
    it.only('should make a POST request', () => {
      const requestBody = {"data":{"city_id":17030,"products":[{"id":6241841,"count":1},{"id":7345083,"count":1},{"id":343550,"count":1},{"id":7540305,"count":1},{"id":359536,"count":1},{"id":611512,"count":1},{"id":6067372,"count":1},{"id":354413,"count":1},{"id":6272377,"count":1},{"id":463166,"count":1,"sales_code":"5788316"},{"id":463166,"count":1},{"id":5831328,"count":1},{"id":7253126,"count":1},{"id":343568,"count":1},{"id":607666,"count":1},{"id":6254278,"count":1},{"id":5926734,"count":1},{"id":5682444,"count":1},{"id":38001,"count":1},{"id":6151208,"count":1}],"check_count":true}}
      cy.request({
        method: 'POST',
        url: 'https://gate.21vek.by/delivery-composer/delivery-availability-details', 
        headers: {'Accept': 'application/json',},
        failOnStatusCode: false,
        body:requestBody ,
      }).then((response) => {

        expect(response.status).to.equal(200);
        expect(response).to.contain('available_from');
      });
    })

  })