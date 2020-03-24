'use strict';
// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontControl = document.querySelector('#font-size-control');
const textTitle = document.querySelector('#text');
textTitle.style.fontSize = '16px';

const valueFontSize = () => {
  const fontSize = 16;
  const textZoom = (fontControl.value / 100) * 2;
  textTitle.style.fontSize = `${fontSize * textZoom}px`;
};

fontControl.addEventListener('input', valueFontSize);
