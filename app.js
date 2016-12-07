'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
var allStores = []
var storeTable = document.getElementById('storeTable');

// create constructor
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
  // this.render();

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

    storeTable.appendChild(trEl);  //append the row you created to the table
  }
}

//instances

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

  storeTable.appendChild(trEl);
}

makeHeaderRow();

function makeAllStoreRow () {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}
makeAllStoreRow();

function makeFooterRow () {
  storeTable = document.getElementById('storeTable');
  var trEl = document.createElement('tr'); //create tr for the header
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);

  //make each total
  storeTable.appendChild(trEl);
}

makeFooterRow();




//loop through array in another function to render ########################
// function makeStore () {  //this should be for render
//
//   for (var i = 0; i < allStores.length; i++) {  //create a for loop for data
//
//     var storeTable = document.getElementById('storeTable');
//     var trEl = document.createElement('tr');
//
//     var tdEl = document.createElement('td');
//     tdEl.textContent = allStores[i].location;  // .location pulls the store name from index as it iterates
//     trEl.appendChild(tdEl); //add cookiessoldperhour after this?
//     storeTable.appendChild(trEl);
//   }
//   // second for loop to add cell data?
// }
//
// makeStore();


// yesterdays render for literal notation
//
// render: function () {
//
//     this.randCustPerHour();
//
//     var pEl = document.createElement('p');
//     pEl.textContent = this.location;
//     document.body.appendChild(pEl);
//
//     var ulEl = document.createElement('ul');  //could also create in sales.html and use id
//     document.body.appendChild(ulEl);
//
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//
//     var liEll = document.createElement('li');
//     liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
//     ulEl.appendChild(liEll);
//
//   }
//
//
// // yesterday's literal notation
//
// // var firstAndPike = {
// //   location: '1st and Pike',
// //   minCustPerHour: 23,
// //   maxCustPerHour: 65,
// //   avgCookiesPerCust: 6.3,
// //   cookiesSoldPerHour: [],
// //   totalCookies: 0,
// //
// //   randCustPerHour: function() {
// //     for (var i =0; i < hours.length; i++) {
// //       var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
// //       console.log(randomCustomersPerHour);
// //       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
// //       this.cookiesSoldPerHour.push(cookiesPerHour);
// //     }
// //   },
// //
// //   sumTotal: function () {
// //     for (var i = 0; i < hours.length; i++) {
// //       this.totalCookies += this.cookiesSoldPerHour[i];
// //     }
// //     return this.totalCookies
// //   },
// //
// //
// //   render: function () {
// //     this.randCustPerHour();
// //
// //     var pEl = document.createElement('p');
// //     pEl.textContent = this.location;
// //     document.body.appendChild(pEl);
// //
// //     var ulEl = document.createElement('ul');  //could also create in sales.html and use id
// //     document.body.appendChild(ulEl);
// //
// //     for (var i = 0; i < hours.length; i++) {
// //       var liEl = document.createElement('li');
// //       liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
// //       ulEl.appendChild(liEl);
// //     }
// //
// //     var liEll = document.createElement('li');
// //     liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
// //     ulEl.appendChild(liEll);
// //
// //   }
// // };
// //
// // firstAndPike.render();
// //
// // var seaTacAirport = {
// //
// //   minCustPerHour: 3,
// //   maxCustPerHour: 24,
// //   avgCookiesPerCust: 1.2,
// //   cookiesSoldPerHour: [],
// //   location: 'Sea Tac Airport',
// //   totalCookies: 0,
// //
// //   randCustPerHour: function() {
// //     for (var i =0; i < hours.length; i++) {
// //       var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
// //       console.log(randomCustomersPerHour);
// //       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
// //       this.cookiesSoldPerHour.push(cookiesPerHour);
// //     }
// //   },
// //
// //   sumTotal: function () {
// //     for (var i = 0; i < hours.length; i++) {
// //       this.totalCookies += this.cookiesSoldPerHour[i];
// //     }
// //     return this.totalCookies;
// //   },
// //
// //
// //   render: function () {
// //     this.randCustPerHour();
// //
// //     var pEl = document.createElement('p');
// //     pEl.textContent = this.location;
// //     document.body.appendChild(pEl);
// //
// //     var ulEl = document.createElement('ul');  //could also create in sales.html and use id
// //     document.body.appendChild(ulEl);
// //
// //     for (var i = 0; i < hours.length; i++) {
// //       var liEl = document.createElement('li');
// //       liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
// //       ulEl.appendChild(liEl);
// //     }
// //
// //     var liEll = document.createElement('li');
// //     liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
// //     ulEl.appendChild(liEll);
// //
// //   }
// // };
// //
// // seaTacAirport.render();
// //
// // var seattleCenter = {
// //
// //   minCustPerHour: 11,
// //   maxCustPerHour: 38,
// //   avgCookiesPerCust: 3.7,
// //   cookiesSoldPerHour: [],
// //   location: 'Seattle Center',
// //   totalCookies: 0,
// //
// //   randCustPerHour: function() {
// //     for (var i =0; i < hours.length; i++) {
// //       var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
// //       console.log(randomCustomersPerHour);
// //       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
// //       this.cookiesSoldPerHour.push(cookiesPerHour);
// //     }
// //   },
// //
// //   sumTotal: function () {
// //     for (var i = 0; i < hours.length; i++) {
// //       this.totalCookies += this.cookiesSoldPerHour[i];
// //     }
// //     return this.totalCookies;
// //   },
// //
// //
// //   render: function () {
// //     this.randCustPerHour();
// //
// //     var pEl = document.createElement('p');
// //     pEl.textContent = this.location;
// //     document.body.appendChild(pEl);
// //
// //     var ulEl = document.createElement('ul');  //could also create in sales.html and use id
// //     document.body.appendChild(ulEl);
// //
// //     for (var i = 0; i < hours.length; i++) {
// //       var liEl = document.createElement('li');
// //       liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
// //       ulEl.appendChild(liEl);
// //     }
// //
// //     var liEll = document.createElement('li');
// //     liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
// //     ulEl.appendChild(liEll);
// //
// //   }
// // };
// //
// // seattleCenter.render();
// //
// // var capitolHill = {
// //
// //   minCustPerHour: 20,
// //   maxCustPerHour: 38,
// //   avgCookiesPerCust: 2.3,
// //   cookiesSoldPerHour: [],
// //   location: 'Capitol Hill',
// //   totalCookies: 0,
// //
// //   randCustPerHour: function() {
// //     for (var i =0; i < hours.length; i++) {
// //       var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
// //       console.log(randomCustomersPerHour);
// //       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
// //       this.cookiesSoldPerHour.push(cookiesPerHour);
// //     }
// //   },
// //
// //   sumTotal: function () {
// //     for (var i = 0; i < hours.length; i++) {
// //       this.totalCookies += this.cookiesSoldPerHour[i];
// //     }
// //     return this.totalCookies;
// //   },
// //
// //
// //   render: function () {
// //     this.randCustPerHour();
// //
// //     var pEl = document.createElement('p');
// //     pEl.textContent = this.location;
// //     document.body.appendChild(pEl);
// //
// //     var ulEl = document.createElement('ul');  //could also create in sales.html and use id
// //     document.body.appendChild(ulEl);
// //
// //     for (var i = 0; i < hours.length; i++) {
// //       var liEl = document.createElement('li');
// //       liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
// //       ulEl.appendChild(liEl);
// //     }
// //
// //     var liEll = document.createElement('li');
// //     liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
// //     ulEl.appendChild(liEll);
// //
// //   }
// // };
// //
// // capitolHill.render();
// //
// // var alki = {
// //
// //   minCustPerHour: 2,
// //   maxCustPerHour: 16,
// //   avgCookiesPerCust: 4.6,
// //   cookiesSoldPerHour: [],
// //   location: 'Alki',
// //   totalCookies: 0,
// //
// //   randCustPerHour: function() {
// //     for (var i =0; i < hours.length; i++) {
// //       var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
// //       console.log(randomCustomersPerHour);
// //       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
// //       this.cookiesSoldPerHour.push(cookiesPerHour);
// //     }
// //   },
// //
// //   sumTotal: function () {
// //     for (var i = 0; i < hours.length; i++) {
// //       this.totalCookies += this.cookiesSoldPerHour[i];
// //     }
// //     return this.totalCookies;
// //   },
// //
// //
// //   render: function () {
// //     this.randCustPerHour();
// //
// //     var pEl = document.createElement('p');
// //     pEl.textContent = this.location;
// //     document.body.appendChild(pEl);
// //
// //     var ulEl = document.createElement('ul');  //could also create in sales.html and use id
// //     document.body.appendChild(ulEl);
// //
// //     for (var i = 0; i < hours.length; i++) {
// //       var liEl = document.createElement('li');
// //       liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
// //       ulEl.appendChild(liEl);
// //     }
// //
// //     var liEll = document.createElement('li');
// //     liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
// //     ulEl.appendChild(liEll);
// //
// //   }
// // };
// //
// // alki.render();
