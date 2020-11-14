define(["jquery","jquery-cookie","jquery-ui-min"],function($){
    //  //二级导航移入移出
    //  function appear(){
    //      $(function(){
    //         $(".first").hover(function(){
    //             $(".first-list").css("display","block");
    //         },function(){
    //             $(".first-list").css("display","none");
    //         })
    //         $(".first-list").hover(function(){
    //             $(".first-list").css("display","block");
                
    //         },function(){
    //             $(".first-list").css("display","none");
    //         })
    
    
    //         $(".second").hover(function(){
    //             $(".last-list").css("display","block");
    //         },function(){
    //             $(".last-list").css("display","none");
    //         })
    //         $(".last-list").hover(function(){
    //             $(".last-list").css("display","block");
    //         },function(){
    //             $(".last-list").css("display","none");
    //         })
    //      })
        
    // }

    // 关闭登录提示
    function close(){
        $(function(){
            $(".p-close i").click(function(){
                $(".local-box").css("display","none");
            })
    
            $(".local-box").animate({
                top:0
            },1000)
        })
    }

    // 点击出现红色边框
    function bord(){
        $(function(){
            $(".bp-cm-button").click(function(){
                $(this).siblings('li').removeAttr("id","active");
                $(this).attr("id","active");
                
            })
        })
    }


    // 点击对号选中 再点击消失
    function checked(){
        $(function(){
            $(".check").click(function(){
                $(this).removeAttr("id","pitch");
                $(this).attr("id","pitch");
          
           
                
            })
        })
    }
 



    // hover服务详情出现保障服务
    console.log("111")

    function show(){
       $(function(){
        $(".insurance-item .main-info .desc-info").hover(function(){
            $(this).parent().next(".desc-cont").css("display","block")
        },function(){
            $(".desc-cont").css("display","")
        })
       })
    }
      
// 放大镜

function amplification(){
    $(function(){
        $(".img-block li img").click(function () {
            $('#small a .change-img').attr('src',this.src)
            $('#big img').attr('src',$('#small a .change-img')[0].src)
        })
        var oSmall = document.getElementById("small");
        var oMark = document.getElementById("mark");
    
        var oBig = document.getElementById("big");
        var oBigImg = oBig.getElementsByTagName("img")[0];
    
    
        oSmall.onmouseenter = function(){
            oMark.style.display = 'block';
            oBig.style.display = 'block';
        }
    
        oSmall.onmouseleave = function(){
            oMark.style.display = 'none';
            oBig.style.display = 'none';
        }
    
        oSmall.onmousemove = function(ev){
            var e = ev || window.event;
            var l = e.clientX - oSmall.offsetLeft - 275;
            if(l <= 0){
                l = 0;
            }
            if(l >= 350){
                l = 350;
            }
    
            
            var t = e.clientY - oSmall.offsetTop - 275;
            if(t <= 0){
                t = 0;
            }
            if(t >= 350){
                t = 350;
            }
            oMark.style.left = l + 'px';
            oMark.style.top = t + 'px';
    
            //放大的图片要反向移动对应倍数的距离
            oBigImg.style.left = -2 * l + 'px';
            oBigImg.style.top = -2 * t + 'px';
        }
    })
    

}


    // 支付切换
    function tab(){
        $(function(){
            var aBtns = $("#staging-info .check-methods").find(".btn");
        var aDivs = $("#staging-info").find(".methods-inner");

        aBtns.click(function(){
          aBtns.attr("class", '');
          $(this).attr("class", 'active');

          aDivs.hide()
            .eq($(this).index())
            .show();
        })
        })
        
    }


    // 添加划入划出显示隐藏contentBox
    function reveal(){
        $(function(){
            $(".tit2").hover(function(){
                $(".contentBox").show();
            },function(){
                $(".contentBox").hide();
            })
        })
    }

    
        // 划入main出现user-nav和basket

        function comeOut(){
            $(function(){
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
    
                $(".ico-shop").hover(function(){
                    $(".basket").show();
                },function(){
                    $(".basket").hide();
                })
                $(".basket").hover(function(){
                    $(".basket").show();
                },function(){
                    $(".basket").hide();
                })
            })
        }

        //去购物黑色滚动条
        function sport(){
            $(function(){
                $(".cart-link a").hover(function(){
                    $(".black").stop().animate({width:358},200);
    
                },function(){
                    $(".black").stop().animate({width:0},200);
                })  
            })
        }

    return{
    
        close,
        show,
        bord,
        checked,
        amplification,
        tab,
        reveal,
        sport,
        comeOut
    }
})
