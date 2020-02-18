import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { callDoctorAPI } from './docAPI';
import { callGeoAPI } from './geoAPI';

$(document).ready(function() {
  let city;
  let location;

  $('form.symptom').hide();
  $('form.name').hide();
  $('#change-city').hide();

  $('form.city').submit(function(event) {
    event.preventDefault();
    city = $('#city-input').val();
    $('form.city').hide();
    $('#change-city').show();
    $('form.symptom').show();
    $('form.name').show();
    (async () => {
      location = await callGeoAPI(city);
    })();
  });

  $('#change-city').click(function(event) {
    event.preventDefault();

    $('#change-city').hide();
    $('form.city').show();
  });

  $('form.symptom').submit(function(event) {
    event.preventDefault();
    let symptomInput = $('#symptom-input').val();
    callDoctorAPI(symptomInput, 'symptom', location);
  });

  $('form.name').submit(function(event) {
    event.preventDefault();
    let nameInput = $('#name-input').val();
    callDoctorAPI(nameInput, 'name', location);
  });
});
