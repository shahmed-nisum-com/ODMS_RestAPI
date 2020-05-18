

var branchLeadCredential = require('../../../fixtures/branchleadercredential.json');
var constant = require("../../../fixtures/constant.json");
var value;

class donor_detail{

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

    getRequestSearchDonorByPhoneNumber(){
        const options={
            method:constant.METHOD_GET,
            url:constant.DONOR_END_POINT+'/'+constant.PHONE_NUMBER,
            auth: {
                'bearer': value
              }
            };

            cy.request(options).then((response)=>{
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);
                expect(response.body.phoneNo).equal(constant.PHONE_NUMBER);

            });
    }

}

export default donor_detail;