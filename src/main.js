import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { callAPISymptom, callAPIName } from './API';

$(document).ready(function() {
  $('form.sypmtom').submit(function(event) {
    event.preventDefault();

    let sypmtomInput = $('#symptom-input').val();
    callAPISymptom(sypmtomInput);
  });

  $('form.name').submit(function(event) {
    event.preventDefault();

    let nameInput = $('#name-input').val();
    callAPIName(nameInput);
  });
});
