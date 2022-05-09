const virtualKeyboardContainer = document.createElement('article');
const virtualKeyboardHeader = document.createElement('header');
const virtualKeyboardHeading = document.createElement('h1');
const virtualKeyboardInfo = document.createElement('p');

virtualKeyboardContainer.className = 'virtual-keyboard container';
virtualKeyboardHeader.className = 'virtual-keyboard__header';
virtualKeyboardHeading.textContent = 'Virtual Keyboard For Windows';
virtualKeyboardInfo.innerHTML = '<b>Alt + Shift</b> | Switch to RU/EN keyboard layout';

virtualKeyboardHeader.append(virtualKeyboardHeading);
virtualKeyboardHeader.append(virtualKeyboardInfo);
virtualKeyboardContainer.append(virtualKeyboardHeader);
document.body.append(virtualKeyboardContainer);

export default virtualKeyboardContainer;
