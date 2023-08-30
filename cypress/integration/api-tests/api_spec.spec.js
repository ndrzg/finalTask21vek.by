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
    it.only('should make a POST request', () => {
      cy.request({
        method: 'POST',
        url: 'https://www.21vek.by/users/action/login/', // Замените на ваш URL
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          //'Accept': 'application/json;version=1.1'
          // Другие необходимые заголовки
        },
        body: {
          email: "dushesio@gmail.com",
          password: "21vekpassword"
        },
      }).then((response) => {
        // Проверки на статус код и тело ответа
        expect(response.status).to.equal(200); // Пример для статус кода 201 Created
        //expect(response.body.title).to.equal('New Post');
      });
    })

  })