
define(["jquery","jquery-cookie"],function($){

    
        function arise(){
            $(".language").on("click",function(){
                $(".choice-box").toggle();
            })
            
            $(".p2").click(function(){
                $(".p2").css("border-color","red");
                $(".p1").css("border-color","")
                $(".ipt2").css("display","block");
                $(".ipt4").css("display","block");
                $(".ipt1").css("display","none");
                $(".ipt3").css("display","none");
            })

            $(".p1").click(function(){
                $(".p2").css("border-color","")
                $(".p1").css("border-color","red");
                $(".ipt1").css("display","block");
                $(".ipt3").css("display","");
                $(".ipt2").css("display","none");
                $(".ipt4").css("display","none");
            })
        }
        
        


    return{
        arise
    }
})