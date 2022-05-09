import virtualKeyboardContainer from './container-markup.js';
import virtualKeyboardDisplay from './display-markup.js';
import keyboard from './data.js';

const virtualKeyboardKeys = document.querySelectorAll('.virtual-keyboard__key');

const addActiveKeyStyleClasses = (activeKey) => {
  for (let i = 0; i < virtualKeyboardKeys.length; i += 1) {
    if (virtualKeyboardKeys[i].textContent === activeKey) {
      virtualKeyboardKeys[i].classList.add('virtual-keyboard__key--active', 'virtual-keyboard__key--focus');
      break;
    }
  }
};

const removeActiveKeyStyleClasses = (activeKey) => {
  for (let i = 0; i < virtualKeyboardKeys.length; i += 1) {
    if (virtualKeyboardKeys[i].textContent === activeKey) {
      virtualKeyboardKeys[i].classList.remove('virtual-keyboard__key--active', 'virtual-keyboard__key--focus');
      break;
    }
  }
};

virtualKeyboardContainer.addEventListener('keydown', (evt) => {
  if (evt.code.startsWith('Shift') || evt.code.startsWith('Control') || evt.code.startsWith('Alt')) {
    addActiveKeyStyleClasses(evt.code);
  } else if (evt.key.length > 1) {
    addActiveKeyStyleClasses(keyboard.en.default[evt.key]);
  } else if (keyboard.layout === 'en') {
    if (evt.key.length <= 1) evt.preventDefault();

    let pressedKey;

    if (keyboard.shift === 'on') {
      if (evt.key !== '.') {
        pressedKey = (+evt.key || evt.key === '0') ? `0${evt.key}` : keyboard.en.alternative[evt.key];
      }

      if (!pressedKey) pressedKey = keyboard.map.ruEnAlternative[evt.key];

      addActiveKeyStyleClasses(keyboard.en.alternative[pressedKey]);
      if (!pressedKey.length <= 1) {
        virtualKeyboardDisplay.value += keyboard.en.alternative[pressedKey];
      }
    } else if (keyboard.capslock === 'off') {
      if (evt.key !== '.') {
        pressedKey = (+evt.key || evt.key === '0') ? `0${evt.key}` : keyboard.en.default[evt.key];
      }

      if (!pressedKey) pressedKey = keyboard.map.ruEnDefault[evt.key];

      addActiveKeyStyleClasses(keyboard.en.default[pressedKey]);
      if (!pressedKey.length <= 1) virtualKeyboardDisplay.value += keyboard.en.default[pressedKey];
    } else {
      if (evt.key !== '.') {
        pressedKey = (+evt.key || evt.key === '0') ? `0${evt.key}` : keyboard.en.capslock[evt.key];
      }

      if (!pressedKey) pressedKey = keyboard.map.ruEnCapslock[evt.key];

      addActiveKeyStyleClasses(keyboard.en.capslock[pressedKey]);
      if (!pressedKey.length <= 1) virtualKeyboardDisplay.value += keyboard.en.capslock[pressedKey];
    }
  }
});

virtualKeyboardContainer.addEventListener('keyup', (evt) => {
  if (evt.code.startsWith('Shift') || evt.code.startsWith('Control') || evt.code.startsWith('Alt')) {
    removeActiveKeyStyleClasses(evt.code);
  } else if (evt.key.length > 1) {
    removeActiveKeyStyleClasses(keyboard.en.default[evt.key]);
  } else if (keyboard.layout === 'en') {
    let unpressedKey;

    if (keyboard.shift === 'on') {
      if (evt.key !== '.') {
        unpressedKey = (+evt.key || evt.key === '0') ? `0${evt.key}` : keyboard.en.alternative[evt.key];
      }

      if (!unpressedKey) unpressedKey = keyboard.map.ruEnAlternative[evt.key];

      removeActiveKeyStyleClasses(keyboard.en.alternative[unpressedKey]);
    } else if (keyboard.capslock === 'off') {
      if (evt.key !== '.') {
        unpressedKey = (+evt.key || evt.key === '0') ? `0${evt.key}` : keyboard.en.default[evt.key];
      }
      if (!unpressedKey) unpressedKey = keyboard.map.ruEnDefault[evt.key];

      removeActiveKeyStyleClasses(keyboard.en.default[unpressedKey]);
    } else {
      if (evt.key !== '.') {
        unpressedKey = (+evt.key || evt.key === '0') ? `0${evt.key}` : keyboard.en.capslock[evt.key];
      }
      if (!unpressedKey) unpressedKey = keyboard.map.ruEnCapslock[evt.key];

      removeActiveKeyStyleClasses(keyboard.en.capslock[unpressedKey]);
    }
  }
});

export default virtualKeyboardKeys;
