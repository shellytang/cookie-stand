'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
var allStores = []
var storeTable = document.getElementById('storeTable');

function Store(location,minCustPerHour,maxCustPerHour,avgCookiesPerCust) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalCookies = 0;
  this.cookiesSoldPerHour = [];

  this.calCookiesPerHour = function() {
    for (var i =0; i < hours.length; i++) {
      var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
  }

  this.sumTotal = function () {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
    return this.totalCookies;
  };
  this.calCookiesPerHour();
  this.sumTotal();
  allStores.push(this);

  this.render = function () {
    storeTable = document.getElementById('storeTable');
    var trEl = document.createElement('tr');

    tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl); //append as the first item

    for (var i = 0; i < hours.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldPerHour[i]; //this should loop thru each hour
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.sumTotal();
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  }
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('Sea Tac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 23, 2.3);
new Store('Alki', 2, 16, 4.6);

function makeHeaderRow () {   //function for headerRow
  var storeTable = document.getElementById('storeTable');
  var trEl = document.createElement('tr'); //create tr for the header
  var thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl)[0]; //append empty cell for proper alignment

  for (var i = 0; i < hours.length; i++) {  //loop thru array for hours in table header
    thEl = document.createElement('th');
    thEl.textContent = hours[i]; //create row for hours of operation
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');//make row for storing the daily location total
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl); //append to table
}
makeHeaderRow();

function makeAllStoreRow () {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}
makeAllStoreRow();

// function makeFooterRow () {  //STRETCH GOAL! COMPLETE IN FREE TIME
//   storeTable = document.getElementById('storeTable');
//   var trEl = document.createElement('tr'); //create tr for the header
//   var tdEl = document.createElement('td');
//   tdEl.textContent = 'Totals';
//   trEl.appendChild(tdEl);
//   storeTable.appendChild(trEl);
//
  // for (var i = 0; i < allStores.length; i++) {
  //   for (var j = 0; j < hours.length; j++) {
  //     var totals = allStores[i].cookiesSoldPerHour[j];
  //   }
  // }
  // tdEl = document.createElement('td');
  // tdEl.textContent = cookiesPerHour;
  // trEl.appendChild(tdEl);
// }
// makeFooterRow();
