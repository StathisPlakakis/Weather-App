import { weather } from '../weather/data';
import {
  createServerErrorMessage,
  createNetworkErrorMessage,
  clearErrorMessage,
} from './errorMessage';

function searchWeatherFor(city) {
  weather(city)
    .then((result) => {
      clearErrorMessage()
      console.log(result);
    })
    .catch((error) => {
      if (error.name === 'TypeError') {
        createNetworkErrorMessage();
      } else {
        createServerErrorMessage();
      }
    });
}

export default searchWeatherFor;
