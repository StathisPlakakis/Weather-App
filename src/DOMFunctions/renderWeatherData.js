import importAll from './importAllImages';

function renderAllData(result) {
  const degreeRepr = document.querySelector('.selected').textContent;

  const condition = document.querySelector('.condition > p');
  condition.textContent = result.condition;

  const city_country = document.querySelector('.city-country > p');
  city_country.textContent = `${result.city}, ${result.country}`;

  const dateTime = document.querySelector('.date > p');
  dateTime.textContent = result.time;

  const temperature = document.querySelector('.temperature > p');
  temperature.textContent =
    degreeRepr === 'C'
      ? `${Math.round(result.temperatureC)}°C`
      : `${Math.round(result.temperatureF)}°F`;

  //this block of code imports all images and set the correct img for current condition
  const imagesDay = importAll(
    require.context('../assets/64x64/day', false, /\.(png|jpe?g|svg)$/)
  );
  const imagesNight = importAll(
    require.context('../assets/64x64/night', false, /\.(png|jpe?g|svg)$/)
  );
  const mainData = document.querySelector('.main-data');
  const icon = result.icon;
  const path = icon.match(/weather\/(.+)/)[1];
  const isDay = path.includes('day');
  const correctImage = isDay
    ? path.match(/day\/(.+)/)[1]
    : path.match(/night\/(.+)/)[1];
  const imgElement = document.createElement('img');
  imgElement.classList.add('currentConditionImage');
  imgElement.src = isDay
    ? `${imagesDay[correctImage]}`
    : `${imagesNight[correctImage]}`;

  if (mainData.children.length > 1) {
    mainData.removeChild(mainData.lastChild);
  }
  mainData.appendChild(imgElement);
  //here the the block code stops

  const imagesData = importAll(
    require.context('../assets/Data', false, /\.(png|jpe?g|svg)$/)
  );

  const imgForFeel = document.querySelector('.imgForFeel');
  const imgForFeelElement = document.createElement('img');
  imgForFeelElement.src = `${imagesData['thermometer.png']}`;
  if (imgForFeel.children.length > 0) {
    imgForFeel.removeChild(imgForFeel.lastChild);
  }
  imgForFeel.appendChild(imgForFeelElement);

  const feel = document.querySelector('.feel > p');
  feel.textContent =
    degreeRepr === 'C'
      ? `Feels like : ${Math.round(result.feelsLikeC)} °C`
      : `Feels like : ${Math.round(result.feelsLikeF)} °F`;

  const imgForHumidity = document.querySelector('.imgForHumidity');
  const imgForHumidityElement = document.createElement('img');
  imgForHumidityElement.src = `${imagesData['humidity.png']}`;
  if (imgForHumidity.children.length > 0) {
    imgForHumidity.removeChild(imgForHumidity.lastChild);
  }
  imgForHumidity.appendChild(imgForHumidityElement);

  const humidity = document.querySelector('.humidity > p');
  humidity.textContent = `Humidity : ${result.humidity} %`;
}

export default renderAllData;
