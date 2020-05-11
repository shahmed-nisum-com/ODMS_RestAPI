// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



// import "cypress-localstorage-commands";
// Cypress.Commands.add('postToken', () => {
//   cy.request({
//     method: 'POST',
//     url: 'https://odms.baitussalam.org:8445/api/v1/auth/login', //get from cypress.env.json
//     // form: true, //sets to application/x-www-form-urlencoded
//     body: {
//         "userName": "faizanj",
//         "password": "abc"
//     }
//   })
//   // .its('body')
//   .then(response => {
//     console.log(response.body);
//     let identity=response.body;
//     cy.setLocalStorage("identity_accessToken", JSON.stringify(identity.accessToken));
//     cy.getLocalStorage(identity_accessToken);
//     cy.log(identity_accessToken);
//     return identity_accessToken;
//   });
// });


// Cypress.Commands.add('login', () => {
//   return 
//   cy.request({
//     url: `https://odms.baitussalam.org:8445/api/v1/auth/login`,
//     method: 'POST',
//     body: {
//               "userName": "faizanj",
//               "password": "abc"
//           },
//    })
//    .then(response => {
//     window.localStorage.setItem('jwtToken', stringify(response.body.accessToken));
//     return response.body;
//    });
//  });