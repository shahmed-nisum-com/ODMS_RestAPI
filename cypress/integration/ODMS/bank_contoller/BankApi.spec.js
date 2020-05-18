///<reference cypress>
// cypress/integration/Login.spec.js
/// <reference types="@bahmutov/cy-api" />

import detail  from '../bank_contoller/detail';


const detailObj = new detail();

describe("POST,GET,PUT request through Country Head role", function () {

  it('Login with Country Head user', () => {
    detailObj.loginWithCountryHead();
      });

  it('Create a new bank through country head', () => {

    detailObj.postRequestToCreateBank();
  });

  it('Update Last bank data', function () {

    detailObj.updateRequestForBank();
  });

  it('Delete bank data', function () {

    detailObj.deleteRequestForBank();
  });

  it('GET All bank data', function () {

    detailObj.getRequestForBank();
  });

});