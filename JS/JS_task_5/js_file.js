window.onload  = function() {
    console.log("work");
    if (performance.navigation.type == 1) {
        localStorage.clear();
    };
    
    var dateFrom = document.querySelector('[name="dateFrom"]');
    var timeFrom = document.querySelector('[name="timeFrom"]');
    var dateTo = document.querySelector('[name="dateTo"]');
    var timeTo = document.querySelector('[name="timeTo"]');
    var radio = document.getElementsByName('radio');
    var selector = document.getElementById('selector');
    
    myStorage = window.localStorage;
    if (myStorage){
        dateFrom.value = localStorage.getItem('dateFrom');
        timeFrom.value = localStorage.getItem('timeFrom');
        dateTo.value = localStorage.getItem('dateTo');
        timeTo.value = localStorage.getItem('timeTo');
        for(var i = 0; i < radio.length; i++){
            if (radio[i].value ==  localStorage.getItem('radio')) {
                radio[i].checked = true;
            };
        };
        selector.value = localStorage.getItem('selector');
    }
        dateFrom.onblur = function() {
            localStorage.setItem('dateFrom', dateFrom.value);
            console.log(localStorage);
            console.log(dateFrom.value);
        }

        timeFrom.onblur = function() {
            localStorage.setItem('timeFrom', timeFrom.value);
            console.log(localStorage);
            console.log(timeFrom.value);
        }

        dateTo.onblur = function() {
            localStorage.setItem('dateTo', dateTo.value);
            console.log(localStorage);
            console.log(dateTo.value);
        }

        timeTo.onblur = function() {
            localStorage.setItem('timeTo', timeTo.value);
            console.log(localStorage);
            console.log(dateFrom.value);
        }

        for(var i = 0; i < radio.length; i++){
            radio[i].onclick = function () {
                localStorage.setItem('radio' + i, this.value);
            }
        }

        selector.onblur = function() {
            localStorage.setItem('selector', selector.value);
            console.log(localStorage);
            console.log(selector.value);
        }
    

/*
    
    document.getElementById("button").onclick = function () {
        console.log(localStorage);
    }
*/
    
}
//localStorage.setItem("radio", "checked");
//console.log(localStorage);