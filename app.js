

var countdownMax=30;
var countdownCurrent=0;
var countdown=false;
var countdownInterval;
var countdownEnd = -1;
var randomLight = Math.floor(Math.random() * 30);
var score= 0;
var player1= 1;
var player2= 2;
var player1Points;
var player2Points;
var player1round1;
var player1round2;
var player1round3;
var player2round1;
var player2round2;
var player2round3;
var player1Wins;
var player2Wins;
var playerMove = 0;


$(function(){
  // $( document ).click(function() {
  //   $( "#toggle" ).effect( "shake" );
  // });

  $(".dotStyle").click(function(){
      console.log("shake works");
      $('#container').effect( "shake" );
    });


  $(".squares").mouseover(function(){
      console.log("Over");
      $(this).css('border-radius', '50%');

  });

  $(".squares").mouseleave(function(){
      console.log("Over");
      $(this).css('border-radius', '0%');

  });

  $(".dotStyle").hover(function(){
      console.log("dots mouse over");
      //$(this).css("background-color", "black");

  });

  $('#audioSlider').slider({
    orientation: "vertical",
    value: audio1.volume,
    min: 0,
    max: 1,
    range: 'min',
    animate: true,
    step: 0.1,
    slide: function(e, ui) {
        audio1.volume = ui.value;
    }
});




$('#begin').click(function(){                          // starts game

  randomLight = Math.floor(Math.random() * 30);       //
  console.log(randomLight);
  $('.dotStyle')[randomLight].focus(function(){
    alert( "Handler for .focus() called." );
  });
  console.log($('.dotStyle')[randomLight]);

    countdownCurrent = countdownMax;
    console.log(countdownCurrent+" / "+countdownMax);
    countdownInterval = setInterval(function(){
      $('#countdownHolder')[0].value = countdownCurrent--;
      if(countdownCurrent === countdownEnd){
        clearTimeout(countdownInterval);
        alert('game over!');
      }

      }, 1000);

});
  var checkDot = null;

  $('.dotStyle').click(function(){
    console.log(checkDot);
    if(checkDot == this){score++;}
    else{score--;}

    console.log(score);
  $('#score')[0].value = score+2;
  $('#player1Points')[0].value = score+2;
    var randomLight2 = Math.floor(Math.random() * 30);
    console.log(randomLight2);
    checkDot = $('.dotStyle')[randomLight2];
    $('.dotStyle')[randomLight2].focus(function(){
      alert( "Handler for .focus() called." );
    });
    console.log($('.dotStyle')[randomLight2]);
  });

  $('.stop').click(function(){
    console.log('works');
    alert('paused');
  });

}); // closing
