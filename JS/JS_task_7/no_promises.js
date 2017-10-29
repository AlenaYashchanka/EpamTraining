var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var links = ['http://www.nbrb.by/API/ExRates/Rates/145',
'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0', 
'http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-6&Periodicity=0', 
'http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-1&Periodicity=1', 
'http://www.nbrb.by/API/ExRates/Rates/840?ParamMode=1', 
'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2016-7-5'];

//console.log(xhr);
function createRequirement(link) {
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
            //console.log("Server is not ready");
            return;
        }
    
        if (xhr.status != 200) {
            console.log(xhr.status + ": " + xhr.statusText);
        }
        else {
            console.log('SUCCESS ' + xhr.responseText);
        }
    }
    
        xhr.open('GET', link, false); // true ??????
        xhr.send();
        xhr.onreadystatechange();
}

for (var i = 0; i < links.length; i++) {
    createRequirement(links[i]);
}
