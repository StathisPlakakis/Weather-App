import './style.css';
import { weather } from './weather/data';

// weather('athens')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const input = document.querySelector('input');
const search = document.querySelector('.search-action');

search.addEventListener('click', () => {
  weather(input.value)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    weather(input.value)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
