import { weather } from '../weather/data';
import {
  createServerErrorMessage,
  createNetworkErrorMessage,
  clearErrorMessage,
} from './errorMessage';
import renderAllData from './renderWeatherData';
import { setState } from './state';

function searchWeatherFor(city) {
  weather(city)
    .then((result) => {
      clearErrorMessage();
      renderAllData(result);
      setState(result);
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
