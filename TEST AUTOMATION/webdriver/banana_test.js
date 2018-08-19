var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until=webdriver.until;

var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

driver.get('http://google.com');                                         
//driver.manage().timeouts().implicitlyWait(2000);                       //NOT WORKING :-(

driver.findElement(By.css('#lst-ib')).sendKeys('Banana Song').then(function(){                        //write "Banana song" in input search
    driver.wait(until.elementLocated(By.css('#sbse0 > div.sbqs_c')), 10000);                           //wait until list appears
    driver.findElement(By.css('#sbse0 > div.sbqs_c')).click().then(function(){                        //click on the first item
        driver.wait(until.elementIsVisible(By.name('btnK')), 5000);                                     
        driver.findElement(By.name('btnK')).click().then(function(){                                  //click the button "Поиск в google"            
            driver.executeScript("window.scrollBy(0,100px)");                                             //try to scroll down the window
            driver.wait(until.elementIsVisible(By.css("a[href*='youtube.com']") && By.partialLinkText('Despicable Me')),5000);     //wail until link visible
            driver.findElement(By.css("a[href*='youtube.com']") && By.partialLinkText('Despicable Me')).click();                   //click the link youtube that contains text "Despicable Me"
            });
    });
});                              

/*
driver.findElements(By.css("a[href*='youtube.com']")).then(function(elements){
    elements.map(function(el){
        if(el.partialLinkText('Despicable Me'))
            el.click();
    })
});
*/