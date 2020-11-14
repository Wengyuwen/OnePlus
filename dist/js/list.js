define(["jquery", "jquery-cookie"], function($){
    function list(){
      $(function(){
        $.ajax({
          type: 'get',
          url: "../data/data.json",
          success: function(arr){
            var str = ``;
            for(var i = 0; i < arr.length; i++){
          //     str += `<li class="goods_item">
          //     <div class="goods_pic">
          //         <img src="${arr[i].img}" alt="">
          //     </div>
          //     <div class="goods_title">
          //         <p>【京东超市】奥利奥软点小草莓0</p>
          //     </div>
          //     <div class="sc">
          //         <div id="${arr[i].id}" class="sc_btn">加入购物车</div>
          //     </div>
          // </li>`;
  
                  str +=
               `<li class="accessory-card">
                    <div class="product-tags">
                        <span class="product-new">
                            <span class="tag-text">新品</span>
                        </span>
                    </div>
                    <div class="card-image">
                        <img src="${arr[i].img}" alt="">
                    </div>
                    <span class="text-xs">&nbsp;</span>
                    <span class="text-sm">${arr[i].title1}</span>
                    <span class="accessory-price">
                        <span class="text-black">最低价${arr[i].pic}</span></br>
                        <span class="text-black shop-add" id="${arr[i].id}">加入购物车</span>
                    </span>
                    
                </li>`;
            }
    
            $(".list-card").html(str);
          },
          error: function(msg){
            console.log(msg);
          }
        })
  
      })
     
    }
    //   $(".list-card").on("click", '.shop-add', function(){
    //     var id = this.id;
    //     // 1、判断是否第一次添加
    //     var first = $.cookie("goods") === null ? true : false;
    //     if(first){
    //       var cookieArr = [{id:id, num: 1}];
    //       $.cookie("goods", JSON.stringify(cookieArr), {
    //         expires: 7
    //       })
    //     }else{
    //       var cookieArr = JSON.parse($.cookie("goods"));
    //       var same = false; //假设没有添加过
    //       for(var i = 0; i < cookieArr.length; i++){
    //         if(cookieArr[i].id == id){
    //           same = true;
    //           cookieArr[i].num++;
    //           break;
    //         }
    //       }
  
    //       if(!same){
    //         var obj = {id: id, num: 1};
    //         cookieArr.push(obj);
    //       }
  
    //       $.cookie("goods", JSON.stringify(cookieArr), {
    //         expires: 7
    //       })

    // }
      
  
    //     // alert($.cookie("goods"));
    //     sc_num();
    //   })
    // }
  



    return {
      // list
     

    }
  })
  