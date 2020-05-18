
import authenticationDetail  from '../authentication_controller/authenticationDetail.js';
const authObj = new authenticationDetail();

describe("POST,GET,PUT request through manager role", () => {

    it("Login Request with manager", () => {

        authObj.loginTest();
    });

    it('Post request to create a new outlets', () => {

        authObj.logOutTest();
    });
});