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
//driver.manage().timeouts().implicitlyWait(2000);                       //NOT WORKING

driver.findElement(By.css('#lst-ib')).sendKeys('Banana Song').then(function(){
    driver.wait(until.elementLocated(By.css('#sbse0 > div.sbqs_c')), 5000);
    driver.findElement(By.css('#sbse0 > div.sbqs_c')).click().then(function(){
        driver.wait(until.elementLocated(By.name('btnK')), 5000);
        driver.findElement(By.name('btnK')).click().then(function(){
            driver.sleep(5000);
            driver.find_element_by_xpath("//a[contains('Full Song', 'youtube.com')]")
            //driver.findElement(By.css("a[href*='youtube.com']") && By.linkText('Full Song')).click();
            //driver.findElement(By.linkText('Full Song')).click();
        });
    });
});                              

//driver.find_elements_by_xpath("//a[contains(text(), 'youtube.com')]")
//driver.findElement(By.css("a[href*='youtube.com']"));