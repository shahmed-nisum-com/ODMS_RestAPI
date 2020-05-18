
var loginData = require('../../../fixtures/loginCredential.json');
var constant = require('../../../fixtures/constant.json');
var userUpdateProfile=require('../../../fixtures/updateuserprofile.json');
var userAdd= require('../../../fixtures/createuser.json');
var value;


class user_role_detail {

    postRequest() {
        cy.request(
            constant.METHOD_POST, constant.LOGIN_END_POINT, loginData
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });
    }

    getRequestToAllUserRole() {
        var options = {
            Method: constant.METHOD_GET,
            url: constant.USER_ROLE_END_POINT,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then(function (response) {
            expect(response.status).equal(constant.API_SUCCESS_CODE);
        });
    }

    getRequestToAllUserProfile() {
        var options = {
            Method: constant.METHOD_GET,
            url: constant.USER_PROFILE,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then(function (response) {
            expect(response.status).equal(constant.API_SUCCESS_CODE);
        });
    }


    putRequestToUpdateUserProfile() {
        var options = {
            Method: constant.METHOD_PUT,
            url: constant.UPDATE_USER_PROFILE,
            body:userUpdateProfile,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then(function (response) {
            expect(response.status).equal(constant.API_SUCCESS_CODE);
        });
    }

    deleteRequestToRemoveUserProfile() {
        var options = {
            Method: constant.METHOD_DELETE,
            url: constant.USER_ROLE_END_POINT,

            auth: {
                'bearer': value
            }
        };
        cy.request(options).then(function (response) {
            expect(response.status).equal(constant.API_SUCCESS_CODE);
        });
    }




    postRequestToAddUser() {
        var options = {

            Method: constant.METHOD_POST,
            url: constant.USER_ROLE_END_POINT,
            body:userAdd,
            auth: {
                'bearer': value
            }
        };
        cy.request(options).then(function (response) {

            expect(response.status).equal(constant.API_SUCCESS_CODE);
        });
    }

}

export default user_role_detail;