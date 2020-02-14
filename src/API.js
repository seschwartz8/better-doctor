let API_KEY = '02e57727a2bacdfb5d79e0d822f8544c';
// let API_KEY = process.env.API_KEY;

function getDoctors(json) {
  let doctors = [];
  for (let doctor of json.data) {
    let firstName = doctor.profile.first_name;
    let lastName = doctor.profile.last_name;
    let newPatients = doctor.practices.some(acceptingNew);
    let imgUrl = doctor.profile.image_url;
    let contact = getContact(doctor);
    let doctorObj = {
      firstName: firstName,
      lastName: lastName,
      newPatients: newPatients,
      imgUrl: imgUrl,
      contact: contact
    };
    doctors.push(doctorObj);
  }
  return doctors;
}

function acceptingNew(practice) {
  return practice.accepts_new_patients && practice.within_search_area
    ? true
    : false;
}

function getContact(doctor) {
  let contactInfo = [];
  for (let practice of doctor.practices) {
    if (practice.within_search_area) {
      let { city, state, street, zip } = practice.visit_address;
      let { number: phone } = practice.phones[0];
      let practiceObj = {
        street: street,
        city: city,
        state: state,
        zip: zip,
        phone: phone
      };
      if (practice.website) practiceObj.website = practice.website;
      contactInfo.push(practiceObj);
    }
  }
  return contactInfo;
}

export function callAPISymptom(symptomInput) {
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomInput}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${API_KEY}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const doctors = getDoctors(json);
      console.log(doctors);
    });
}

export function callAPIName(nameInput) {
  console.log(`I call an API with ${nameInput}`);
}
