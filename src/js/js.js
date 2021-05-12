var counter = 1;
$(document).ready(function() {
  animation1();
});

function animation1() {
  var tl = new TimelineMax();
  
  if(counter===1){
    $(".title1").text($("#output1").text());
    $(".title1").lettering();
  }
  else if(counter===2){

    $(".title1").text($("#output2").text());
    $(".title1").lettering();
  }
  else if(counter===3){
    $(".title1").text($("#output3").text());
    $(".title1").lettering();
  }
  else if(counter===4){
    $(".title1").text($("#output1").text());
    $(".title1").lettering();
    counter=1;
  }

  CustomEase.create("custom", "M0,0 C0,0 0.259,1 0.514,1 0.753,1 0.85,0 1,0");
  CustomEase.create("custom2", "M0,0,C0,0,0.39,-0.54,0.604,-0.254,0.868,0.152,1,1,1,1");
 

//下からイーズイン
  tl.staggerFromTo(".title1 span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.1);

  //数回バウンスさせたあと左に流す
  tl.staggerTo(".title1 span", 0.5, {ease:"custom", opacity: 1, bottom: 10, repeat: 2, repeatDelay: 5},0.07);
  tl.staggerTo(".title1 span", 0.9,{ease:"custom2",opacity:0, right:30,},0.1);
  tl.staggerTo(".title1 span", 0.2,{ease:"custom2",opacity:0,

  onComplete: function(){
    counter ++;
    TweenMax.killAll();
    TweenMax.delayedCall(1,animation1);
  }
},0.01);
}