/*var audio = $("#easterEggSong")[0];
$("easterEgg img").mouseenter(function() {
    audio.play();
  });*/

  $("#easterEggSong").mouseenter(function(){
	$("<audio></audio>").attr({ 
		'src':'audio/'+Math.ceil(Math.random() * 5)+'.mp3', 
		'volume':1,
		'autoplay':'autoplay'
	}).appendTo("body");
});