

var countdownMax=30;
var countdownCurrent=0;
var countdown=false;
var countdownInterval;
var countdownEnd = -1;
var randomLight = Math.floor(Math.random() * 60);
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
var playerMove = 0


$(function(){

$('#begin').click(function(){                          // starts game

  if (counter % 2===0 ){
  	$(this).text('o');
  }
  else {
  	$(this).text('x');
  }


  randomLight = Math.floor(Math.random() * 60);       //
  console.log(randomLight);
  $('.dots')[randomLight].focus(function(){
    alert( "Handler for .focus() called." );
  });
  console.log($('.dots')[randomLight]);

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

  $('.dots').click(function(){
    console.log(checkDot);
    if(checkDot == this){score++;}
    else{score--;}

    console.log(score);
  $('#score')[0].value = score;
    var randomLight2 = Math.floor(Math.random() * 60);
    console.log(randomLight2);
    checkDot = $('.dots')[randomLight2];
    $('.dots')[randomLight2].focus(function(){
      alert( "Handler for .focus() called." );
    });
    console.log($('.dots')[randomLight2]);
  });

  $('.stop').click(function(){
    console.log('works');
    alert('paused');
  });

}); // closing
