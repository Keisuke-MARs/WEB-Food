$(function () {
  var navPos = $("header").offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() > navPos) {
      $("header").css("position", "fixed");
    } else {
      $("header").css("position", "static");
    }
  });

  $("a").click(function () {
    var target = $($(this).attr("href")).offset().top;
    target -=154;
    if($("main").offset().top == 154){
      target -=154;
    }
    $("html,body").animate({ scrollTop: target },300);
    return false;
  });

  var dir = -1;
  var interval = 4500;
  var duration = 700;
  var timer;
  $("#slide ul").prepend($("#slide li:last-child"));
  $("#slide ul").css("left",-500);
  timer = setInterval(slideTimer,interval);
  function slideTimer(){
    if(dir == -1){
      $("#slide ul").animate({"left":"-=500px"},duration,
      function(){
        $(this).append($("#slide li:first-child"));
        $(this).css("left",-500);
      });
    }else{
      $("#slide ul").animate({"left":"+=500px"},
      duration,function(){
        $(this).prepend($("#slide li:last-child"));
        $(this).css("left",-500);
        dir = -1;
      });
    }
  }
  $("#prevBtn").click(function(){
    dir = 1;
    clearInterval(timer);
    timer = setInterval(slideTimer,interval);
    slideTimer();
  });
  $("#nextBtn").click(function(){
    dir = -1;
    clearInterval(timer);
    timer = setInterval(slideTimer,interval);
    slideTimer();
  });

});