var john = {
    name: 'John',
    birth: 1990,
    job: 'teacher'
};

var Person = function(name, birth, job) {
    this. name = name;
    this.birth  = birth;
    this.job = job;
   
}

Person.prototype.calculate = function () {
        console.log(2019 - this.birth);
    }


var john = new Person('John', 1990, 'teacher'); 
var mark = new Person('mark', 1982, 'president');
var jane = new Person('designer', 1985, 'president');

john.calculate();
mark.calculate();
jane.calculate();

/*..................................................*/

var Car = function(acceleration, fuel, colour, year) {
    this.acceleration = acceleration;
    this.fuel = fuel;
    this.colour = colour;
    this.year = year;
    
}

Car.prototype.calc = function() {
    console.log(2019 - this.year)
}

var mazda = new Car('front', 'petrol', 'red', 2013);
var volvo = new Car('back', 'diesel', 'blue', 2018);

mazda.calc();
volvo.calc();

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* object.create*/

var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var tom = Object.create(personProto);
tom.name = 'Tom';
tom.yearOfBirth = 1980;

var sam = Object.create(personProto, {
    name: {value: 'Sam'},
    yearOfBirth: {value: 1998},
    job: {value: 'teacher'}
})



/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>?*/
/* callback function */
var years = [1990, 2000, 1980, 1985, 2006];

function arrayCalc(arr, fn) {
    var arrRes = [];
    
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2019 - el;
}


function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <=81) {
    return Math.round (206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}


var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);



console.log(ages);
console.log(fullAges);
console.log(rates);













