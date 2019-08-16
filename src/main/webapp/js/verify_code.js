// $(document).ready(function () {
//     $("input").each(function () {
//         var id=$(this).attr("id");
//         showerror(id);
//     });
//
// });
//
//     $("input").focus(function () {
//         var name = $(this).attr("id");
//         var v = $("#" + name + "error").text();
//         if (v!=null) {
//             $("#"+name+"error").css("display","none");
//         }
//
//     })
//     $("input").blur(function () {
//         var name=$(this).attr("id");
//         var text=$("#"+name).val();
//
//         if(text!=""){
//             $("#"+name+"error").css("display","none");
//             var method=name+"Verify";
//             var t=text.trim();
//             var str= t.replace(/\s/g, "");
//             alert(str);
//             Verifymethod(method,str);
//         }else{
//             $("#"+name+"error").css("display","inline")
//         }
//
//
//     });
//
//
//     function showerror(id){
//         var txt=$("#"+id).valueOf();
//         if(txt!=""){
//             $("#"+id+"error").css("display","none");
//         }else {
//             $("#"+id+"error").css("display","block")
//         }
//
//     }
//
//     function Verifymethod(method,name) {
//         if(method==(" user_nameVerify")){
//             alert(name);
//             user_nameVerify(method,name);
//         }else if(method==("passwordVerify")) {
//             passwordVerify(method,name);
//         }else if (method==("user_emailVerify")){
//             user_emailVerify(method,name);
//         }
//     }
//
//     function user_nameVerify(method,name) {
//         alert(naem);
//          $.ajax({
//             url: "/student/registstudent",
//              async:true,
//             type: "post",
//              datatype: "json",
//           data:{
//                username:$("#user_name").val(),
//               password:$("#password").val()
//           },
//              success: function (data) {
//             if(data!=true){
//           $("."+method+"error").innerHTML="用户名已存在!"
//          }else{
//                 $("."+method+"error").innerHTML="用户名正确!"
//         }
//             }
//
//     })
//     }
//
//
//
//
//  //验证码
//
//     var code;
//     var a;
//     window.onload = function yanzhengma() {
//         var c=document.getElementById("img_code");
//         var str = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//         code="";
//         for(var i=0;i<4;i++){
//                 var s=Math.floor(Math.random()*52);
//             code+=str[s];
//         }
//    c.value=code;
//     };
//
//
//     //刷新验证码
//     $(document).ready(function(){
//         $("#flush_code").click(function(){
//
//         });
//     });
//
// //验证验证码
//    function check_code() {
//
//    }
//
//
// //随机颜色 还未添加进去
// //     function randomColor(){
// //         var r=parseInt(Math.random()*256);
// //         var g=parseInt(Math.random()*256);
// //         var b=parseInt(Math.random()*256);
// //         var rgb="rgb("+r+","+g+","+b+")";
// //         return rgb;
// //     }
//
//
