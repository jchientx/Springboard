// Same keys and values ES2015
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

console.log(createInstructor("James", "Hardon"));

// Computed Property Names ES2015
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

// Object Methods ES2015
const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  },
};

// createAnimal function
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}

const d = createAnimal("dog", "bark", "Woooof!");
console.log(d); // { species: 'dog', bark: [Function: bark] }
console.log(d.bark()); // Woooof!
