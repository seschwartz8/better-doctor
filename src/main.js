import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { callDoctorAPI } from './API';

$(document).ready(function() {
  $('form.sypmtom').submit(function(event) {
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
