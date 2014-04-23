window.addEventListener('load', init, false);

function init() {
  try {
    var context = new webkitAudioContext();
    var oscillator = context.createOscillator();
    oscillator.type = 0;
    oscillator.frequency.value = 2000;
    oscillator.connect(context.destination);
    oscillator.noteOn(5000);
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}
