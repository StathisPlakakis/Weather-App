import { weather } from '../weather/data';
import {
  createServerErrorMessage,
  createNetworkErrorMessage,
  clearErrorMessage,
} from './errorMessage';
import renderAllData from './renderWeatherData';
import { setState } from './state';
import loadingGif from '../assets/Data/loading.gif';

async function searchWeatherFor(city) {
  try {
    const loading = document.createElement('img');
    loading.src = `${loadingGif}`;
    loading.classList.add('loading');
    document.body.appendChild(loading);
    const weatherData = await weather(city);
    document.body.removeChild(loading);
    clearErrorMessage();
    renderAllData(weatherData);
    setState(weatherData);
  } catch (error) {
    const loading = document.querySelector('.loading');
    document.body.removeChild(loading);
    if (error.name === 'TypeError') {
      createNetworkErrorMessage();
    } else {
      createServerErrorMessage();
    }
  }
}

export default searchWeatherFor;
