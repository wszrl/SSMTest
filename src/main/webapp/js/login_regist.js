$("input").each(function () {
        var str=$(this).valueOf();
        showerror(str);
    });

$(document).ready(function () {
    $("input").focus(function () {
        var classnames=$(this).attr("class")+"error";
        $("#"+classnames).css('display','none');

    })
});
$(document).ready(function () {
    $("input").blur(function () {
        var classname=$(this).attr("class")+"error";
        var c=$(this).attr("class");
        var text2=$("."+c).val();
        if(text2==""){
            showerror(text2,classname);
     }else{
            checkfunction(text2,c);
        }

    })
});

   function checkfunction(text,name) {
        var v="check_"+name;
       window [v](text,name);
   };
    function check_name(text,name) {

    if(text.length<6||text.length>10){
        $("#"+name+"error").html("用户名6-10长度").css('display','inline');
    };
       $.ajax({
           type:"GET",
           url:"/user/findLoginname",
           dateType:"json",
           async:false,
           data: {username:$("#username").val(), password:$("#password").val()},
           success:function (date) {
           }
       }
   )





   }
//    function check_pwd() {
//
//    }
//
// function check_nemails() {
//
// }
//    function check_codes() {
//
//    }
  function showerror(str,classname){
     if (str!="") {
         $("#"+classname).css('display','none');
     }else {
         $("#"+classname).css('display','inline');
     }
  }





