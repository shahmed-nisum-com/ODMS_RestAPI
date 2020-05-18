
var constant=require('../../../fixtures/constant.json');
var login=require('../../../fixtures/loginCredential.json');
var createPurchaseOrder=require('../../../fixtures/createpurchaseorder.json');
var confirmPurchaseOrder=require('../../../fixtures/confirmpurchaseorder.json');
var purchase=require('../../../fixtures/purchaseanimalorder.json');
var value;


class animal_purchase_order_detail{

    loginWithManagerRole() {
        cy.request(
            constant.METHOD_POST, 
            constant.LOGIN_END_POINT,
            login
        ).then(function (response) {
            value = response.body.accessToken;
            expect(response.body.userName).to.equal(login.userName);
            expect(response.status).to.equal(constant.API_SUCCESS_CODE);
            expect(response.body.roles.length).to.equal(constant.ARRAY_LENGTH);
            //expect(response.body.roles[0].authority).to.equal(constant.);
        });
    }

    postRequestAnimalPurchaseOrder(){
        const options={
            method:constant.METHOD_POST,
            url:constant.ANIMAL_PURCHASE_ORDER_END_POINT,
            body:createPurchaseOrder,
            auth: {
                'bearer': value
              }
            };

            cy.request(options).then((response)=>{
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);

            });
    }

    conirmAnimalPurchaseOrder(){
        const options={
            method:constant.METHOD_POST,
            url:constant.ANIMAL_CONFIRM_QUANTITY,
            body:confirmPurchaseOrder,
            auth: {
                'bearer': value
              }
            };

            cy.request(options).then((response)=>{
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);

            });
    }

    completeAnimalPurchaseOrder(){
        const options={
            method:constant.METHOD_POST,
            url:constant.ANIMAL_PURCHASE_TRANSACTION_END_POINT,
            body:purchase,
            auth: {
                'bearer': value
              }
            };

            cy.request(options).then((response)=>{
                expect(response.status).to.equal(constant.API_SUCCESS_CODE);

            });
    }

}
export default animal_purchase_order_detail;