var loginData = require('../../../fixtures/loginCredential.json');
var constant = require("../../../fixtures/constant.json");
var value;


class send_notification_detail {

    postRequest() {
        cy.request(
            constant.METHOD_POST, constant.LOGIN_END_POINT, loginData
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.body.name).to.equal(constant.USER_NAME);
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }
    getSmsNotification() {
        const options = {
            method: constant.METHOD_GET,
            url: constant.SMS_NOTIFICATION_END_POINT,
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

export default send_notification_detail;