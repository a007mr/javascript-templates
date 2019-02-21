// Init Local Storage
const storage = new Storage();
// Get City from LS
const weatherLocation = storage.getLocation();
// Init Weather
const weather = new Weather(weatherLocation);
// Init UI 
const ui = new UI();

// Event Listener to Get Weather
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  // Run Change Location
  weather.changeLocation(city);

  // Save City on LS
  storage.setLocation(city);

  // Get new Weather
  getWeather();

  // Close popup
  $('#locModal').modal('hide');
})

// Get Weather
function getWeather() {
weather.getWeather()
  .then(results => ui.paint(results))
  .catch(err => console.log(err));
}