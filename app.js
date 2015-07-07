

var countdownMax=30;
var countdownCurrent=0;
var countdown=false;
var countdownInterval;
var countdownEnd = -1;
var randomLight = Math.floor(Math.random() * 60);
var score=0;

$(function(){

$('#begin').click(function(){

  randomLight = Math.floor(Math.random() * 60);
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

  $('.dots').click(function(){
    if($(this).is(":focus")){score++;}
    console.log(score);
  $('#score')[0].value = score;
    var randomLight2 = Math.floor(Math.random() * 60);
    console.log(randomLight2);
    $('.dots')[randomLight2].focus(function(){
      alert( "Handler for .focus() called." );
    });
    console.log($('.dots')[randomLight2]);
  });

  $('.begin').click(function(){
    var randomLight = Math.floor(Math.random() * 60);
    console.log(randomLight);
    $('.dots')[randomLight].focus(function(){
    alert ("Handler for .focus() called.");
    });
    console.log('works');
  });

  $('.stop').click(function(){
    console.log('works');
  });

}); // closing
