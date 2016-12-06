'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']

var firstAndPike = {

  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  cookiesSoldPerHour: [],
  totalCookies: 0,
  location: '1st and Pike',

  randCustPerHour: function() {
    for (var i =0; i < hours.length; i++) {
      var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log(randomCustomersPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
  },

  sumTotal: function () {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
    return this.totalCookies
  },


  render: function () {
    this.randCustPerHour();

    var pEl = document.createElement('p');
    pEl.textContent = this.location;
    document.body.appendChild(pEl);

    var ulEl = document.createElement('ul');  //could also create in sales.html and use id
    document.body.appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEll = document.createElement('li');
    liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEll);

  }
};

firstAndPike.render();

var seaTacAirport = {

  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  cookiesSoldPerHour: [],
  location: 'Sea Tac Airport',
  totalCookies: 0,

  randCustPerHour: function() {
    for (var i =0; i < hours.length; i++) {
      var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log(randomCustomersPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
  },

  sumTotal: function () {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
    return this.totalCookies;
  },


  render: function () {
    this.randCustPerHour();

    var pEl = document.createElement('p');
    pEl.textContent = this.location;
    document.body.appendChild(pEl);

    var ulEl = document.createElement('ul');  //could also create in sales.html and use id
    document.body.appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEll = document.createElement('li');
    liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEll);

  }
};

seaTacAirport.render();

var seattleCenter = {

  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  cookiesSoldPerHour: [],
  location: 'Seattle Center',
  totalCookies: 0,

  randCustPerHour: function() {
    for (var i =0; i < hours.length; i++) {
      var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log(randomCustomersPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
  },

  sumTotal: function () {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
    return this.totalCookies;
  },


  render: function () {
    this.randCustPerHour();

    var pEl = document.createElement('p');
    pEl.textContent = this.location;
    document.body.appendChild(pEl);

    var ulEl = document.createElement('ul');  //could also create in sales.html and use id
    document.body.appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEll = document.createElement('li');
    liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEll);

  }
};

seattleCenter.render();

var capitolHill = {

  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  cookiesSoldPerHour: [],
  location: 'Capitol Hill',
  totalCookies: 0,

  randCustPerHour: function() {
    for (var i =0; i < hours.length; i++) {
      var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log(randomCustomersPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
  },

  sumTotal: function () {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
    return this.totalCookies;
  },


  render: function () {
    this.randCustPerHour();

    var pEl = document.createElement('p');
    pEl.textContent = this.location;
    document.body.appendChild(pEl);

    var ulEl = document.createElement('ul');  //could also create in sales.html and use id
    document.body.appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEll = document.createElement('li');
    liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEll);

  }
};

capitolHill.render();

var alki = {

  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  cookiesSoldPerHour: [],
  location: 'Alki',
  totalCookies: 0,

  randCustPerHour: function() {
    for (var i =0; i < hours.length; i++) {
      var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log(randomCustomersPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
  },

  sumTotal: function () {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
    return this.totalCookies;
  },


  render: function () {
    this.randCustPerHour();

    var pEl = document.createElement('p');
    pEl.textContent = this.location;
    document.body.appendChild(pEl);

    var ulEl = document.createElement('ul');  //could also create in sales.html and use id
    document.body.appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEll = document.createElement('li');
    liEll.textContent = 'Total: ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEll);

  }
};

alki.render();
