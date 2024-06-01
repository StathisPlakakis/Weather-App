import './style.css';
import searchWeatherFor from './DOMFunctions/searchEvent';

const input = document.querySelector('input');
const search = document.querySelector('.search-action');

search.addEventListener('click', () => {
  searchWeatherFor(input.value);
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchWeatherFor(input.value);
  }
});
