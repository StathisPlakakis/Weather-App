function renderAllData(result) {
  const condition = document.querySelector('.condition');
  condition.textContent = result.condition;

  const city = result.city;
  const country = result.country;
  const city_country = document.querySelector('.city-country');
  city_country.textContent = `${city}, ${country}`
}

export default renderAllData;
