let age = +prompt("Write your age, please: ");

if (0 <= age && age <= 12) {
    console.log("You are child");
} else if (13 <= age && age <= 18) {
    console.log(" You are teenager");
} else if (19 <= age && age <= 60) {
    console.log("You are adult");
} else if (61 <= age && age <= 118) {
    console.log("You are old");
} else if (age >= 119) {
    console.log("Are you dinosaur???");
} else {
    console.log("Wrong answer!");
}
