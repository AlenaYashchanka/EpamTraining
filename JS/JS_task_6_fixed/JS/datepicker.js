// Class DatePicker
var DatePicker = function() {
    this.containerForDays = containerForDays,
    this.nextMonthButton = nextMonthButton,
    this.prevMonthButton = prevMonthButton,
    this.span = span,
    this.containerForWeek = containerForWeek,
    this.activeDates = null,
    this.date= new Date(),
    this.todaysDate= new Date(),
    this.monthArray = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    this.daysWeekArray = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
};

DatePicker.prototype.init = function () {
  this.createDaysOfWeek();
  this.createMonth();
  this.changeMonth();
 // this.choiceDay();
};
// Returns name of month with index
DatePicker.prototype.getMonth = function (monthIndex) {
  return this.monthArray[monthIndex];
};
// Clear calendar before displaying next or pevious month
DatePicker.prototype.clearCalendar = function(){
 return  this.containerForDays.innerHTML = '';
};
// Change month with listener
DatePicker.prototype.changeMonth = function(){
  var thisVar = this;
  this.nextMonthButton.addEventListener('click', function () {
      thisVar.clearCalendar();
      var nextMonth = thisVar.date.getMonth() + 1;
      thisVar.date.setMonth(nextMonth);
      thisVar.createMonth();
  });
  this.prevMonthButton.addEventListener('click', function () {
      thisVar.clearCalendar();
      var prevMonth = thisVar.date.getMonth() - 1;
      thisVar.date.setMonth(prevMonth);
      thisVar.createMonth();
  });
};

DatePicker.prototype.createDay = function (num, day) {
  var newDay = document.createElement('div');
  var dateEl = document.createElement('span');
  newDay.className = 'calendar_date';
  dateEl.className = 'date_number';
  dateEl.innerHTML = num;

  if (num === 1) {
    var offset = ((day) * 14.28);
    if (offset > 0) {
      newDay.style.marginLeft = offset + '%';
    };
  };
  if (this.date.toString() === this.todaysDate.toString()) {
    dateEl.style.background = ('#E7637B');
  };
  newDay.appendChild(dateEl);
  this.containerForDays.appendChild(newDay);
};

DatePicker.prototype.createMonth = function () {
  this.date.setDate(1); 
  var currentMonth = this.date.getMonth();
  while (this.date.getMonth() === currentMonth) {
    this.createDay(this.date.getDate(), this.date.getDay());
    this.date.setDate(this.date.getDate() + 1);
  };
  this.date.setDate(1);
  this.date.setMonth(this.date.getMonth() - 1);
  this.span.innerHTML = this.getMonth(this.date.getMonth()) + ' ' + this.date.getFullYear();
};

DatePicker.prototype.createDaysOfWeek = function () {
  for(var i = 0; i < this.daysWeekArray.length; i++){
      var day = document.createElement('span');
      day.innerHTML = this.daysWeekArray[i];
      this.containerForWeek.appendChild(day);
  };
};