
import animal_purchase_order_detail from '../animal_purchase_order/animal_purchase_order_detail';

const apodObj = new animal_purchase_order_detail();

describe('Animal Purchase order by manager role', () => {

    it.only('Login by manager role', function () {

        apodObj.loginWithManagerRole();

    });

    it.only('create animal purchase order', function () {

        apodObj.postRequestAnimalPurchaseOrder();
    });

    it('confirm animal purchase order', function () {

        apodObj.conirmAnimalPurchaseOrder();
    });

    it('Animal purchase transaction', function () {
        apodObj.completeAnimalPurchaseOrder();
    });




});