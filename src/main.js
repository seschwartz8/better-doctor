import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { callDoctorAPI } from './docAPI';

$(document).ready(function() {
  let city;

  $('form.city').submit(function(event) {
    event.preventDefault();
    city = $('#city-input').val();
  });

  $('form.symptom').submit(function(event) {
    event.preventDefault();
    let symptomInput = $('#symptom-input').val();
    callDoctorAPI(symptomInput, 'symptom', city);
  });

  $('form.name').submit(function(event) {
    event.preventDefault();
    let nameInput = $('#name-input').val();
    callDoctorAPI(nameInput, 'name', city);
  });
});
