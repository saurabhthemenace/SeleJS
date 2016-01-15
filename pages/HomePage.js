/**
 * Created by swati on 12/01/16.
 */

import webdriver from 'selenium-webdriver';
import config from 'config';
import BasePage from '../pages/BasePage.js';
import CheckIn from '../objectRepository/commonOR.json';

export default class HomePage extends BasePage {
    constructor( driver, visit = false ) {
        super( driver,  visit, config.get( 'HomePageUrl' ) );
    }

    findCheckInDateCalendar(){
        driver.findElement(webdriver.By.id(CheckIn));
    }

    clickOnDate(date){
        driver.findElement(webdriver.By.linkText(date));
    }

    selectCurrentDateAsCheckInDate (){
        var currentTime =  new Date();
        var currentDate = currentTime.getDate();
        console.log(currentDate);
    }
}