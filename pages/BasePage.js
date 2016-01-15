/**
 * Created by swati on 12/01/16.
 */

import webdriver from 'selenium-webdriver';
import config from 'config';

const URL = config.get('OyoRoomsURL');
export default class BasePage {

    constructor(driver, visit = false){
        this.driver = driver;
        this.url = URL;

        if (visit === true){
            this.driver.get(this.url);
        }
    }
}