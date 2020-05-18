import qurbani_location from '../qurbani_location_controller/qurbani_location_detail';


const qlObj = new qurbani_location();

describe('Do the qurabi location operation', function () {

    it('Login with manager role', function () {

        qlObj.postRequest();

    });

    it('get all countries names', function (){

        qlObj.getRequestToAllCountries();

    });

    it('Add a country name in Quarbani location', function (){

        qlObj.postRequestToAddCountry()
    });


});
