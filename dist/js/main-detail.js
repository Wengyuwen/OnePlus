require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "jquery-ui-min":"jquery-ui-min",
        detail:"detail",
        shopping:"shopping"

    },
    shim:{
        "jquery-cookie":["jquery"],
        "jquery-ui-min":["jquery"]
    }

})

require(["detail","shopping"],function(detail,shopping){
    
    shopping.appear();
    detail.close();
    detail.show();
    detail.bord();
    detail.checked();
    detail.amplification();
    detail.tab();
    detail.reveal();
    detail.sport();
    detail.comeOut();
    shopping.download();
    shopping.shoppingCar();
    shopping.disappeared();

  


    

})