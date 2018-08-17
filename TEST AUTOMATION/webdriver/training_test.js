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

driver.findElement(By.css('#gb_70')).click().then(function(){
    driver.wait(until.elementLocated(By.css('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.daaWTb > div > div > content > span')), 10000)
    driver.findElement(By.css('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.daaWTb > div > div > content > span')).click().then(function(){
        driver.findElement(By.name('firstName')).sendKeys('Alena').then(function(){
            driver.findElement(By.name('lastName')).sendKeys('Yaschenko').then(function(){
                driver.findElement(By.name('Username')).sendKeys('Alena1988').then(function(){
                    driver.findElement(By.name('Passwd')).sendKeys('aXDR123+').then(function(){
                        driver.findElement(By.name('ConfirmPasswd')).sendKeys('aXDR123+').then(function(){
                            driver.findElement(By.className('RveJvd snByac')).click().then(function(){
                                driver.wait(until.elementLocated(By.css('#usernameList > li:nth-child(1) > button')),3000);
                                driver.findElement(By.css('#usernameList > li:nth-child(1) > button')).click().then(function(){
                                    driver.findElement(By.name('Passwd')).sendKeys('aXDR123+').then(function(){
                                        driver.findElement(By.name('ConfirmPasswd')).sendKeys('aXDR123+').then(function(){
                                            driver.findElement(By.className('RveJvd snByac')).click();
                                        });
                                    });
                                });
                            });
                        }); 
                    });  
                }); 
            });  
        });         
    });    
});   
