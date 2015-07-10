

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
      // console.log("Over");
      $(this).css('border-radius', '50%');

  });

  $(".squares").mouseleave(function(){
      // console.log("Over");
      $(this).css('border-radius', '0%');

  });

  $(".dotStyle").hover(function(){
      // console.log("dots mouse over");
      //$(this).css("background-color", "black");

  });


  document.getElementById('reset').onclick = function() {
        var field= document.getElementById('countdownHolder');
        countdownHolder.value= countdownHolder.defaultValue;
};

document.getElementById('reset').onclick = function() {
      var field= document.getElementById('score');
      score.value= score.defaultValue;
};


var audiofx = $('#fx1')[0];
$(".dotStyle").click(function() {
  audio.play();
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
        $(title).html(score+2);

        alert('Player 2 Turn!');
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
    var randomLight2 = Math.floor(Math.random() * 30);
    console.log(randomLight2);
    checkDot = $('.dotStyle')[randomLight2];
    $('.dotStyle')[randomLight2].focus(function(){
      alert( "Handler for .focus() called." );
    });
    console.log($('.dotStyle')[randomLight2]);
  });

  var $title = $('#title');
     $title.fadeIn(5000).delay(3000).fadeOut(30000);
     var $container = $('#container');
        $container.fadeIn(5000).delay(2000).fadeOut(80000).css('color','black');
}); // closing
