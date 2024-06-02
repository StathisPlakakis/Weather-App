import { getState } from './state';
import renderAllData from './renderWeatherData';

function changeBackgroundColor() {
  const buttons = document.querySelectorAll('.c-f button');
  buttons.forEach((button) => {
    button.classList.toggle('selected');
  });
  const result = getState();
  renderAllData(result);
}

export default changeBackgroundColor;
