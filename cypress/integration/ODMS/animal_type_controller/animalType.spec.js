
import animalTypeDetail from '../animal_type_controller/animalTypeDetail';
const atdObj = new animalTypeDetail();


describe("POST,GET,PUT request through Country head role", () => {

    it.only("Login Request with Country Head", () => {

        atdObj.postRequest();
    });

    it('Post request to create a new type of animal', () => {

        atdObj.postRequestAnimalType();
    });


    it.only('GET Request To Check Animal Type Data', function () {

        atdObj.getAnimalTypeData();
    });

    it.only('Delete booking outlet id', function () {

        atdObj.deleteAnimalType();
    });

});