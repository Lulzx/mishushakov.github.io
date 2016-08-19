$( "#input" ).click(function() {
 $("#search").css("background", "white");
  $("#input").addClass("dark");
  $("#searchi").css("color", "rgba(0,0,0,0.87)");
  $("#input").css("color", "rgba(0,0,0,0.87)");
});
$( "#input" ).blur(function() {
  $("#input").removeClass("dark");
 $("#search").css("background", "rgba(255,255,255,.15)");
   $("#searchi").css("color", "white");
  $("#input").css("color", "white");
  
});