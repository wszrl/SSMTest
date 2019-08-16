$(document).ready(function(){
$("#header_topbar_ul li").hover(function(){
  $(this).find("ul").fadeIn();
},function(){
  $(this).find("ul").fadeOut();
});
});
  var time=new Date();

  if(time.getHours()>12){
  	document.getElementById("hi").innerHTML="下午好！";
 
  }else{
  	document.getElementById("hi").style.display="inline-block";
  	document.getElementById("hi").innerHTML="上午好！";

  }

