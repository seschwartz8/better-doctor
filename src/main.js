import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { callDoctorAPI } from './docAPI';
import { callGeoAPI } from './geoAPI';

$(document).ready(function() {
  let city = 'Seattle';
  $('form.city').submit(function(event) {
    event.preventDefault();
    let cityInput = $('#city-input').val();
    city = callGeoAPI(cityInput);
  });

  $('form.symptom').submit(function(event) {
    event.preventDefault();
    let symptomInput = $('#symptom-input').val();
    callDoctorAPI(symptomInput, 'symptom', '47.6062', '122.3321');
  });

  $('form.name').submit(function(event) {
    event.preventDefault();
    let nameInput = $('#name-input').val();
    callDoctorAPI(nameInput, 'name', '47.6062', '122.3321');
  });
});
