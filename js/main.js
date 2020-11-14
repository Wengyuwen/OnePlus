require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        index: "index",

    },
    shim:{
        "jquery-cookie":["jquery"]
    }

})

require(["index"],function(index){
    index.appear();
    index.move();
    index.star();
    index.comeOut();
    index.sport();

   

})

