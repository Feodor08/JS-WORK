$(document).ready(function(){
$("#sd1").slider();
$("#pb1").progressbar({value:75});
$("#tabs").tabs();
$("#descr1").dialog({autoOpen:false,width:200,height:300});
$("#descr2").dialog({modal:true,autoOpen:false});
$("#descr3").dialog({autoOpen:false,buttons:{
      OK:function(){
         $(this).dialog("close");
         alert("Вы нажали ОК.");},
      Отмена:function(){
         $(this).dialog("close");
         alert("Вы нажали Отмена.");}}
   });
$("#but1").click(function(){
      $("#descr1").dialog("open");
});
$("#but2").click(function(){
    $("#descr2").dialog("open");
});
$("#but3").click(function(){
      $("#descr3").dialog("open");
});
});