import donor_detail from '../donor_controller/donor_detail';
const ddObj = new donor_detail();


describe("Accounts controller by Branch Leader", function () {

    it('Login with Branch Leader', () => {
        ddObj.loginWithBranchLeader();
    });

    it('Search by phone number', () => {
        ddObj.getRequestSearchDonorByPhoneNumber();
    });

});