// Mapping keys to authentic Octapad-style sounds
const soundMap = {
  // Row 1: Traditional & Indian Percussion
  a: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  s: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', // Kick & Open Hi-Hat
  d: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', // Open Hi-Hat
  f: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', // Closed Hi-Hat

  // Row 2: Electronic & Bass Hits
  g: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', // Hard Kick
  h: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', // 808 Bass Kick
  j: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', // Clap/Snare
  k: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', // Rimshot/Stick
};

function playSound(key) {
  const soundUrl = soundMap[key];
  if (!soundUrl) return;

  const audio = new Audio(soundUrl);
  audio.currentTime = 0;
  audio.play();

  const pad = document.querySelector(`.pad[data-key="${key}"`);
  pad.classList.add('playing');
  setTimeout(() => {
    pad.classList.remove('playing');
  }, 100);
}

document.querySelectorAll('.pad').forEach((pad) => {
  pad.addEventListener('click', () => {
    const key = pad.getAttribute('data-key');
    playSound(key.toLowerCase());
  });
});

window.addEventListener('keydown', (evt) => {
  const key = evt.key;
  console.log(key);
  playSound(key.toLowerCase());
});
