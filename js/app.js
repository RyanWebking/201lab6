'use strict';

console.log('verify');

// var allStores = [];

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];


var firstPike = document.getElementById('firstandpike');

var storeOne = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlyCustomers: [],
  hourlySales: [],
  salesEstimate: function () {
    for (var i = 0; i < hours.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      console.log(randomCustomers);
      this.hourlyCustomers.push(randomCustomers);
    }
  },

  salesPerHour: function () {
    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      console.log(this.hourlyCustomers);
      console.log(this.avg);
      var cookiesPerHour = this.hourlyCustomers[i] * this.avg;
      console.log(cookiesPerHour);
      cookiesPerHour = Math.floor(cookiesPerHour);
      this.hourlySales.push(cookiesPerHour);
    }
  },

  rendor: function () {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      firstPike.appendChild(liEl);
    }
  }
};

storeOne.salesEstimate();
storeOne.salesPerHour();
storeOne.rendor();




console.log(storeOne);


var seaTac = document.getElementById('seatac');

var storeTwo = {
  name: 'Seatac Airport',
  location: '17801 International Blvd, Seattle, WA 98158',
  min: 3,
  max: 24,
  avg: 1.2,
  hourlyCustomers: [],
  hourlySales: [],
  salesEstimate: function () {
    for (var i = 0; i < hours.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      console.log(randomCustomers);
      this.hourlyCustomers.push(randomCustomers);
    }
  },

  salesPerHour: function () {
    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      console.log(this.hourlyCustomers);
      console.log(this.avg);
      var cookiesPerHour = this.hourlyCustomers[i] * this.avg;
      console.log(cookiesPerHour);
      cookiesPerHour = Math.floor(cookiesPerHour);
      this.hourlySales.push(cookiesPerHour);
    }
  },

  rendor: function () {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      seaTac.appendChild(liEl);
    }
  } 
};

storeTwo.salesEstimate();
storeTwo.salesPerHour();
storeTwo.rendor();


var seaCenter = document.getElementById('seattlecenter');

var storeThree = {
  name: 'Seattle Center',
  location: '305 Harrison St, Seattle, WA 98109',
  min: 11,
  max: 38,
  avg: 3.7,
  hourlyCustomers: [],
  hourlySales: [],
  salesEstimate: function () {
    for (var i = 0; i < hours.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      console.log(randomCustomers);
      this.hourlyCustomers.push(randomCustomers);
    }
  },

  salesPerHour: function () {
    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      console.log(this.hourlyCustomers);
      console.log(this.avg);
      var cookiesPerHour = this.hourlyCustomers[i] * this.avg;
      console.log(cookiesPerHour);
      cookiesPerHour = Math.floor(cookiesPerHour);
      this.hourlySales.push(cookiesPerHour);
    }
  },

  rendor: function () {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      seaCenter.appendChild(liEl);
    }
  }
};

storeThree.salesEstimate();
storeThree.salesPerHour();
storeThree.rendor();

var capHill = document.getElementById('capitolhill');

var storeFour = {
  name: 'Capitol Hill',
  location: '1520 Summit Ave, Seattle, WA 98122',
  min: 20,
  max: 38,
  avg: 2.3,
  hourlyCustomers: [],
  hourlySales: [],
  salesEstimate: function () {
    for (var i = 0; i < hours.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      console.log(randomCustomers);
      this.hourlyCustomers.push(randomCustomers);
    }
  },

  salesPerHour: function () {
    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      console.log(this.hourlyCustomers);
      console.log(this.avg);
      var cookiesPerHour = this.hourlyCustomers[i] * this.avg;
      console.log(cookiesPerHour);
      cookiesPerHour = Math.floor(cookiesPerHour);
      this.hourlySales.push(cookiesPerHour);
    }
  },

  rendor: function () {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      capHill.appendChild(liEl);
    }
  }
};

storeFour.salesEstimate();
storeFour.salesPerHour();
storeFour.rendor();

var alki = document.getElementById('alki');

var storeFive = {
  name: 'Alki',
  location: '2788, 2820 Alki Ave SW, Seattle, WA 98116',
  min: 2,
  max: 16,
  avg: 4.6,
  hourlyCustomers: [],
  hourlySales: [],
  salesEstimate: function () {
    for (var i = 0; i < hours.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      console.log(randomCustomers);
      this.hourlyCustomers.push(randomCustomers);
    }
  },

  salesPerHour: function () {
    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      console.log(this.hourlyCustomers);
      console.log(this.avg);
      var cookiesPerHour = this.hourlyCustomers[i] * this.avg;
      console.log(cookiesPerHour);
      cookiesPerHour = Math.floor(cookiesPerHour);
      this.hourlySales.push(cookiesPerHour);
    }
  },

  rendor: function () {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      alki.appendChild(liEl);
    }
  }
};

storeFive.salesEstimate();
storeFive.salesPerHour();
storeFive.rendor();



// function indiStore(store){
//   var cookieCount;
//   var cookieTotal;
//   for(var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     cookieCount = store.avg * getRandomNumber (store.min, store.max);
//     liEl.textContent = `${hours[i]}: ${cookieCount} cookies`;
//     cookieTotal += cookieCount;

//   }

//   liEl = document.createElement('li');
//   liEl.textContent = `Total: ${cookieTotal}`;
//   storeLists.appendChid(liEl);
// }


// function getRandomNumber (min, max) {
//   return Math.random() * max + min;
// }


