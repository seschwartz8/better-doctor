export function callGeoAPI(city) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.GEO_API_KEY}`;
  let response = fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let lat = json.results[0].geometry.location.lat.toString();
      let lng = json.results[0].geometry.location.lng.toString();
      let location = [lat, lng];
      console.log('first location ' + location);
      return location;
    });
  return response;
}
