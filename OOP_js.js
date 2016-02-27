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
