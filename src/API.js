let API = '02e57727a2bacdfb5d79e0d822f8544c';

export function callAPISymptom(symptomInput) {
  let url =
    'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' +
    API;
  console.log('symptom ' + symptomInput);

  fetch(url)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

export function callAPIName(nameInput) {
  console.log(`I call an API with ${nameInput}`);
}
