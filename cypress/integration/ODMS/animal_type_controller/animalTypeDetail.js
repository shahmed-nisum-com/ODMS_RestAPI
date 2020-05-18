

var loginData = require('../../../fixtures/countryheadcredential.json');
var constant = require("../../../fixtures/constant.json");
var postRequestForAnimalType = require('../../../fixtures/postrequestforanimaltype.json');
var value;
var type=6;


class animalTypeDetail {

    postRequest() {
        cy.request(
            constant.METHOD_POST, constant.LOGIN_END_POINT, loginData
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }


    postRequestAnimalType() {
        const options = {
            method: constant.METHOD_POST,
            url: constant.ANIMALTYPE_END_POINT,
            body: postRequestForAnimalType,
            auth: {
                'bearer': value
            }

        };
        cy.request(options)
            .then((response) => {
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);
                
            });
    }

    
    deleteAnimalType() {
        const options = {
            method: constant.METHOD_DELETE,
            url: constant.ANIMALTYPE_END_POINT + '/' + type,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }

    getAnimalTypeData(){
        const options = {
            method: constant.METHOD_GET,
            url: constant.ANIMALTYPE_END_POINT,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }


}

export default animalTypeDetail;