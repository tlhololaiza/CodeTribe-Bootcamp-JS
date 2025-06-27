
const robot1 = {
    color: "Red",
    action: "Stop!",
    doAction: function(){
        return this.action;
    }
}

const robot2 = {
    color: "Yellow",
    action: "Caution",
    doAction: function(){
        return this.action;
    }
}

const robot3 = {
    color: "Green",
    action: "GO!",
    doAction: function(){
        return this.action;
    }
}

console.log(robot1.color + " robot says: " + robot1.doAction());
console.log(robot2.color + " robot says: " + robot2.doAction());
console.log(robot3.color + " robot says: " + robot3.doAction());

function Robot(color, action) {
    this.color = color;
    this.action = action;
    this.doAction = function() {
        return this.action;
    }
}

const robot4 = new Robot("Blue", "Ready");

console.log(robot4.color, " robot says: ", robot4.doAction());

function Book(title, author, publishDate) {
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.getTitle = function(){
        return this.title;
    }
    this.getDetails = function() {
        return `${this.title} by ${this.author}, released on ${this.publishDate}`;
    }
}

const book1 = new Book("1984", "George Orwell", "June 8, 1949");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "July 11, 1960");

console.log(book1.getDetails());
console.log(book2.getDetails());
console.log("Title of book1: " + book1.getTitle());
console.log("Title of book2: " + book2.getTitle());



class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const mazda6 = new Car("Mazda", 2015);
console.log(mazda6.name);
console.log(mazda6.year);
console.log("Age of the car: " + mazda6.age());

document.getElementById("demo").innerHTML = JSON.stringify(book1);