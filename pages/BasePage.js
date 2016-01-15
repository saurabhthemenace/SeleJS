/**
 * Created by swati on 12/01/16.
 */

import webdriver from 'selenium-webdriver';

export default class BasePage {

    constructor(driver, visit = false, url = null){
        this.driver = driver;
        this.url = url;

        if (visit === true){
            this.driver.get(this.url);
        }
    }
}