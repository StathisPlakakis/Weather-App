function renderAllData(result) {
  const condition = document.querySelector('.condition');
  condition.textContent = result.condition;

  const city_country = document.querySelector('.city-country');
  city_country.textContent = `${result.city}, ${result.country}`;

  const dateTime = document.querySelector('.date');
  dateTime.textContent = result.time;
}

export default renderAllData;
