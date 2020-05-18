
import booking_outlet_detail from '../booking_outlet_controller/booking_outlet_detail';
const bodObj = new booking_outlet_detail();


describe("POST,GET,PUT request through country head role", () => {

    it.only("Login Request with country head", () => {

        bodObj.postRequest();
    });

    it.only('Post request to create a new outlets', () => {

        bodObj.postRequestBookingOutlet();
    });


    it.only('PUT Request To Update booking outlets through country head', function () {

        bodObj.updateBookingOutlet();
    });

    it.only('Delete booking outlet id', function () {

        bodObj.deleteBookingOutlet();
    });

});