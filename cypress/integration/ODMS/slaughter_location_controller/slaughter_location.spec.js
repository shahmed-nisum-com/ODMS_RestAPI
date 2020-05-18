import slaughter_location_detail from '../slaughter_location_controller/slaughter_location_detail';


const slObj = new slaughter_location_detail();

describe('Do the qurabi location operation', function () {

    it('Login with manager role', function () {

        slObj.postRequest();

    });

    it('get all countries names', function () {

        slObj.getRequestToAllSlaughterLocation();

    });

    it('Add a slaughter location', function () {

        slObj.postRequestToSlaughterLocation();
    });
});