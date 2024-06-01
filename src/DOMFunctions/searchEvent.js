import { weather } from '../weather/data';

function searchWeatherFor(city) {
  weather(city)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default searchWeatherFor;
