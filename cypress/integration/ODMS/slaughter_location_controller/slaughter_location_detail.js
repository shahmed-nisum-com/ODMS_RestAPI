
var loginData = require('../../../fixtures/loginCredential.json');
var constant = require('../../../fixtures/constant.json');
var postRequestToSlaughterLocation=require('../../../fixtures/postrequestforslaughterlocation.json')
var value;


class slaughter_location_detail {

    postRequest() {
        cy.request(
            constant.METHOD_POST, constant.LOGIN_END_POINT, loginData
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }

    getRequestToAllSlaughterLocation() {
        var options = {

            Method: constant.METHOD_GET,
            url: constant.SLAUGHTERING_LOCATION_END_POINT,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then(function (response) {

            expect(response.status).equal(constant.API_SUCCESS_CODE);
        });
    }

    postRequestToSlaughterLocation() {
        var options = {

            Method: constant.METHOD_POST,
            url: constant.SLAUGHTERING_LOCATION_END_POINT,
            body:postRequestToSlaughterLocation,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then(function (response) {

            expect(response.status).equal(constant.API_SUCCESS_CODE);
        });
    }

}

export default slaughter_location_detail;