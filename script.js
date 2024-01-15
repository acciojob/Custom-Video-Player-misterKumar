const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

toggle.addEventListener('click', ()=>{
	if(toggle.innerText =='❚ ❚'){
        toggle.innerText = "►"
        video.pause()
    }
    else {
        toggle.innerText = "❚ ❚"
        video.play()
    }
})

video.addEventListener('timeupdate', () => {
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
  });
progress.addEventListener('click', e=>{
    video.currentTime = e.clientX/e.target.clientWidth*video.duration
})

ranges[0].addEventListener('input',e=>{
    video.volume = e.target.value
})
ranges[1].addEventListener('input',e=>{
    video.playbackRate  = e.target.value
})

skipButtons[0].addEventListener('click',e=>{
    video.currentTime = video.currentTime-10
})
skipButtons[0].addEventListener('click',e=>{
    video.currentTime = video.currentTime+25
})