function renderAllData(result) {
  const degreeRepr = document.querySelector('.selected').textContent;

  const condition = document.querySelector('.condition');
  condition.textContent = result.condition;

  const city_country = document.querySelector('.city-country');
  city_country.textContent = `${result.city}, ${result.country}`;

  const dateTime = document.querySelector('.date');
  dateTime.textContent = result.time;

  const temperature = document.querySelector('.temperature');
  temperature.textContent =
    degreeRepr === 'C' ? result.temperatureC : result.temperatureF;
}

export default renderAllData;
