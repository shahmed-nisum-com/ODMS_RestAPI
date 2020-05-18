
import send_notification_detail from '../send_notification_controller/send_notification_detail';
const sndObj = new send_notification_detail();


describe("POST,GET,PUT request through manager role", () => {

    it("Login Request with manager", () => {

        sndObj.postRequest();
    });

    it('GET Request to Send Notification', function () {
        sndObj.getSmsNotification();
    });

});
