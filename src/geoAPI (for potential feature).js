// COULD NOT GET ENVIRONMENT VARIABLES TO BE RECOGNIZED AS DEFINED
// let GEO_API_KEY = process.env.GEO_API_KEY;
let GEO_API_KEY = `AIzaSyATj7Y46uUXB8JuPSg0sceNu0gYOu0P1cI`;

export function callGeoAPI(city) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GEO_API_KEY}`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let lat = json.results[0].geometry.location.lat;
      let lng = json.results[0].geometry.location.lng;
      let location = [lat, lng];
      console.log(location);
      return location;
    });
}
