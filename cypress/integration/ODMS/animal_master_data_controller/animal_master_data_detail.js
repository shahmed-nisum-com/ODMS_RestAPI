

var countryheadcredential = require('../../../fixtures/countryheadcredential.json');
var constant = require("../../../fixtures/constant.json");
var value;

class animal_master_data_detail{

    loginWithCountryHeadUser() {
        cy.request(
            constant.METHOD_POST, constant.LOGIN_END_POINT, countryheadcredential
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.body.userName).to.equal(countryheadcredential.userName);
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
            expect(response.body.roles.length).to.equal(constant.ARRAY_LENGTH);
            expect(response.body.roles[0].authority).to.equal(constant.USER_ROLE_HEAD);
        });
    }

    getRequestAnimalMasterData(){
        const options={
            method:constant.METHOD_GET,
            url:constant.ANIMAL_MASTER_DATA_END_POINT,
            auth: {
                'bearer': value
              }
            };

            cy.request(options).then((response)=>{
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);

            });
    }

}

export default animal_master_data_detail;