var countryHeadLoginCredential = require('../../../fixtures/countryheadcredential.json');
var constant = require("../../../fixtures/constant.json");
var createBank = require('../../../fixtures/createbank.json');
var updateBank = require('../../../fixtures/updatebank.json');

var value;
var bankId;


class Detail {

  loginWithCountryHead() {
    cy.request(
      constant.METHOD_POST, constant.LOGIN_END_POINT, countryHeadLoginCredential
    ).then(function (response) {
      value = response.body.accessToken;
      console.log("Value " + value);
      expect(response.body.userName).to.equal(countryHeadLoginCredential.userName);
      expect(response.status).to.equal(constant.API_SUCCESS_CODE);
      expect(response.body.roles.length).to.equal(constant.ARRAY_LENGTH);
      expect(response.body.roles[0].authority).to.equal(constant.USER_ROLE_HEAD);
    });
  }

  postRequestToCreateBank() {
    const options = {
      method: constant.METHOD_POST,
      url: constant.BANK_END_POINT,
      body: createBank,
      auth: {
        'bearer': value
      }
    };
    cy.request(options)
      .then((response) => {
        expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        expect(response.body.name).equal(createBank.name);
        expect(response.body.shortName).equal(createBank.shortName);
        expect(response.body.description).equal(createBank.description);
        bankId = response.body.id;
      });

  }

  updateRequestForBank() {
    const options = {
      method: constant.METHOD_PUT,
      url: constant.BANK_END_POINT,
      body: updateBank,
      auth: {
        'bearer': value
      }
    };
    cy.request(options)
      .then((response) => {
        expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        expect(response.body.name).equal(updateBank.name);
        expect(response.body.shortName).equal(updateBank.shortName);
        expect(response.body.description).equal(updateBank.description);
      });

  }


  deleteRequestForBank() {
    console.log('Bank ID' + bankId);
    const options = {
      method: constant.METHOD_DELETE,
      url: constant.BANK_END_POINT + '/' + bankId,
      auth: {
        'bearer': value
      }
    };
    cy.request(options)
      .then((response) => {
        expect(response.status).to.equal(constant.API_SUCCESS_CODE);
      });

  }

  getRequestForBank() {
    const options = {
      method: constant.METHOD_GET,
      url: constant.BANK_END_POINT,
      auth: {
        'bearer': value
      }
    };
    cy.request(options)
      .then((response) => {
        expect(response.status).to.equal(constant.API_SUCCESS_CODE);
      });

  }





}

export default Detail;