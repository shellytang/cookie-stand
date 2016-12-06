var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']

var firstAndPike = {

  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerHour: 6.3,
  cookiesSoldPerHour: [],
  total: 0,

  randCustPerHour: function() {
    for (var i =0; i < hours.length; i++) {
      var randomCustomersPerHour = Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    //Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },

  // total: function () {
  //   for (var i = 0;)
  // }// total function:

  render: function () {
    this.randCustPerHour();
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'Data';
    document.body.appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesSoldPerHour[i];
      ulEl.appendChild(liEl);

    }
  }
}

firstAndPike.render();
