

var countdownMax=30;
var countdownCurrent=0;
var countdown=false;
var countdownInterval;
var countdownEnd = -1;
var randomLight = Math.floor(Math.random() * 30);
var score= 0;
var defaultScore = 0
var $container = $('#container');
var $title = $('#title');
// var player1= 1;
// var player2= 2;
// var player1Points;
// var player2Points;
// var player1round1;
// var player1round2;
// var player1round3;
// var player2round1;
// var player2round2;
// var player2round3;
// var player1Wins;
// var player2Wins;
// var playerMove = 0;

$(function(){
// $( document ).click(function() {
//   $( "#toggle" ).effect( "shake" );
// });


$(".squares").mouseover(function(){
// console.log("Over");
$(this).css('border-radius', '50%');

});

$(".squares").mouseleave(function(){
// console.log("Over");
$(this).css('border-radius', '0%');

});


$.fn.animateRotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };

        $({deg: 0}).animate({deg: angle}, args);
    });
};

$(function(){
    $(".dotStyle").click(function(){
        $container.animateRotate(90, 5000, "linear", function(){
            console.log(this);
        });
    });
    });

    $(function(){
        $("#begin").click(function(){
            $container.animateRotate(90, 8000, "linear", function(){
                console.log(this);
            });
        });
        });


function playAudioButton(){
var audio1= new Audio('Menu-ChangeAmount.mp3');
audio1.play();}



// before game //



$('#begin').click(function(){                          // starts game
playAudioStart();
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
alert('Game Over. Your score is' + score+2);
}

}, 1000);

});
var checkDot = null;

$('.dotStyle').click(function(){
  $container.effect("shake");
  console.log(checkDot);
  if(checkDot == this){score++;}
  else{score--;}
  playAudioButton();


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

document.getElementById('reset').onclick= function() {
var field= document.getElementById('countdownHolder');
var field2= document.getElementById('score');
field.value = countdownMax;
field2.value = defaultScore;
};

var $title = $('#title');
$title.fadeIn(5000).delay(3000).fadeOut(30000).fadeIn(1000);

$('#container').fadeIn(5000).delay(2000).fadeOut(80000).fadeIn(10000).css('color','grey');

});
// closing
