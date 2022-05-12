import virtualKeyboardContainer from './container-markup.js';
import keyboard from './data.js';

const virtualKeyboardKeysContainer = document.createElement('div');
virtualKeyboardKeysContainer.className = 'virtual-keyboard__keys';
virtualKeyboardContainer.append(virtualKeyboardKeysContainer);

const createVirtualKeyboardKey = (key, layout, isHidden) => {
  const virtualKeyboardKey = document.createElement('button');

  switch (key) {
    case 'Backspace':
    case 'Enter':
    case 'Shift<span class="visually-hidden">Left</span>':
      virtualKeyboardKey.className = `virtual-keyboard__key virtual-keyboard__key--four-columns ${layout}`;
      break;
    case 'Caps Lock':
      virtualKeyboardKey.className = `virtual-keyboard__key virtual-keyboard__key--four-columns virtual-keyboard__key--off ${layout}`;
      break;
    case 'Tab':
    case 'Delete':
    case 'C<span class="visually-hidden">on</span>tr<span class="visually-hidden">o</span>l<span class="visually-hidden">Left</span>':
    case 'C<span class="visually-hidden">on</span>tr<span class="visually-hidden">o</span>l<span class="visually-hidden">Right</span>':
      virtualKeyboardKey.className = `virtual-keyboard__key virtual-keyboard__key--three-columns ${layout}`;
      break;
    case ' ':
      virtualKeyboardKey.className = `virtual-keyboard__key virtual-keyboard__key--twelve-columns ${layout}`;
      break;
    default:
      virtualKeyboardKey.className = `virtual-keyboard__key virtual-keyboard__key--two-column ${layout}`;
  }

  virtualKeyboardKey.setAttribute('type', 'button');
  if (isHidden) virtualKeyboardKey.classList.add('hidden');
  virtualKeyboardKey.innerHTML = `${key}`;

  return virtualKeyboardKey;
};

const renderVirtualKeyboardKeys = (keyData, layout, isHidden = false) => {
  const fragment = document.createDocumentFragment();

  Object.values(keyData).forEach((key) => {
    fragment.append(createVirtualKeyboardKey(key, layout, isHidden));
  });

  virtualKeyboardKeysContainer.append(fragment);
};

renderVirtualKeyboardKeys(keyboard.en.default, 'en');
renderVirtualKeyboardKeys(keyboard.ru.default, 'ru', true);

export default virtualKeyboardContainer;
