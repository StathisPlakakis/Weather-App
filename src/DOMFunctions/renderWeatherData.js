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
}

export default renderAllData;
