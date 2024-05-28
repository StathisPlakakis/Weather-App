import './style.css';

async function weather(city) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=cd485184bc0d44e5b67172805242305&q=${city}`
  );
  const data = await response.json();
  console.log(data);
}

weather('london');

