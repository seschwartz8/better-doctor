let API = '02e57727a2bacdfb5d79e0d822f8544c';

function acceptingNew(practice) {
  return practice.accepts_new_patients && practice.within_search_area
    ? true
    : false;
}

function getAddresses(doctor) {
  let addresses = [];
  for (let practice of doctor.practices) {
    if (practice.within_search_area) {
      let { city, state, street, zip } = practice.visit_address;
      let { number: phone } = practice.phones[0];
      let { website } = practice;
      addresses.push(`${street}
      ${city}, ${state} ${zip}
      Phone: ${phone}`);
      if (website) {
        addresses.push(`
        Website: <a href"${website}">${website}</a>`);
      }
    }
  }
  return addresses;
}

export function callAPISymptom(symptomInput) {
  let url =
    `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomInput}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=` +
    API;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      // let doctors = [];
      for (let doctor of json.data) {
        let firstName = doctor.profile.first_name;
        let lastName = doctor.profile.last_name;
        let newPatients = doctor.practices.some(acceptingNew);
        let imgUrl = doctor.profile.image_url;
        let addresses = getAddresses(doctor);
        console.log(firstName);
        console.log(lastName);
        console.log(newPatients);
        console.log(imgUrl);
        console.log(addresses);
        // let doctorObj = {};
      }
      console.log(json);
    });
}

export function callAPIName(nameInput) {
  console.log(`I call an API with ${nameInput}`);
}
