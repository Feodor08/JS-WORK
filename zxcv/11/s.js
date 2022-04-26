$(document).ready(function() {
   
   $("#but1").click(function(){
      $("#testcontainer").hide($("#effect1").val(),{},1000);
   });
   $("#but2").click(function(){
      $("#testcontainer").show($("#effect1").val(),{},1000);
   });

});