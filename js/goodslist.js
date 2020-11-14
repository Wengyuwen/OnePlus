define(["jquery","jquery-cookie"],function($){

    //二级导航移入移出
    // function appear(){
    //     $(".first").hover(function(){
    //         $(".first-list").css("display","block");
    //     },function(){
    //         $(".first-list").css("display","none");
    //     })
    //     $(".first-list").hover(function(){
    //         $(".first-list").css("display","block");
            
    //     },function(){
    //         $(".first-list").css("display","none");
    //     })


    //     $(".second").hover(function(){
    //         $(".last-list").css("display","block");
    //     },function(){
    //         $(".last-list").css("display","none");
    //     })
    //     $(".last-list").hover(function(){
    //         $(".last-list").css("display","block");
    //     },function(){
    //         $(".last-list").css("display","none");
    //     })
    // }


            // 划入main出现user-nav和basket

            function comeOut(){
                $(".ico-load").hover(function(){
                    $(".user-nav").show();
                },function(){
                    $(".user-nav").hide();
                })
                $(".user-nav").hover(function(){
                    $(".user-nav").show();
                },function(){
                    $(".user-nav").hide();
                })
    
                // $(".ico-shop").hover(function(){
                //     $(".basket").show();
                // },function(){
                //     $(".basket").hide();
                // })
                // $(".basket").hover(function(){
                //     $(".basket").show();
                // },function(){
                //     $(".basket").hide();
                // })
    
    
            }
    
            //去购物黑色滚动条
            function sport(){
                $(".cart-link a").hover(function(){
                    $(".black").stop().animate({width:358},200);
    
                },function(){
                    $(".black").stop().animate({width:0},200);
                })  
            }
    

    return{
        // appear,
        sport,
        comeOut
    }
})