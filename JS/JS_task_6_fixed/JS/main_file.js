var renderer = new Renderer();

var calendar = renderer.create({
    tag: 'div',
    classes: ['container_calendar', 'calendar'],
    childrens: [
        {
            tag: 'div',
            classes: 'calendar_wrapper',
            childrens: [
                {
                    tag: 'div',
                    classes: 'calendar_button-prev',
                },
                {
                    tag: 'div',
                    classes: 'calendar_span',
                },
                {
                    tag: 'div',
                    classes: 'calendar_button-next',
                }
            ]
        },
        {
            tag: 'div',
            classes: 'calendar_week'
        },
        {
            tag: 'div',
            classes: 'calendar_days',
        },
    ]
});
renderer.render(calendar,'.container');


var containerForDays = document.querySelector('.calendar_days'),
    nextMonthButton = document.querySelector('.calendar_button-next'),
    prevMonthButton = document.querySelector('.calendar_button-prev'),
    span = document.querySelector('.calendar_span'),
    containerForWeek = document.querySelector('.calendar_week');

var datePicker = new DatePicker(containerForDays, nextMonthButton, prevMonthButton, span, containerForWeek);

datePicker.init();
