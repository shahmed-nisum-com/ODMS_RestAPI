
import report_detail from '../report_controller/report_detail';

const rdObj = new report_detail();

describe('Report related testcases', () => {

    it('Login with manager role', () => {
        rdObj.loginWithManagerRole();
    });

    it('Animal detail report()', () => {

        rdObj.getRequestForAnimalDetailReport();
    });

    it('Slaughter report ', () => {

        rdObj.getRequestForAnimalSlaughterReport();
    });

    it('Get Expense Per Animal Report ', () => {

        rdObj.getRequestForAnimalSlaughterReport();
    });

    it('Get Expense Per Animal Report ', () => {

        rdObj.getRequestForGlobalExpenseReport();
    });

});