let API = '02e57727a2bacdfb5d79e0d822f8544c';

export function callAPISymptom(symptomInput) {
  let url =
    `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomInput}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=` +
    API;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

export function callAPIName(nameInput) {
  console.log(`I call an API with ${nameInput}`);
}
