class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.tempMax = document.getElementById('w-dewpoint');
    this.pressure = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  // Paint Weather in UI 
  paint(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp + "℃";
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.tempMax.textContent = `Maximum Temperature: ${weather.main.temp_max}℃`;
    this.pressure.textContent = `Pressure Level: ${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  }
}