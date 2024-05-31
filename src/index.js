import './style.css';
import { weather } from './weather/data';

weather('greece')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
