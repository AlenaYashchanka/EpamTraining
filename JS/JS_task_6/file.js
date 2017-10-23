window.onload = function() {

    // Get current date
var d = new Date();
var currentYear = d.getFullYear();
var currentMonth = d.getMonth();
var currentDate = d.getDate();

var year = currentYear;
var month = currentMonth;

// Create container for datepicker
var datepicker = document.createElement('div');
datepicker.setAttribute('class', 'datepicker-container');
document.body.appendChild(datepicker);

// Create Month-Year header with buttons and title Month-Year
var datepickerMonthYear = document.createElement('div');
datepickerMonthYear.setAttribute('class', 'datepicker-container__month-year datepicker-month-year');

// Create left button for switching months
var prevMonth = document.createElement('div');
prevMonth.setAttribute('class', 'datepicker-month-year__prev-month');
prevMonth.innerHTML = '<<';
datepickerMonthYear.appendChild(prevMonth);

// Create title Month-year
var monthYearHeader = document.createElement('div');
monthYearHeader.setAttribute('class', 'datepicker-month-year__title');
CreateMonthYearTitle(month, year);
datepickerMonthYear.appendChild(monthYearHeader);

// Create right button for switching months
var nextMonth = document.createElement('div');
nextMonth.setAttribute('class', 'datepicker-month-year__next-month');
nextMonth.innerHTML = '>>';
datepickerMonthYear.appendChild(nextMonth);

// append buttons and title to container
datepicker.appendChild(datepickerMonthYear);

// Create title of weekdays
var weekDaysTitle = document.createElement('div');
weekDaysTitle.setAttribute('class', 'datepicker-container__weekdays datepicker-weekdays');

var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for (var i = 0; i < weekdays.length; i++) {
    var dayWeek = document.createElement('div');
    dayWeek.innerHTML = weekdays[i];
    dayWeek.setAttribute('class', 'datepicker-weekdays__weekday');
    weekDaysTitle.appendChild(dayWeek);
}
datepicker.appendChild(weekDaysTitle);

// Create datepicker container for days in month 
var daysInMonth = document.createElement('div');
daysInMonth.setAttribute('class', 'datepicker-container__days-in-month datepicker-days-in-month');
datepicker.appendChild(daysInMonth);
CreatDaysOfMonth(month, year);

// Function for creation Month-year title
function CreateMonthYearTitle(month, year) {
    var month_array = ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    for (var i = 0; i < month_array.length; i++) {
        if (month === i) {
            monthYearHeader.innerHTML = month_array[i];
        }
    }
    monthYearHeader.innerHTML = monthYearHeader.innerHTML + ' ' + year;     // check
}

// Function for creation days in month
function CreatDaysOfMonth (month, year) {
    var dateObj = new Date(year, month, 1).getDay();
    for (var i = 0; i < dateObj; i++) {
        var emptySpace = document.createElement('div');
        emptySpace.setAttribute('class', 'datepicker-days-in-month__day datepicker-days-in-month__day--empty');
        daysInMonth.appendChild(emptySpace);
    };

    var daysInThisMonth = new Date(year, month+1, 0).getDate();
    for (var i = 1; i <= daysInThisMonth; i++) {
        //if (i%8 === 0) {var a = document.createElement('</br>');}
        var day = document.createElement('div');
        day.setAttribute('class', 'datepicker-days-in-month__day');
        day.innerHTML = i;
        if ((month === currentMonth) && (year === currentYear) && (i === currentDate)){
            day.style.backgroundColor = 'green';
        }
        daysInMonth.appendChild(day);
    }
} 

prevMonth.onclick = function () {
    month--;
    if (month === -1) {
        month = 11;
        year--;
    }
    daysInMonth.innerHTML = '';
    CreateMonthYearTitle(month, year);
    CreatDaysOfMonth(month, year);
}

nextMonth.onclick = function () {
    month++; 
    if (month === 12) {
        month = 0;
        year++;
    }
    daysInMonth.innerHTML = '';
    CreateMonthYearTitle(month, year);
    CreatDaysOfMonth(month, year);
}
}