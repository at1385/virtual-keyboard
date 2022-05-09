import virtualKeyboardContainer from './container-markup.js';
import keyboard from './data.js';
import virtualKeyboardKeys from './real-keyboard-push.js';

const turnOnCapsLock = () => {
  Object.values(keyboard.en.capslock).forEach((value, i) => {
    virtualKeyboardKeys[i].innerHTML = value;
  });

  keyboard.capslock = 'on';
};

const turnOffCapsLock = () => {
  Object.values(keyboard.en.default).forEach((value, i) => {
    virtualKeyboardKeys[i].innerHTML = value;
  });

  keyboard.capslock = 'off';
};

const onCapsLockPress = (evt) => {
  if (evt.key === 'CapsLock' && keyboard.capslock === 'off') {
    turnOnCapsLock();
  } else if (evt.key === 'CapsLock') {
    turnOffCapsLock();
  }
};

const onCapsLockClick = (evt) => {
  if (evt.target.textContent === 'Caps Lock' && keyboard.capslock === 'off') {
    turnOnCapsLock();
  } else if (evt.target.textContent === 'Caps Lock') {
    turnOffCapsLock();
  }
};

virtualKeyboardContainer.addEventListener('keydown', onCapsLockPress);
virtualKeyboardContainer.addEventListener('click', onCapsLockClick);
