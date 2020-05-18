
import accountDetail from '../account_controller/accountDetail';
const accountDetails = new accountDetail();


describe("Accounts controller by Head Country", function () {

    it('Login with Country Head user', () => {
        accountDetails.loginWithCountryHead();
    });

    it('Fetch All acounts', () => {
        accountDetails.getRequestForAllBankAccount();
    });

    it('Post a bank account request', () => {

        accountDetails.postRequestForAddAnAccount();
    });

    it('Update a bank account', () => {

        accountDetails.updateRequestForAccount();
    });

    it('Get a specific bank account', () => {

        accountDetails.getRequestForAccount();
        });
    


});