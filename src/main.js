import { CombatGame } from './gameField';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
    const newGame = new CombatGame(["Law Graduate", 8, 4]);
    debugger;
    console.log(newGame);
});
