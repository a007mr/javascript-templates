class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'New York';
  }

  // Get City on Local Storage
  getLocation() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return this.city;
  }

  // Set City in Local Storage
  setLocation(city) {
    localStorage.setItem('city', city);
  }
}