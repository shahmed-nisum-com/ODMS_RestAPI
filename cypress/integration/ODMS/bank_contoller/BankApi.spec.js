///<reference cypress>
// cypress/integration/Login.spec.js
/// <reference types="@bahmutov/cy-api" />

import QurbaniApiDetail from '../QurbaniApiDetail';

import Detail from './Detail.js';
const detailObj = new Detail();

describe("POST,GET,PUT request through Country Head role", function () {

  it.only('Login with Country Head user', () => {
    detailObj.loginWithCountryHead();
      });

  it('Create a new bank through country head', () => {

    detailObj.postRequestToCreateBank();
  });

  it('Update Last bank data', function () {

    detailObj.updateRequestForBank();
  });

  it('Delete Last bank data', function () {

    detailObj.deleteRequestForBank();
  });

  it('GET All bank data', function () {

    detailObj.getRequestForBank();
  });

});