
var value;
var loginData= require('../../../fixtures/loginCredential.json');
var constant=require('../../../fixtures/constant.json');


class authenticationDetail{

    loginTest(){
            cy.request(
                constant.METHOD_POST, constant.LOGIN_END_POINT, loginData
            ).then(function (response) {
                value = response.body.accessToken;
                console.log("Value " + value);
                expect(response.body.name).to.equal(constant.USER_NAME);
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);
            });
        
    }

    logOutTest(){
        const options = {
            method: constant.METHOD_GET,
            url:constant.LOGOUT_END_POINT,
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

export default  authenticationDetail;