const keys = document.querySelectorAll('.piano-key');
const switchBtn = document.querySelectorAll('.btn');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

keys.forEach(key => key.addEventListener('click',playClick ));

window.addEventListener('keydown', playNoteKey);

switchBtn.forEach(el => el.addEventListener('click', switchMode))

// Keyboard action
function playNoteKey(e) {
    const eventKey = e.code.slice(-1); // make push keys actual to all languages and case of letters
    const key = document.querySelector(`.piano-key[data-letter="${eventKey}"]`);
    const audio = document.querySelector(`audio[data-letter="${eventKey}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    // Check for key holding
    key.classList.add('piano-key-active');
    if (e.repeat) audio.currentTime = 1 ;
}

// Mouse action
function playClick(e) {
  const selector = e.target.dataset.letter;
  const target = e.target;
  const audio = document.querySelector(`audio[data-letter="${selector}"]`);
  audio.currentTime = 0;
  audio.play();
  target.classList.add('piano-key-active');
}

// Switcher for Letter and Notes btn
function switchMode(e) {
  const btnNotes = document.querySelector('.btn-notes');
  const btnLetters = document.querySelector('.btn-letters');

  if (e.target.className.includes('btn-notes')) {
    btnNotes.classList.add('btn-active');
    btnLetters.classList.remove('btn-active');
    keys.forEach(key => {
      key.classList.add('notes');
      key.classList.remove('letter');
    })
  }
    if (e.target.className.includes('btn-letters')) {
    btnLetters.classList.add('btn-active');
    btnNotes.classList.remove('btn-active');
    keys.forEach(key => {
      key.classList.add('letter');
      key.classList.remove('notes');
    })

  }
}

// Remove transition from keys
function removeTransition(e) {
  if(e.propertyName !== 'transform') {
    return ;
  }
  this.classList.remove('piano-key-active');
}
