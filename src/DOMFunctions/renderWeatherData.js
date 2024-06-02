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

}

export default renderAllData;