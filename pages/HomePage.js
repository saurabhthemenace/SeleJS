/**
 * Created by swati on 12/01/16.
 */

import webdriver from 'selenium-webdriver';
import config from 'config';
import BasePage from '../pages/BasePage.js';
import CheckIn from '../objectRepository/commonOR.json';

let megaDropDown = "Delhi";

export default class HomePage extends BasePage {
    constructor( driver, visit = false ) {
        const quoteSelector = webdriver.By.linkText( megaDropDown );
        super( driver, quoteSelector, visit, config.get( 'HomePageUrl' ) );
        this.quoteSelector = quoteSelector;
    }
    quoteContainerPresent() {
        return this.driver.isElementPresent( this.quoteSelector );
    }
    quoteTextDisplayed() {
        return this.driver.findElement( this.quoteSelector ).getText();
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
        findCheckInDateCalendar().click();
        clickOnDate(currentDate);
    }
}