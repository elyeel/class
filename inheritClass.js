// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, hobbies) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.hobbies = hobbies;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

  hobby() {
    return `My hobbies are: ${this.hobbies}`;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }

  // student bios include a bit more info
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }

}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

let student1 = new Student('Steven', "Spend the day running aroung");
console.log(student1);
student1.hobbies = "Modifying things";
console.log(student1.hobby());
const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());
const james = new Student('James Lin', "I like to translate problems into coding");
console.log(james.bio());

james.enroll("august")
console.log(james.name);
console.log(james.cohort);
james.friend = "Kenny";