require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        goodslist:"goodslist",
        shopping:'shopping',

    },
    shim:{
        "jquery-cookie":["jquery"]
    }

})

require(["goodslist","shopping"],function(goodslist,shopping){

    
    goodslist.comeOut();
    goodslist.sport();
    shopping.download();
    shopping.appear();
    shopping.shoppingCar();
    shopping.disappeared();
    shopping.appear();


})