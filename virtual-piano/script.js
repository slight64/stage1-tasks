function playNoteKey(e) {
    const audio = document.querySelector(`audio[data-letter="${e.key}"]`);
    const key = document.querySelector(`.piano-key[data-letter="${e.key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('piano-key-active');
}
function playClick(e) {
  const selector = e.target.dataset.letter;
  const target = e.target;
  const audio = document.querySelector(`audio[data-letter="${selector}"]`);
  audio.currentTime = 0;
  audio.play();
  target.classList.add('piano-key-active');
}
function removeTransition(e) {
  if(e.propertyName !== 'transform') {
    return ;
  }
  this.classList.remove('piano-key-active');
}

const keys = document.querySelectorAll('.piano-key');
const switchBtn = document.querySelectorAll('.btn');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

keys.forEach(key => key.addEventListener('click',playClick ));

window.addEventListener('keydown', playNoteKey);

switchBtn.forEach(el => el.addEventListener('click', switchMode))

function switchMode(e) {
  const btnNotes = document.querySelector('.btn-notes');
  const btnLetters = document.querySelector('.btn-letters');
  if (e.target.className.includes('btn-notes')) {
    btnNotes.classList.add('btn-active')
    btnLetters.classList.remove('btn-active')
  }
  if (e.target.className.includes('btn-letters')) {
    btnLetters.classList.add('btn-active')
    btnNotes.classList.remove('btn-active')
  }
}



