

var loginData = require('../../fixtures/loginCredential.json');
var constant = require("../../fixtures/constant.json");
var bookingOutline = require('../../fixtures/bookingoutline.json');
var value;


class QurbaniApiDetail {

    postRequest() {
        cy.request(
            constant.METHOD_POST, constant.LOGIN_END_POINT, loginData
        ).then(function (response) {
            value = response.body.accessToken;
            console.log("Value " + value);
            expect(response.body.name).to.equal(constant.USER_NAME);
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }

    getQuarbaiResource() {
        const options = {
            method: constant.METHOD_GET,
            url: constant.QUARBANI_REPRESENTATIVE,
            auth: {
                'bearer': value
            }
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);
            });
    }


    updateBookingOutlet() {
        const options = {
            method: constant.METHOD_PUT,
            url: constant.BOOKING_OUTLET,
            body: bookingOutline,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
            expect(response.body.bookingOutletId).to.equal(bookingOutline.bookingOutletId);
            expect(response.body.bookingOutletName).to.equal(bookingOutline.bookingOutletName);
            expect(response.body.description).to.equal(bookingOutline.description
            );
        });
    }


}

export default QurbaniApiDetail;