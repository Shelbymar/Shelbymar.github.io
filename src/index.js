import './style.css';
import { displayForm } from './dom-manip.js';
import { submitForm, retrieveStorage, clearList, displayToday, displayAll} from './form.js';
//display on initial page load
displayForm();
retrieveStorage();

//display current local storage if any


//click events module
let clickEventsModule = (function () {
    //add click event to submit button
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', submitForm)
    //click even for clear list
    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearList)
    //click event to display today events
    const todayEl = document.getElementById('today');
    todayEl.addEventListener('click', displayToday)
    //click events to display all events
    const homeEl = document.getElementById('home');
    homeEl.addEventListener('click', displayAll)
    //click event to display all events
    const taskEl = document.getElementById('projects');
    taskEl.addEventListener('click', displayAll)
    //click event for colors
    const colors = document.querySelectorAll('.colorEl');
    
})

clickEventsModule();
