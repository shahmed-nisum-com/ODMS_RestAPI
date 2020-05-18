
var branchLeadCredential = require('../../../fixtures/branchleadercredential.json');
var constant = require("../../../fixtures/constant.json");
var createBooking = require('../../../fixtures/createBooking.json');
var updateBank = require('../../../fixtures/updatebank.json');

var value;
var bankId;


class BookingApiDetail {

    loginWithBranchLeader() {
        cy.request(
            constant.METHOD_POST, constant.LOGIN_END_POINT, branchLeadCredential
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.body.userName).to.equal(branchLeadCredential.userName);
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
            expect(response.body.roles.length).to.equal(constant.ARRAY_LENGTH);
            expect(response.body.roles[0].authority).to.equal(constant.USER_ROLE_BRANCH_LEAD);
        });
    }

    createBooking(){
        const options = {
            method: constant.METHOD_POST,
            url: constant.BOOKING_END_POINT,
            body:createBooking,
            auth: {
                'bearer': value
            }
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);
                expect(response.body.donor.name).to.equal(createBooking.donor.name);
                expect(response.body.donor.phoneNo).to.equal(createBooking.donor.phoneNo);
            });

    }

    searchBookingList(){

        const options = {
            method: constant.METHOD_GET,
            url: constant.BOOKING_SEARCH_END_POINT,
            auth: {
                'bearer': value
            }
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);
                expect(response.body.donor.name).to.equal(createBooking.donor.name);
                expect(response.body.donor.phoneNo).to.equal(createBooking.donor.phoneNo);
               });
    }

    deleteBooking(){
    
        const options = {
            method: constant.METHOD_DELETE,
            url: constant.BOOKING_END_POINT,
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

export default BookingApiDetail;