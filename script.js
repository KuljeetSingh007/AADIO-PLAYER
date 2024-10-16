const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekSlider = document.getElementById('seekSlider');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const cd = document.getElementById('cd'); // CD element

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️'; // Change to pause icon
    cd.style.animationPlayState = 'running'; // Start rotating the CD
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️'; // Change to play icon
    cd.style.animationPlayState = 'paused'; // Stop rotating the CD
  }
});

// Update time and seek slider
audio.addEventListener('timeupdate', () => {
  seekSlider.value = (audio.currentTime / audio.duration) * 100;

  // Format and display current time and duration
  currentTimeSpan.textContent = formatTime(audio.currentTime);
  durationSpan.textContent = formatTime(audio.duration);
});

// Seek slider functionality
seekSlider.addEventListener('input', () => {
  audio.currentTime = (seekSlider.value / 100) * audio.duration;
});

// Format time helper function
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}
