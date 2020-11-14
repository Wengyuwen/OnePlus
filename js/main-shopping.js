require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        shopping:"shopping",


    },
    shim:{
        "jquery-cookie":["jquery"]
    }

})

require(["shopping"],function(shopping){
    shopping.appear();
    shopping.comeOut();
    shopping.sport();
    shopping.shoppingCar();
   shopping.download();
   shopping.disappeared();
    shopping.goShopping();
   

})
