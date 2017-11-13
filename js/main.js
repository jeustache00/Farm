$(document).ready(function(){

    $('#cow').click(function() {
   // var placeWidth = document.body.clientWidth
   var randPosX = Math.floor((Math.random()*1200));
   var randPosY = Math.floor((Math.random()*600));
   var audio = $("#moo")[0];
   console.log(randPosY)
   $('#cow').css('left', randPosX);
   $('#cow').css('top', randPosY);
   audio.play();
   });

   $('#goat').click(function() {
  // var placeWidth = document.body.clientWidth
  var randPosX = Math.floor((Math.random()*1200));
  var randPosY = Math.floor((Math.random()*600));
  var audio = $("#bah")[0];
  console.log(randPosY)
  $('#goat').css('left', randPosX);
  $('#goat').css('top', randPosY);
  audio.play();
  });

    $('#donkey').click(function() {
   // var placeWidth = document.body.clientWidth
   var randPosX = Math.floor((Math.random()*1200));
   var randPosY = Math.floor((Math.random()*600));
   var audio = $("#na")[0];
   console.log(randPosY)
   $('#donkey').css('left', randPosX);
   $('#donkey').css('top', randPosY);
   audio.play();
   });

   $('#piglet').click(function() {
  // var placeWidth = document.body.clientWidth
  var randPosX = Math.floor((Math.random()*1200));
  var randPosY = Math.floor((Math.random()*600));
  var audio = $("#oink")[0];
  console.log(randPosY)
  $('#piglet').css('left', randPosX);
  $('#piglet').css('top', randPosY);
  audio.play();
  });

  $('#dog').click(function() {
  // var placeWidth = document.body.clientWidth
  var randPosX = Math.floor((Math.random()*1200));
  var randPosY = Math.floor((Math.random()*600));
  var audio = $("#bark")[0];
  console.log(randPosY)
  $('#dog').css('left', randPosX);
  $('#dog').css('top', randPosY);
  audio.play();
  });

});
