


  var updateAccount = require('../../../fixtures/updateaccount.json');
  var createAnAccount = require('../../../fixtures/createAccount.json');
  var countryHeadLoginCredential = require('../../../fixtures/countryheadcredential.json');
  var constant = require('../../../fixtures/constant.json');
  var accountId;
  var value;


class accountDetail{

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
  getRequestForAllBankAccount() {
    const options = {
      method: constant.METHOD_GET,
      url: constant.ACCOUNT_END_POINT,
      auth: {
        'bearer': value
      }
    };
    cy.request(options)
      .then((response) => {
        expect(response.status).to.equal(constant.API_SUCCESS_CODE);
      });

  }


  postRequestForAddAnAccount() {
    const options = {
      method: constant.METHOD_POST,
      url: constant.ACCOUNT_END_POINT,
      body: createAnAccount,
      auth: {
        'bearer': value
      }
    };
    cy.request(options)
      .then((response) => {
        accountId=response.body.bankId;
        expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        expect(response.body.id).equal(createAnAccount.id);
        expect(response.body.accountName).equal(createAnAccount.accountName);
        expect(response.body.accountNumber).equal(createAnAccount.accountNumber);
        expect(response.body.bankId).equal(createAnAccount.bankId);

      });

  }

  updateRequestForAccount() {
    const options = {
      method: constant.METHOD_PUT,
      url: constant.ACCOUNT_END_POINT,
      body: updateAccount,
      auth: {
        'bearer': value
      }
    };
    cy.request(options)
      .then((response) => {
        
        expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        expect(response.body.id).equal(updateAccount.id);
        expect(response.body.accountName).equal(updateAccount.accountName);
        expect(response.body.accountNumber).equal(updateAccount.accountNumber);
      });
  }


  getRequestForAccount() {
    console.log('Bank ID' + accountId);
    const options = {
      method: constant.METHOD_GET,
      url: constant.ACCOUNT_END_POINT + '/' + accountId,
      auth: {
        'bearer': value
      }
    };
    cy.request(options)
      .then((response) => {
        expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        expect(response.body[3].id).equal(updateAccount.id);
        expect(response.body[3].accountName).equal(updateAccount.accountName);
        expect(response.body[3].accountNumber).equal(updateAccount.accountNumber);


      });

  }
}

export default accountDetail;
