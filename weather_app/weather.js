class Weather {
  constructor(city) {
    this.key = '42ba8ca843b89dd70d316a5303d4c178';
    this.city = city;
  }

  // Fetch Weather from Open Weather
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.key}&units=metric`);

    const responseData = await response.json();
    
    return responseData;
  } 

  // Change Location
  changeLocation(city) {
    this.city = city;
  }
}