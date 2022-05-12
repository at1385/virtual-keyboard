import virtualKeyboardContainer from './container-markup.js';
import keyboard from './data.js';
import virtualKeyboardKeys from './real-keyboard-push.js';

virtualKeyboardContainer.addEventListener('keydown', (evt) => {
  if (evt.code === 'ShiftLeft') {
    keyboard.shift = 'on';

    Object.values(keyboard.en.alternative).forEach((value, i) => {
      virtualKeyboardKeys[i].innerHTML = value;
    });
  }
});

virtualKeyboardContainer.addEventListener('keyup', (evt) => {
  if (evt.code === 'ShiftLeft') {
    Object.values(keyboard.en.default).forEach((value, i) => {
      virtualKeyboardKeys[i].innerHTML = value;
    });

    keyboard.shift = 'off';
  }
});
