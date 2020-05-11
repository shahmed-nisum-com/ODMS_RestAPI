
import QurbaniApiDetail from '../integration/ODMS/QurbaniApiDetail';

import Detail from '../integration/ODMS/Detail.js';
const detailObj = new Detail();

const obj = new QurbaniApiDetail();

describe("POST,GET,PUT request through manager role", () => {

    it("Login Request with manager", () => {

        obj.postRequest();
    });

    it('GET Request to get Qurbani data through manager', function () {
        obj.getQuarbaiResource();
    });

    it('PUT Request To Update booking outlets through manager', function () {

        obj.updateBookingOutlet();
    });
});