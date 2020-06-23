class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi. I am ${this.name}!`;
    }
    getDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
}
  // subclass Student of the Person Class 
class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
    // check if student has a major
    hasMajor() {
      return !!this.major;
    }
    getDescription() {
      let description = super.getDescription();
  
      if (this.hasMajor()) {
        description += ` My major is ${this.major}.`;
      }
  
      return description;
    }
}

// Test the Student class instances
// const me = new Student('Andi Ann', 26, 'Computer Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

//subclass Traveler of the Person Class
class Traveler extends Person { 
    constructor (name, age, homeLocation) { 
        super(name, age); 
        this.homeLocation = homeLocation; 
    }
    getHomeLocation() { 
        let location = super.getGreeting();
        if (this.homeLocation) { 
            location += ` I'm visiting from ${this.homeLocation}.`; 
        } 
        return location; 
    }
}

// Test the Traveler class instances
const me = new Traveler('Andi Ann', 26, 'Portland');
console.log(me.getHomeLocation());
const other = new Traveler(undefined, undefined, 'anonymous location');
console.log(other.getHomeLocation());