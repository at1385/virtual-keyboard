import virtualKeyboardContainer from './container-markup.js';

const virtualKeyboardDisplay = document.createElement('textarea');
virtualKeyboardDisplay.className = 'virtual-keyboard__display';
virtualKeyboardDisplay.setAttribute('autofocus', 'autofocus');
virtualKeyboardContainer.append(virtualKeyboardDisplay);
