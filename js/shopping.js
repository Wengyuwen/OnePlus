define(["jquery","jquery-cookie"],function($){

    //二级导航移入移出
    function appear(){
        $(".first").hover(function(){
            $(".first-list").css("display","block");
        },function(){
            $(".first-list").css("display","none");
        })
        $(".first-list").hover(function(){
            $(".first-list").css("display","block");
            
        },function(){
            $(".first-list").css("display","none");
        })


        $(".second").hover(function(){
            $(".last-list").css("display","block");
        },function(){
            $(".last-list").css("display","none");
        })
        $(".last-list").hover(function(){
            $(".last-list").css("display","block");
        },function(){
            $(".last-list").css("display","none");
        })
    }



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
        

  
        
        // 购物车
        function shoppingCar(){
            sc_msg();
            sc_num();
            $(".shop-row").on("click", '.delete_goodsBtn', function(){
                //删除节点  页面上要删除这个节点，cookie中也要删除
                var id = $(this).closest("li").remove().attr("id");
                var cookieArr = JSON.parse($.cookie("goods"));
                var index = cookieArr.findIndex(item => item.id == id);
                cookieArr.splice(index, 1);
                //判断cookieArr是否为空
                cookieArr.length === 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                  expires: 7
                })
                sc_num();
              })
              
              
              //通过事件委托，给加和减这两个按钮添加点击
              $(".shop-row").on("click", ".number button", function(){
                var id = $(this).closest("li").attr("id");
                console.log(id);
                //1、先找到这个id的cookie数据
                var cookieArr = JSON.parse($.cookie("goods"));
                var index = cookieArr.findIndex(item => item.id == id);
                if(this.innerHTML == "+"){
                  cookieArr[index].num ++;
                }else{
                  cookieArr[index].num == 1 ? alert("数量为1，不减少") : cookieArr[index].num--;
                }
                //页面显示的数量
                $(this).siblings(".input-number").html(`<input type="text" value="${cookieArr[index].num}">`);
        
                $.cookie("goods", JSON.stringify(cookieArr), {
                  expires: 7
                })
                sc_num();
                // sc_msg();
                sc_sum()
              })
        
        
    
    
                //         // 计算购物车商品的数量
                function sc_num(){
                    var cookieStr = $.cookie("goods");
                    var sum = 0;
                    if(cookieStr){
                        var cookieArr = JSON.parse(cookieStr);
                        for(var i = 0; i < cookieArr.length; i++){
                            sum += cookieArr[i].num;
                        }
                    }
                    console.log(sum)
                    $(".sc_num").html(sum);
                }
    
        
            //   //加载购物车商品
            //   //cookie 放着我们加入购物车的商品 id num
            //   //商品的具体的数据  数据源
              function sc_msg(){
                //先清空一下上一次的数据
                $(".shop-row").empty();
                $.ajax({
                  type: "get",
                  url: "../data/data.json",
                  success: function(arr){
                    //在arr中将已经加入购物车的数据拿出来
                    var cookieStr = $.cookie("goods");
                    var newArr = [];
                    if(cookieStr){
                      var cookieArr = JSON.parse(cookieStr);
                      for(var i = 0; i < arr.length; i++){
                        for(var j = 0; j < cookieArr.length; j++){
                          if(arr[i].id == cookieArr[j].id){
                            //将数据添加上述
                            arr[i].num = cookieArr[j].num;
                            newArr.push(arr[i]);
                            break;
                          }
                        }
                      }
                      // console.log(newArr);
        
            //           //将找出来的数据，在右侧购物车的部分加载出来
                      for(var i = 0; i < newArr.length; i++){
            //             var node = $(`<li id="${newArr[i].id}">
            //               <div class="sc_goodsPic">
            //                   <img src="${newArr[i].img}" alt="">
            //               </div>
            //               <div class="sc_goodsTitle">
            //                   <p>这是商品曲奇饼干</p>
            //               </div>
            //               <div class="sc_goodsBtn">购买</div>
            //               <div class="delete_goodsBtn">删除</div>
            //               <div class="sc_goodsNum">
            //                   <div>
            //                       <button>+</button>
            //                       <button>-</button>
            //                       <span>商品数量：${newArr[i].num}</span>
            //                   </div>
            //               </div>
            //           </li> `);
                            var node = $(`<li class="list1" id="${newArr[i].id}">
                            <div class="shp-col select">
                                <div class="current">
                                    <i></i>
                                </div>
                            </div>
                            <div class="shp-col image">
                                <a href="">
                                    <img src="${newArr[i].img}" alt="" class="sc_goodsPic">
                                </a>
                            </div>
                            <div class="shp-col title sc_goodsTitle">
                                <a href="">${newArr[i].title1}</a>
                            </div>
                            <div class="shp-col standard-width">
                               <span class="pric">￥${newArr[i].pic}</span>
                            </div>
                            <div class="shp-col increase"> 
                                <div class="number">
                                    <button class="disable">-</button>
                                    <button class="add">+</button>
                                    <div class="input-number">
                                        <input type="text" value="${newArr[i].num}">
                                    </div>
                                </div>
                            </div>
                            <div class="shp-col handle">
                                <a href="" class="delete">
                                    <button class="delete_goodsBtn">删除</button>
                                </a>
                            </div>
    
                        </li>`)
                        
                     
                        node.appendTo($(".shop-row"));
                      }
                    }
                  },
                  error: function(msg){
                    console.log(msg);
                  }
                })
            }
           
      $(".list-card").on("click", '.shop-add', function(){
        alert("已加入购物车");
        var id = this.id;
        // 1、判断是否第一次添加
        var first = $.cookie("goods") === null ? true : false;
        if(first){
          var cookieArr = [{id:id, num: 1}];
          $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
          })
        }else{
          var cookieArr = JSON.parse($.cookie("goods"));
          var same = false; //假设没有添加过
          for(var i = 0; i < cookieArr.length; i++){
            if(cookieArr[i].id == id){
              same = true;
              cookieArr[i].num++;
              break;
            }
          }
  
          if(!same){
            var obj = {id: id, num: 1};
            cookieArr.push(obj);
          }
  
          $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
          })
          sc_num()
          sc_sum()
        }
        
        
        })
        function unitPrice(id){
            var price = 0;
            $.ajax({
              type: "get",
              url: "../data/data.json",
              async:false,//改成同步
              success: function(arr){
                //在arr中将已经加入购物车的数据拿出来
                var cookieStr = $.cookie("goods");
                if(cookieStr){
                  var cookieArr = JSON.parse(cookieStr);
                  for(var i = 0; i < arr.length; i++){
                    for(var j = 0; j < cookieArr.length; j++){
                      if(arr[i].id == cookieArr[j].id){
                        price += parseInt(arr[i].pic);
                      }
                    }
                  }
                }
              }
            })
            return price;
          }
        
          function sc_sum(){
            var sum = 0;
            var total = 0;
            var cookieStr = $.cookie("goods");
            if(cookieStr){
              var cookieArr = JSON.parse(cookieStr);
              for(var i = 0; i < cookieArr.length; i++){
                sum += cookieArr[i].num;
                console.log(unitPrice(cookieArr[i].id))
                total += sum * unitPrice(cookieArr[i].id)
              }
            }
            console.log(total)
            $('strong .num').html(`${total}`)
            $(".sc_num").html(sum);
            //  $('.pric').html(`${sum}`)
            //console.log(total)
          }
    }
    function download(){
  
        sc_sum();
    
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

        function sc_sum(){
            var sum = 0;
            var total = 0;
            var cookieStr = $.cookie("goods");
            if(cookieStr){
              var cookieArr = JSON.parse(cookieStr);
              for(var i = 0; i < cookieArr.length; i++){
                sum += cookieArr[i].num;
                console.log(unitPrice(cookieArr[i].id))
                total += sum * unitPrice(cookieArr[i].id)
              }
            }
            console.log(total)
            $('strong .num').html(`${total}`)
            $(".sc_num").html(sum);
            //  $('.pric').html(`${sum}`)
            //console.log(total)
          }
          function unitPrice(id){
            var price = 0;
            $.ajax({
              type: "get",
              url: "../data/data.json",
              async:false,//改成同步
              success: function(arr){
                //在arr中将已经加入购物车的数据拿出来
                var cookieStr = $.cookie("goods");
                if(cookieStr){
                  var cookieArr = JSON.parse(cookieStr);
                  for(var i = 0; i < arr.length; i++){
                    for(var j = 0; j < cookieArr.length; j++){
                      if(arr[i].id == cookieArr[j].id){
                        price += parseInt(arr[i].pic);
                      }
                    }
                  }
                }
              }
            })
            return price;
          }
    }

    function disappeared(){
      $(function(){
        $(".ico-shop").hover(function(){
            if($(".sc_num").html() == 0){
              $(".basket").show();
            }else{
              $(".basket").hide();
            }
          },function(){
            $(".basket").hide();
          })          
        })
      }
    


      function goShopping(){
        $(function(){
          if($(".sc_num").html() == 0){
            $(".shopBox").show();
            $(".shopping-list").hide();
            $(".shp-cart-bar").hide();
          }else{
            $(".shopBox").hide();
            
          }
        })
      }

    return{
        appear,
        comeOut,
        sport,
        shoppingCar,
        download,
        disappeared,
        goShopping,
        

    }
})
