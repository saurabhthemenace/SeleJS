/**
 * Created by swati on 12/01/16.
 */

import webdriver from 'selenium-webdriver';
let driver = null;

    export function initializeTestSetUp(browserType){
        try{
            driver = setDriver(browserType);
        }
        catch(exception){
            console.log("Error is" + exception.stacktrace);
        }
        return driver;
    }

    export function setDriver(browserType){
        switch(browserType){
            case "chrome":
                driver = initChromeDriver();
                break;
            case "firefox":
                driver = initFireFoxDriver();
                break;
            default:
                console.log(browserType + "is invalid browser");
                driver = initFireFoxDriver();
        }
        return driver;
    }

    export function initFireFoxDriver(){
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
        driver.manage().window().setSize(1280, 1000);
        return driver;
    }

    export function initChromeDriver(){
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
        driver.manage().window().setSize(1280, 1000);
        return driver;
    }
