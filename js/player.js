const play_btn = document.querySelector('#play-btn');
let sound = new Audio();

sound.src = '../../../mp3/night_street.mp3';

play_btn.addEventListener('mouseover', play );
play_btn.addEventListener('mouseout', pause);

function play(){
	sound.play();
}
function pause(){
	sound.pause();
}