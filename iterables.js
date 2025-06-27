
for(let i=0; i<2; i++){
    console.log("The value of i is: ",i);
}


for(let j=20; j>0; j--){
    console.log("The value of j is: ",j);
}


let students = ["Tsholo", "Bonolo", "Lindiwe", "Bontle", "Ofenste"];

for(let i=0; i<students.length; i++){
    
    console.log(students[i]);
} 



for(let r=0; r<5; r++){
       str = "";
       for(let c=0; c<5; c++){
              str += "*";
       }
       console.log(str);
}



const person = {
    firstName: "Tlholo",
    surname: "Tshwane",
    age: 22,
    heightInMeters: 1.754,
    greet: ()=>{
        return "Hello World!";  
    }
}

console.log(person.firstName);

//let txt = ""
for(let x in person){
    if(typeof person[x] !== "function"){
        txt += person[x] + " ";
    }
}

console.log(txt);


const dailyTemp = {
    Monday: 22,
    Tuesday: 25,
    Wednesday: 24,
    Thursday: 19,
    Friday: 20,
    Saturday: 21,
    Sunday: 26,
    NextModay: 23,
    NextTuesday: 22,
    NextWednesday: 24,
    NextThursday: 25,
}

//let i=0
for(let day in dailyTemp){
    
    for(; i<dailyTemp[day]; i++){
            
        if(dailyTemp[day] > 22){
            console.log(`The temperature on ${day} is ${dailyTemp[day]} degrees Celsius`);
        }   
            
    }
    
}

console.log("There are", i, "days with a temperature above 22 degrees Celsius.");


/*
FOR..OF Loops through the values of an iterable object (like arrays, strings, etc.)

for(variables of iterable){
    // code block to be executed
}

*/


const cities = ["Vryheid", "Durban", "Polokwane", "Pretoria"]
const hometown = cities[0]

let text = "";

for(let location of cities){
    console.log(location);
}

let city = ""
for(let character of hometown){
    console.log(character); 
}


//Secondtype of Loops, unkwn length iterable objects
/*
while(condition){
    // code block to be executed    
}    
*/

//count down from 10 to 0

let count = 10; 
while(count > 0){
    console.log(count);
    count--;
}

console.log("Blast off!");



let input="";
while(input !== "exit"){
    input = prompt("What is your name? (type 'exit' to quit)");
    if(input !== "exit"){
        console.log("Hello, " + input + "!");
    }
}


/*
DO WHILE
do {
    // code block to be executed
}   while(condition);
// The code block will always execute at least once, even if the condition is false.        
*/

let txt = "";
let i = 0;
do {    
    txt += "<br>The number is " + i;
    i++;
} while(i < 10); 

console.log("Count has reached 5, exiting loop.");



 






