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
      const icon = data.current.condition.icon;
      const city = data.location.name;
      const country = data.location.country;
      const time = data.location.localtime;

      const specificDataCurrent = {
        time,
        icon,
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
      return specificDataCurrent;
    } else {
      throw new Error(
        `A ${response.status}, error was thrown, in weatherCurrent API call!`
      );
    }
  } catch (error) {
    throw error;
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
      const $00_00c = data.forecast.forecastday[0].hour[0].temp_c;
      const $00_00f = data.forecast.forecastday[0].hour[0].temp_f;
      const $00_00_condition =
        data.forecast.forecastday[0].hour[0].condition.text;
      const $00_00_condition_img =
        data.forecast.forecastday[0].hour[0].condition.icon;
      const $04_00c = data.forecast.forecastday[0].hour[4].temp_c;
      const $04_00f = data.forecast.forecastday[0].hour[4].temp_f;
      const $04_00_condition =
        data.forecast.forecastday[0].hour[4].condition.text;
      const $04_00_condition_img =
        data.forecast.forecastday[0].hour[4].condition.icon;
      const $08_00c = data.forecast.forecastday[0].hour[8].temp_c;
      const $08_00f = data.forecast.forecastday[0].hour[8].temp_f;
      const $08_00_condition =
        data.forecast.forecastday[0].hour[8].condition.text;
      const $08_00_condition_img =
        data.forecast.forecastday[0].hour[8].condition.icon;
      const $12_00c = data.forecast.forecastday[0].hour[12].temp_c;
      const $12_00f = data.forecast.forecastday[0].hour[12].temp_f;
      const $12_00_condition =
        data.forecast.forecastday[0].hour[12].condition.text;
      const $12_00_condition_img =
        data.forecast.forecastday[0].hour[12].condition.icon;
      const $16_00c = data.forecast.forecastday[0].hour[16].temp_c;
      const $16_00f = data.forecast.forecastday[0].hour[16].temp_f;
      const $16_00_condition =
        data.forecast.forecastday[0].hour[16].condition.text;
      const $16_00_condition_img =
        data.forecast.forecastday[0].hour[16].condition.icon;
      const $20_00c = data.forecast.forecastday[0].hour[20].temp_c;
      const $20_00f = data.forecast.forecastday[0].hour[20].temp_f;
      const $20_00_condition =
        data.forecast.forecastday[0].hour[20].condition.text;
      const $20_00_condition_img =
        data.forecast.forecastday[0].hour[20].condition.icon;
      const $23_00c = data.forecast.forecastday[0].hour[23].temp_c;
      const $23_00f = data.forecast.forecastday[0].hour[23].temp_f;
      const $23_00_condition =
        data.forecast.forecastday[0].hour[23].condition.text;
      const $23_00_condition_img =
        data.forecast.forecastday[0].hour[23].condition.icon;
      const maxTempC = data.forecast.forecastday[0].day.maxtemp_c;
      const maxTempF = data.forecast.forecastday[0].day.maxtemp_f;
      const minTempC = data.forecast.forecastday[0].day.mintemp_c;
      const minTempF = data.forecast.forecastday[0].day.mintemp_f;
      const specificDataForecast = {
        $00_00c,
        $00_00f,
        $00_00_condition,
        $00_00_condition_img,
        $04_00c,
        $04_00f,
        $04_00_condition,
        $04_00_condition_img,
        $08_00c,
        $08_00f,
        $08_00_condition,
        $08_00_condition_img,
        $12_00c,
        $12_00f,
        $12_00_condition,
        $12_00_condition_img,
        $16_00c,
        $16_00f,
        $16_00_condition,
        $16_00_condition_img,
        $20_00c,
        $20_00f,
        $20_00_condition,
        $20_00_condition_img,
        $23_00c,
        $23_00f,
        $23_00_condition,
        $23_00_condition_img,
        maxTempC,
        maxTempF,
        minTempC,
        minTempF,
      };
      return specificDataForecast;
    } else {
      throw new Error(
        `A ${response.status}, error was thrown, in weatherForecast API call!`
      );
    }
  } catch (error) {
    throw error;
  }
}

async function weather(city) {
  try {
    const [currentData, forecastData] = await Promise.all([
      weatherCurrent(city),
      weatherForcast(city),
    ]);
    const data = { ...currentData, ...forecastData };
    return data;
  } catch (error) {
    throw error;
  }
}

export { weather };
