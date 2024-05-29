async function weatherCurrent(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=cd485184bc0d44e5b67172805242305&q=${city}`,
      {
        mode: 'cors',
      }
    );
    if (response.ok) {
      const data = await response.json();
      const temperatureC = data.current.temp_c;
      const temperatureF = data.current.temp_f;
      const feelsLikeC = data.current.feelslike_c;
      const feelsLikeF = data.current.feelslike_f;
      const windSpeedC = data.current.wind_kph;
      const windSpeedF = data.current.wind_mph;
      const humidity = data.current.humidity;
      const condition = data.current.condition.text;
      const city = data.location.name;
      const country = data.location.country;
      const specificData = {
        temperatureC,
        temperatureF,
        windSpeedC,
        windSpeedF,
        feelsLikeC,
        feelsLikeF,
        humidity,
        condition,
        city,
        country,
      };
      console.log(specificData);
      return specificData;
    } else {
      throw new Error(`A ${response.status}, error was thrown!`);
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

async function weatherForcast(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1	/forecast.json?key=cd485184bc0d44e5b67172805242305&q=${city}`,
      {
        mode: 'cors',
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error(`Hey my friend, you have a ${response.status} error!`);
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export  {weatherCurrent, weatherForcast};
