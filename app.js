

var countdownMax=30;
var countdownCurrent=0;
var countdown=false;
var countdownInterval;
var countdownEnd = -1;

$(function(){

$('#begin').click(function(){
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
    var randomLight = Math.floor(Math.random() * 59 + 1);
    console.log('works');

  });

  $('.begin').click(function(){
    console.log('works');
  });

  $('.stop').click(function(){
    console.log('works');
  });

}); // closing
