async function weather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=cd485184bc0d44e5b67172805242305&q=${city}`,
      {
        mode: 'cors',
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error(`${response.status}`);
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default weather;