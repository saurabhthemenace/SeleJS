/**
 * Created by swati on 13/01/16.
 */

import CheckIn from '../objectRepository/commonOR.json';
import HomePage from '../pages/HomePage.js';

let exports = module.exports = {};

exports.selectCurrentDateAsCheckInDate = function(){
      var currentTime =  new Date();
      var currentDate = currentTime.getDate();
      var homePage = new HomePage(driver, true);
      homePage.findCheckInDateCalendar().click();
      homePage.clickOnDate(currentDate);
};