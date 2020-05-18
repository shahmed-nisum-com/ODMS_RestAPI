
var constant = require('../../../fixtures/constant.json');
var login = require('../../../fixtures/loginCredential.json');
var value;


class report_detail {

    loginWithManagerRole() {
        cy.request(
            constant.METHOD_POST,
            constant.LOGIN_END_POINT,
            login
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.body.userName).to.equal(login.userName);
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);

        });
    }

    getRequestForAnimalDetailReport() {
        const options = {
            method: constant.METHOD_GET,
            url: constant.ANIMAL_DETAIL_REPORT,
            auth: {
                'bearer': value
            }
        };

        cy.request(options).then((response) => {
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);


        });
    }

    getRequestForAnimalSlaughterReport() {
        const options = {
            method: constant.METHOD_GET,
            url: constant.ANIMAL_SLAUGHTER_REPORT,
            auth: {
                'bearer': value
            }
        };

        cy.request(options).then((response) => {
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);


        });
    }

    getRequestForPerAnimalExpenseReport() {
        const options = {
            method: constant.METHOD_GET,
            url: constant.ANIMAL_PER_EXPENSE,
            auth: {
                'bearer': value
            }
        };

        cy.request(options).then((response) => {
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);

        });
    }

    getRequestForGlobalExpenseReport() {
        const options = {
            method: constant.METHOD_GET,
            url: constant.GLOBAL_EXPENSE,
            auth: {
                'bearer': value
            }
        };

        cy.request(options).then((response) => {
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
        });

    }





}

export default report_detail;