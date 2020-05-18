import user_role_detail from '../user_role_controller/user_role_detail';


const urObj = new user_role_detail();

describe('Do the user role operation', function () {

    it('Login with manager role', function () {

        urObj.postRequest();

    });

    it('Get all User Names Respective to their manager', function (){

        urObj.getRequestToAllUserRole();

    });

    it('Get User PrOfile', function (){

        urObj.getRequestToAllUserProfile();
    });

    it('Remove a record', function (){
        urObj.deleteRequestToRemoveUserProfile();
    });

    it('Add a user', function (){
        urObj.postRequestToAddUser();

    });


});
