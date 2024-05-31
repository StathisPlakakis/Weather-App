import './style.css';
import { weather } from './weather/data';

weather('athens')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
