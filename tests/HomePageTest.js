/**
 * Created by swati on 12/01/16.
 */

import assert from 'assert';
import webdriver from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';
import config from 'config';
import HomePage from '../pages/HomePage.js';
import commonTestMethods from '../common/OyoBaseTest.js';
import * as BrowserFactory from '../utils/BrowserFactory.js';

let driver = null;
const mochaTimeoutMS = config.get( 'mochaTimeoutMS' );
const browserName = config.get('BrowserType');
const URL = config.get('HomePageUrl');


test.before( function(done) {
    this.timeout( mochaTimeoutMS );
    driver = BrowserFactory.initializeTestSetUp(browserName);
    done();
} );

test.describe( 'Home Page Test', function() {
    this.timeout( mochaTimeoutMS );

    test.it('checkInDate', function(done){
        var homePage = new HomePage( driver, true );
        homePage.selectCurrentDateAsCheckInDate();
        done();
    })
} );

test.after( function(done) {
    driver.quit();
    done();
});