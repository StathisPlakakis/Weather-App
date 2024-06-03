import { getState } from './state';
import renderAllData from './renderWeatherData';

function changeBackgroundColor(e) {
  const element = e.target;
  const buttons = document.querySelectorAll('.c-f button');
  buttons.forEach((button) => {
    if (button.classList.contains('selected')) {
      button.classList.remove('selected');
    }
  });
  element.classList.add('selected');
  const result = getState();
  if (result) {
    renderAllData(result);
  }
}

export default changeBackgroundColor;
