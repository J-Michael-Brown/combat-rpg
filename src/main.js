import { weekdayCalculator } from './weekday-calculator';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#date').submit(function(event){
    event.preventDefault();
    const month = parseInt($('input#month').val());
    const day = parseInt($('input#day').val());
    const year =parseInt($('input#year').val());
    const dayOfWeek = weekdayCalculator(year, month, day);
    $('#output').text(dayOfWeek);
  });
});
