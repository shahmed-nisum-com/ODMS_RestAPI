
var loginData =require('../../../fixtures/loginCredential.json');
var constant = require('../../../fixtures/constant.json');
var postQuarbaniLocation=require('../../../fixtures/postquarbanilocation.json');
var value;


class qurbani_location_detail{

    postRequest() {
        cy.request(
            constant.METHOD_POST, constant.LOGIN_END_POINT, loginData
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }

    getRequestToAllCountries(){
        var options = {

            Method:constant.METHOD_GET,
            url:constant.QUARBANI_LOCATION,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then(function(response){

            expect(response.status).equal(constant.API_SUCCESS_CODE);
        });
    }

    postRequestToAddCountry(){
        var options = {

            Method:constant.METHOD_POST,
            url:constant.QUARBANI_LOCATION,
            body:postQuarbaniLocation,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then(function(response){

            expect(response.status).equal(constant.API_SUCCESS_CODE);
        });
    }



}

export default qurbani_location_detail;