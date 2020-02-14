let API_KEY = '02e57727a2bacdfb5d79e0d822f8544c';
// let API_KEY = process.env.API_KEY;
import $ from 'jquery';

export function callAPI(input, type) {
  let query;
  if (type === 'symptom') {
    query = `query=${input}`;
  } else if (type === 'name') {
    query = `last_name=${input}`;
  }
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?${query}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=${API_KEY}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const doctors = getDoctors(json);
      return doctors;
    })
    .then(function(doctors) {
      displayResults(doctors);
      if (doctors.length === 0) {
        displayError('empty');
      }
    })
    .catch(function(error) {
      console.log(error);
      displayError('error');
    });
}

function getDoctors(json) {
  let doctors = [];
  for (let doctor of json.data) {
    let firstName = doctor.profile.first_name;
    let lastName = doctor.profile.last_name;
    let newPatients = doctor.practices.some(acceptingNew);
    let imgUrl = doctor.profile.image_url;
    let contacts = getContactInfo(doctor);
    let doctorObj = {
      firstName: firstName,
      lastName: lastName,
      newPatients: newPatients,
      imgUrl: imgUrl,
      contacts: contacts
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

function getContactInfo(doctor) {
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

function displayResults(doctors) {
  $('#results').empty();
  $('input').val('');
  for (let doctor of doctors) {
    let acceptingNewPatients;
    if (doctor.newPatients) {
      acceptingNewPatients = `<div id="new-patients">Accepting new patients</div>`;
    } else {
      acceptingNewPatients = `<div id="new-patients"></div>`;
    }

    let addresses = '';
    for (let contact of doctor.contacts) {
      let { street, city, state, zip, phone } = contact;
      let address = `
        <div id="address">
          <p>${street} ${city}, ${state} ${zip}</p>
          <p>Phone: ${phone}</p>
        </div>`;
      if (contact.website) {
        address += `<p id="website"><a href=${contact.website}>${contact.website}</a></p>`;
      }
      addresses += address;
    }

    $('#results').append(`
    <div id="doc-container">
      <div id="doc-header">
        <h5 id="full-name">${doctor.firstName} ${doctor.lastName}</h5>
        ${acceptingNewPatients}
      </div>
      <div id="doc-details">
        ${addresses}
      </div>
    </div>
    `);
  }
}

function displayError(error) {
  if (error === 'empty') {
    $('#results').empty();
    $('#results').append(
      `<h4 class="error">We're sorry, no doctors met your search criteria.</h4>`
    );
  } else if (error === 'error') {
    $('#results').empty();
    $('#results').append(
      `<h4 class="error">We're sorry, but we are currently having trouble accessing our database of doctors. Please try again at another time.</h4>`
    );
  }
}
