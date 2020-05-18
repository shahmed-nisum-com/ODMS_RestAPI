

var loginData = require('../../../fixtures/countryheadcredential.json');
var constant = require("../../../fixtures/constant.json");
var postRequestForBookingOutlines = require('../../../fixtures/postrequestbookingoutlet.json');
var bookingOutline = require('../../../fixtures/updatebookingoutline.json');
var value;
var outline=1;


class booking_outlet_detail {

    postRequest() {
        cy.request(
            constant.METHOD_POST, constant.LOGIN_END_POINT, loginData
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }


    postRequestBookingOutlet() {
        const options = {
            method: constant.METHOD_POST,
            url: constant.BOOKING_OUTLET,
            body: postRequestForBookingOutlines,
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
            //outline = response.body.bookingOutletId;
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
            expect(response.body.bookingOutletId).to.equal(bookingOutline.bookingOutletId);
            expect(response.body.bookingOutletName).to.equal(bookingOutline.bookingOutletName);
            expect(response.body.description).to.equal(bookingOutline.description);
        });
    }

    deleteBookingOutlet() {
        const options = {
            method: constant.METHOD_DELETE,
            url: constant.BOOKING_OUTLET + '/' + outline,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }


}

export default booking_outlet_detail;