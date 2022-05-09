import virtualKeyboardContainer from './container-markup.js';
import virtualKeyboardDisplay from './display-markup.js';

const display = virtualKeyboardDisplay;

virtualKeyboardContainer.addEventListener('click', (evt) => {
  if (evt.target.textContent.length === 1) virtualKeyboardDisplay.value += evt.target.textContent;

  if (evt.target.textContent === 'Tab') {
    const cursor = display.selectionStart;

    const firstSlicedValue = display.value.slice(0, display.selectionStart);
    const secondSlicedValue = display.value.slice(display.selectionStart);

    display.value = `${firstSlicedValue}    ${secondSlicedValue}`;
    display.selectionStart = cursor + 4;
    display.selectionEnd = cursor + 4;
  }

  if (evt.target.textContent === 'Backspace') {
    const cursor = display.selectionStart;

    if (cursor) {
      const firstSlicedValue = display.value.slice(0, display.selectionStart - 1);
      const secondSlicedValue = display.value.slice(display.selectionStart);

      display.value = firstSlicedValue + secondSlicedValue;

      if (display.selectionStart && display.selectionEnd) {
        display.selectionStart = cursor - 1;
        display.selectionEnd = cursor - 1;
      }
    }
  }

  if (evt.target.textContent === 'Enter') {
    const cursor = display.selectionStart;

    const firstSlicedValue = display.value.slice(0, display.selectionStart);
    const secondSlicedValue = display.value.slice(display.selectionStart);

    display.value = `${firstSlicedValue}\n${secondSlicedValue}`;
    display.selectionStart = display.value.indexOf('\n', cursor) + 1;
    display.selectionEnd = display.value.indexOf('\n', cursor) + 1;
  }

  if (evt.target.textContent === 'Delete') {
    const cursor = display.selectionStart;

    const firstSlicedValue = display.value.slice(0, display.selectionStart);
    const secondSlicedValue = display.value.slice(display.selectionStart + 1);

    display.value = firstSlicedValue + secondSlicedValue;

    display.selectionStart = cursor;
    display.selectionEnd = cursor;
  }
});
