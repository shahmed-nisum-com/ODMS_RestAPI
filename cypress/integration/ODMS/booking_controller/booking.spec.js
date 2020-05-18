

import bookingapidetail from '../booking_controller/bookingapidetail';
const bookingObj = new bookingapidetail();


describe("Booking operation by branch lead role", function () {

    it.only('Login with Branch Leader user', () => {
        bookingObj.loginWithBranchLeader();
    });

    it.only('Create a booking', () => {

        bookingObj.createBooking();
    });

    it('Search Booking List', () => {

        bookingObj.searchBookingList();
    });

    it('Delete Booking', () => {

        bookingObj.deleteBooking();
    });



});