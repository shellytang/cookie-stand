var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']

var firstAndPike = {

  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  cookiesSoldPerHour: [],

  randCustPerHour: function() {
    for (var i =0; i < hours.length; i++) {
      // var randomCustomersPerHour = Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log(randomCustomersPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    //Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },

  sumTotal: function () {
    var sum = 0;
    for (var i = 0; i < hours.length; i++) {
      sum += this.cookiesSoldPerHour[i];
    }
    return sum
  },


  render: function () {
    this.randCustPerHour();
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'Data';
    document.body.appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +': ' + this.cookiesSoldPerHour[i];
      ulEl.appendChild(liEl);
    }

    var pEl = document.createElement('p');
    pEl.textContent = 'Total: ' + this.sumTotal();
    document.body.appendChild(pEl);

  }
};
//
firstAndPike.render();
