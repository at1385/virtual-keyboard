import virtualKeyboardContainer from './container-markup.js';
import keys from './data.js';

const virtualKeyboardKeysContainer = document.createElement('div');
virtualKeyboardKeysContainer.className = 'virtual-keyboard__keys';
virtualKeyboardContainer.append(virtualKeyboardKeysContainer);

const createVirtualKeyboardKey = (key) => {
  const virtualKeyboardKey = document.createElement('button');

  switch (key) {
    case 'Backspace':
    case 'Caps Lock':
    case 'Enter':
    case '<span class="visually-hidden">Left </span>Shift':
      virtualKeyboardKey.className = 'virtual-keyboard__key virtual-keyboard__key--four-columns';
      break;
    case 'Tab':
    case 'Del':
    case '<span class="visually-hidden">Left </span>Ctrl':
    case '<span class="visually-hidden">Right </span>Ctrl':
      virtualKeyboardKey.className = 'virtual-keyboard__key virtual-keyboard__key--three-columns';
      break;
    case ' ':
      virtualKeyboardKey.className = 'virtual-keyboard__key virtual-keyboard__key--twelve-columns';
      break;
    default:
      virtualKeyboardKey.className = 'virtual-keyboard__key virtual-keyboard__key--two-column';
  }

  virtualKeyboardKey.setAttribute('type', 'button');
  virtualKeyboardKey.innerHTML = `${key}`;

  return virtualKeyboardKey;
};

const renderVirtualKeyboardKeys = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < keys.length; i += 1) {
    fragment.append(createVirtualKeyboardKey(keys[i]));
  }

  virtualKeyboardKeysContainer.append(fragment);
};

renderVirtualKeyboardKeys();
