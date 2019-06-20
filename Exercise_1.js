/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/
var a = 12;
var b = 20;
var Sum = a + b;
console.log(Sum);
/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Create a variable named X containing the number 12
*/
var X = 12;
/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/
var name = "John Doe";

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/
var Diff = a - X;
console.log (Diff);
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/
var name1 = "john";
var name2 = "John";
if ( name1 != name2){
    console.log("the two variables are not equal");
}
if(name1.toLowerCase == name2.toLowerCase){
    console.log("Two variables are equal if both are lowercase")
}

console.log("i didn't edit the value of name2, i will print it for u my friend:" + name2);

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Create and array with the first 5 positive numbers
*/
posArray = [1, 2, 3, 4, 19384, -1, "Dude", "Awesome"];
console.log(posArray);
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/
var X = 200;
console.log("...calculating Input Information...");
console.log("...Your number...bzzzz...is: " + X);
console.log ("...Veryfing the number...bibubibup *robot sound*");
if (X < 0){
    console.log ("...Invalid Number...Too low to check...bibubip!");
}
    else if (X > 9){
        console.log ("...Invalid Number...Too high to check...* Explosion sound*\n")
    } else 
switch(x){
    case 1: 
    console.log("1 => one"); 
    break;
    case 2: console.log("2 => two"); 
    break; 
    case 3: console.log("3 => three"); 
    break; 
    case 4: console.log("4 => four"); 
    break; 
    case 5: console.log("5 => five"); 
    break; 
    case 6: console.log("6 => six"); 
    break; 
    case 7: console.log("7 => seven"); 
    break; 
    case 8: console.log("8 => eight"); 
    break; 
    case 9: console.log("9 => nine"); 
    break;
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Insert a value in a variable based on the resut of a ternary if
*/
console.log("\n...checking the variable a...");
  a == 2 ? console.log("...Correct number...bibup!")
         : console.log("...The number is not equal to two...bubip!");
/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create an object containing your name, surname, email address and age.
*/
console.log("...Elaborating your personal information...");
var personalData = {
    Name: "Luca",
    Surname : "Sorace",
    Email : "sorace.lc@gmail.com",
    Age : "24"
}
console.log(personalData);
console.log("...Now we know who you are...bip!...u can't run away...bibubip!\n");
/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
personalData.drivingLicense = true;
console.log(personalData);
console.log("...Driving License detected!...\n");


/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Remove to the previously created object the age
*/
delete personalData.Age;
console.log("...driving License deleted...\n");
console.log(personalData);

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a second object with name, surname, email address and verify that this object has a different email address
*/
notYourPersonalData = {
    Name: "Steve",
    Surname : "Jobs",
    Email : "sweety.Steve@Apple.com",
    Age : "Dead"
}
notYourPersonalData.Email == personalData.Email ? console.log("...Are you my father?...")
                                                : console.log("...U can't be my father!...\n");
/* WRITE YOUR CODE HERE */

/* EXERCISE 13 
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
var totalShoppingCart = 20; //Totale presente nel carrello
 var taxShipping = 10; // costo spedizione
 var totalCost
 var infoCost ={
     Articles : totalShoppingCart,
     shippingCost : "",
     totalOrder : "",
         
}

 //CALCOLO SE ACQUISTI SUPERIORI A 50
 if(totalShoppingCart > 50){
     infoCost.Articles = totalShoppingCart;
     infoCost.shippingCost = "0,00$";
     infoCost.totalOrder = totalShoppingCart;
     console.log(infoCost);
     console.log("Hi, I'm the Cute Salesman\n given your compulsive shopping problem, we will give you the shipping for free!\n");

 }else if(totalShoppingCart <= 50){
   infoCost.Articles = totalShoppingCart + "$";
   infoCost.shippingCost = taxShipping + "$";
   infoCost.totalOrder = totalShoppingCart + taxShipping +"$";
   console.log(infoCost);
   console.log("Hi, I'm the Cute Salesman\n Are you a little stingy eh? But don't worry, u can pay the shipping tax for us!\n");
 }


/* WRITE YOUR CODE HERE */

/* EXERCISE 14
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
var blackFriday = true;
var discount = totalShoppingCart * 20 / 100;
if(totalShoppingCart > 50 && blackFriday == true){
    infoCost.Articles = totalShoppingCart;
    infoCost.shippingCost = "0,00$";
    infoCost.totalOrder = discount;
    console.log(infoCost);
    console.log("Hi, I'm the Cute Salesman, today is the BLACK FRIDAY!we offer you a discount of 20%!\n");

}else if(totalShoppingCart <= 50 && blackFriday == true){
  infoCost.Articles = totalShoppingCart + "$";
  infoCost.shippingCost = taxShipping + "$";
  infoCost.totalOrder = discount + taxShipping +"$";
  console.log("\nHi, stingy man!\n today is Black Friday and we offer you a discount of 20%!\n");
  console.log(infoCost);

}
/* WRITE YOUR CODE HERE */

/* EXERCISE 15
You writing a very simple anti spam filter for your mailbox. In the variable emailContent you have the content of the email you are checking.
Check if the email is valid using regular expression. The email (in this example) if the words SPAM and SCAM does not appear.
*/
var Email_1 = "\nCome to buy our new and cutest RelaxCat!\n Now when you pet it, it also purrs! three new exclusive types!\n durability 5 years guranteed. don't let it escape. RelaxCat,\n a hope, a dream.\n This email may contain SPAM or SCAM contents\n";
var Email_2 = "\nHi Mr. Luca, SPAM ur exercises are ridiculous so u were kicked from Strive School. Greetings, everyone else\n";

var controlSpam = /SPAM/;
var controlScam = /SCAM/;
console.log(controlScam.test(Email_1));
console.log(controlSpam.test(Email_1));
console.log(controlScam.test(Email_2));
console.log(controlSpam.test(Email_2));

if(controlSpam.test(Email_1) == true || controlScam.test(Email_1) == true){

    if(controlSpam.test(Email_2) == true || controlScam.test(Email_2) == true){
        console.log("no email\n");
    }
}
if(controlSpam.test(Email_1) == true || controlScam.test(Email_1) == true){

    if(controlSpam.test(Email_2) == false && controlScam.test(Email_2) == false)
        console.log(Email_2);
}

if(controlSpam.test(Email_1) == false && controlScam.test(Email_1) == false){

    if(controlSpam.test(Email_2) == true || controlScam.test(Email_2) == true)
        console.log(Email_1);
}
if(controlSpam.test(Email_1) == false && controlScam.test(Email_1) == false){

    if(controlSpam.test(Email_2) == false && controlScam.test(Email_2) == false)
        console.log(Email_2);
        console.log(Email_1);
}







/* WRITE YOUR CODE HERE */

/* EXERCISE 16
Create an object rapresenting an car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
var car1 = {
    brand : "Audi",
    model : "R8",
    licensePlate : "AB123CD",
}
var car2 = {
    brand : "Audi",
    model : "R8",
    licensePlate : "GH503GO",
}
var car3 = {
    brand : "Audi",
    model : "R8",
    licensePlate : "OC502FH",
}

var car4 = {
    brand : "Audi",
    model : "R8",
    licensePlate : "QO501CH",
}
var car5 = {
    brand : "Audi",
    model : "R8",
    licensePlate : "BC084TH",
}
/* WRITE YOUR CODE HERE */

/* EXERCISE 17
Create a new array called carsForRent containing all the cars from the previous exercise
*/
var carsForRent = [car1, car2, car3, car4, car5];
console.log(carsForRent);
/* WRITE YOUR CODE HERE */

/* EXERCISE 18
Remove the first and the last car from the carsForRent array.
*/
carsForRent.pop("car1");
carsForRent.pop("car5");
console.log(carsForRent);

/* WRITE YOUR CODE HERE */

/* EXERCISE 19
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
console.log(carsForRent[0]);
console.log(carsForRent[1]);
console.log(carsForRent[2]);
/* WRITE YOUR CODE HERE */

/* EXERCISE 20
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
var saleCar1 = {
    brand : "FIAT",
    model : "PANDA",
    licensePlate : "RO504TO",
}
var saleCar2 = {
    brand : "ALFA ROMEO",
    model : "GIULIETTA",
    licensePlate : "BH502TO",
}
var saleCar3 = {
    brand : "WOLKSWAGEN",
    model : "GOLF",
    licensePlate : "S174RG"
}

var carsForSale = [saleCar1, saleCar2, saleCar3];
var totalCars = carsForRent.length + carsForSale.length;
console.log("total car: " + totalCars);
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/