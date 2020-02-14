import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { callAPI } from './API';

$(document).ready(function() {
  $('form.sypmtom').submit(function(event) {
    event.preventDefault();

    let symptomInput = $('#symptom-input').val();
    callAPI(symptomInput, 'symptom');
  });

  $('form.name').submit(function(event) {
    event.preventDefault();

    let nameInput = $('#name-input').val();
    callAPI(nameInput, 'name');
  });
});
