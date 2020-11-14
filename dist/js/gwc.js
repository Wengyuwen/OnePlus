define(["jquery","jquery-cookie"],function($){


    function shopCar(){

    
    sc_num();
    sc_msg();

    //下载数据到页面上
    $.ajax({
      type: 'get',
      url: './data.json',
      // dataType: "text",  //自动识别数据，再去做对应的处理
      success: function(arr){
       for(var i = 0; i < arr.length; i++){
        var node = $(`<li class="goods_item">
            <div class="goods_pic">
                <img src="${arr[i].img}" alt="">
            </div>
            <div class="goods_title">
                <p>【京东超市】奥利奥软点小草莓0</p>
            </div>
            <div class="sc">
                <div id="${arr[i].id}" class="sc_btn">加入购物车</div>
            </div>
        </li>`);

          node.appendTo($(".goods_box ul"));

       }

      },
      error: function(msg){
        console.log(msg);
      }
    })

    //给后添加的节点，添加事件
    /*
      本地存储技术 cookie（最大2kb，只能存储字符串）
      [{id:id,num:1},{id:id,num:1}]  转成json格式字符串。
    */
    $(".goods_box ul").on("click", ".sc_btn", function(){
      //获取到当前点击按钮所在商品的id。
      var id = this.id;
      var first = $.cookie("goods") === null ? true : false;
      if(first){
        //是第一次
        var cookieArr = [{id: id, num: 1}];
        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7
        })
      }else{
        //查找之前是否添加过
        var cookieArr = JSON.parse($.cookie("goods"));
        var same = false; //假设没添加过
        for(var i = 0; i < cookieArr.length; i++){
          if(cookieArr[i].id == id){
            same = true;
            break;
          }
        }
        if(same){
          //数量+1
          cookieArr[i].num++;
        }else{
          //没有添加过
          let obj = {id: id, num: 1};
          cookieArr.push(obj);
        }
        //存回cookie中
        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7
        })
      }
      // console.log($.cookie("goods"));
      sc_num();
      sc_msg();
    //   ballMove(this);
    })

    //右侧的购物车添加移入移出效果
    // $(".sc_right").mouseenter(function(){
    //   $(this).stop(true).animate({right: 0})
    // }).mouseleave(function(){
    //   $(this).stop(true).animate({right: -270})
    // })

    //给删除按钮添加点击
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
      //1、先找到这个id的cookie数据
      var cookieArr = JSON.parse($.cookie("goods"));
      var index = cookieArr.findIndex(item => item.id == id);
      if(this.innerHTML == "+"){
        cookieArr[index].num++;
      }else{
        cookieArr[index].num == 1 ? alert("数量为1，不减少") : cookieArr[index].num--;
      }
      //页面显示的数量
      $(this).siblings(".input-number").html(`${cookieArr[index].num}`);

      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      })
      sc_num();
    })


    function sc_num(){
      var sum = 0;
      var cookieStr = $.cookie("goods");
      if(cookieStr){
        var cookieArr = JSON.parse(cookieStr);
        for(var i = 0; i < cookieArr.length; i++){
          sum += cookieArr[i].num;
        }
      }
      $(".sc_num").html(sum);
    }

    //加载购物车商品
    //cookie 放着我们加入购物车的商品 id num
    //商品的具体的数据  数据源
    function sc_msg(){
      //先清空一下上一次的数据
      $(".sc_right ul").empty();
      $.ajax({
        type: "get",
        url: "./data.json",
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

            //将找出来的数据，在右侧购物车的部分加载出来
            for(var i = 0; i < newArr.length; i++){
                var node = $(`<li class="list1" id="${newArr[i].id}>
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
                    <a href="">Find X2 8G+128G 碧波</a>
                </div>
                <div class="shp-col standard-width">
                   <span class="pric">￥4499.00</span>
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
              node.appendTo($(".sc_right ul"));
            }
          }
        },
        error: function(msg){
          console.log(msg);
        }
      })
    }


    //node当前点击的加入购物车的按钮
    // function ballMove(node){
    //   $("#ball").css({
    //     display: 'block',
    //     left: $(node).offset().left,
    //     top: $(node).offset().top
    //   })

    //   //计算相对位置
    //   var X = $(".sc_right .sc_pic").offset().left - $(node).offset().left;
    //   var Y = $(".sc_right .sc_pic").offset().top - $(node).offset().top;

    //   //声明抛物线对象
    //   var bool = new Parabola({
    //     el: "#ball",
    //     offset: [X, Y],
    //     duration: 2000,
    //     curvature: 0.002,
    //     callback: function(){
    //       $("#ball").hide();
    //     }
    //   })

    //   bool.start();
    // }


    //实现清空购物车
    // $("#clearBtn").click(function(){
    //   $.cookie("goods", null);
    //   sc_num();
    //   sc_msg();
    // })
}
  

  return{
    shopCar
  }
})