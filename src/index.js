import './style.css';
import searchWeatherFor from './DOMFunctions/searchEvent';
import changeBackgroundColor from './DOMFunctions/degreeRepr';

const input = document.querySelector('input');
const search = document.querySelector('.search-action');
const cel = document.querySelector('.c');
const far = document.querySelector('.f');

search.addEventListener('click', () => {
  searchWeatherFor(input.value);
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchWeatherFor(input.value);
  }
});

cel.addEventListener('click', (e) => {
  changeBackgroundColor(e);
});

far.addEventListener('click', (e) => {
  changeBackgroundColor(e);
});
