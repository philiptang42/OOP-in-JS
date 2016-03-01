var james = {
    // add properties to this object!
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function() {
      console.log("Hello!")
    }
}

// create a "gabby" object using the Person constructor!
gabby = new Person("student", true)
----------------------------
var james = {
    job: "programmer",
    married: false,
    speak: function(mood) {
      if(mood === "great") {
        console.log("Hello, I am feeling great")
      } else {
        console.log("Hello, I am feeling just okay")
      }
    }
};

james.speak("great");
james.speak("just okay");
----------------------------
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
      console.log("Hi, I work as a " + this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer"

// james' second job
james.sayJob();
----------------------------
var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"
console.log(james[aProperty]);
----------------------------------
// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // should print "object"
console.log(typeof aNumber ); // should print "number"
console.log(typeof aString); // should print "string"
------------------------------
var myObj = {
  name: "Philip"

};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false
---------------------------------
var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty("shorts") === true) {
  console.log(suitcase.shorts)
} else {
  suitcase.shorts = "big shorts"
};
---------------------------------
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var property in nyc) {
  console.log(property);
};
