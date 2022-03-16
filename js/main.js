isActive = false;
function playAudio(){
	document.getElementsByTagName("audio")[0].loop = true;
	var audio = document.getElementsByTagName("audio")[0];
	audio.currentTime = 0;
	if(!isActive){
		isActive = true;
		audio.play();
	}
	else{
		isActive = false;
		audio.pause();
	}
}
function resetAudio(){
	var audio = document.getElementsByTagName("audio")[0];
	audio.currentTime = 0;
}