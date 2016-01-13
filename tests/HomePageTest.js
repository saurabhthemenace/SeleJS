/**
 * Created by swati on 12/01/16.
 */

import assert from 'assert';
import webdriver from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';
import config from 'config';
import HomePage from '../pages/HomePage.js';
import commonTestMethods from '../common/OyoBaseTest.js';

let driver = null;

const mochaTimeoutMS = config.get( 'mochaTimeoutMS' );

test.before( function() {
    this.timeout( mochaTimeoutMS );
    driver = new webdriver.Builder().withCapabilities( webdriver.Capabilities.firefox() ).build();
    driver.manage().window().setSize(1280, 1000);
} );

test.describe( 'Ralph Says', function() {
    this.timeout( mochaTimeoutMS );

    test.it( 'shows a quote container', function() {
        var page = new HomePage( driver, true );
        page.quoteContainerPresent().then( function( present ) {
            assert.equal( present, true, 'Quote container not displayed' );
        } );
    } );

    test.it( 'shows a non-empty quote', function() {
        var page = new HomePage( driver, true );
        page.quoteTextDisplayed().then( function( text ) {
            assert.notEqual( text, '', 'Quote is empty' );
        } );
    } );

    test.it('checkInDate', function(){
        var page = new HomePage( driver, true );
        page.selectCurrentDateAsCheckInDate();
    })
} );


test.afterEach( () => driver.manage().deleteAllCookies() );

test.after( () => driver.quit() );