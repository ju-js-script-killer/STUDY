/* Lesson 3. Conditionals. 3. Flowchart to code */
var price = 15.00; // price of the hammer
var money = 20.00; // the amount of money I have
if ( money >= price){
  console.log("buy a hammer");
} else {
  console.log("don't buy a hammer");
}

/* Lesson 3. Conditionals. 4. If ... else statements */
var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}
/* Example #2 with 2 else if */
var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
}
 else if(position === 2) {
  medal = "silver";
}
 else if(position === 3) {
  medal = "bronze";
}
 else {
  medal = "pat on the back";
}
console.log(runner + " received a " + medal + " medal.");

/* lesson 3. 6. Quiz: even or odd */
var number = 12 % 3;
if (number === 0) {
  console.log("even");
}
else {
console.log("odd");
}

/* lesson 3. 7. Quiz: musical group */
var musicians = -10;
if (musicians === 1) {
    console.log ("solo");
}
else if (musicians === 2) {
    console.log("duet");
}
else if (musicians === 3) {
    console.log("trio");
}
else if (musicians === 4) {
    console.log("quartet");
}
else if (musicians <= 0) {
    console.log("not even a group");
}
else {
    console.log ("this is a large group");
}
