/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, "this" takes the value of the Window object, which displays ALL of the functions (and other Javascript resources) running.

* 2. If there is a dot before the function call (i.e. obj.functionCall), "this" takes the value of whatever is on the left of the dot. 

* 3. If a constructor function is utilized, then "this" takes the value of any specific objects that it creates.

* 4. You can use the methods call, apply, or bond to explicity attach a function to "this."
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function allTheThings() {
    console.log(this);
}

allTheThings();

// Principle 2

// code example for Implicit Binding

const myObj = {
    eminem: "My name is ",
    saySlimShady: function(name) {
        console.log(`${this.eminem} ${name}`);
    }
}

myObj.saySlimShady("Slim Shady");

// Principle 3

// code example for New Binding

function dogInHeat (name, mate) {
    this.name = name;
    this.mate = mate;
    this.puppies = Math.round(Math.random() * 10);
    this.mating = function() {
        console.log(`The unfixed dog named ${this.name} made ${this.puppies} puppies with ${this.mate}`);
        console.log(this);
    }
}

const mulder = new dogInHeat("Mulder", "Scully");
mulder.mating();

// Principle 4

// code example for Explicit Binding

function doWhatISay() {
    console.log(`Muahaha, obey me, #${this.number}! ${this.task} now!`)
}

let minion = {
    number: 1,
    task: "Make tacos"
};

doWhatISay.call(minion);