import virtualKeyboardContainer from './container-markup.js';
import keyboard from './data.js';
import virtualKeyboardKeys from './real-keyboard-push.js';

virtualKeyboardContainer.addEventListener('keydown', (evt) => {
  if (evt.key === 'CapsLock' && keyboard.capslock === 'off') {
    Object.values(keyboard.en.capslock).forEach((value, i) => {
      virtualKeyboardKeys[i].innerHTML = value;
    });

    keyboard.capslock = 'on';
  } else if (evt.key === 'CapsLock') {
    Object.values(keyboard.en.default).forEach((value, i) => {
      virtualKeyboardKeys[i].innerHTML = value;
    });

    keyboard.capslock = 'off';
  }
});
