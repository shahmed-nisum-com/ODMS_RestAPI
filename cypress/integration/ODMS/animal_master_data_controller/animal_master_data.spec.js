import animal_master_data_detail from '../animal_master_data_controller/animal_master_data_detail';
const amddObj = new animal_master_data_detail();


describe("Accounts controller by Head Country", function () {

    it('Login with Country Head user', () => {
        amddObj.loginWithCountryHeadUser(); 
    });

    it('Search by phone number', () => {
        amddObj.getRequestAnimalMasterData();
    });

});