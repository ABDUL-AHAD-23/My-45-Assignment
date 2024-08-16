/*// task 2; Personal Message:
   let sir : string = "hi! sir Asarib ali, can you teach me front end development?"
 console.log(sir);


// task 3; Name Cases:
 let  sirname : string = "sir okasha";
 console.log("lowercase:",sirname.toLowerCase());
 console.log("uppercase:",sirname.toUpperCase());
 console.log("tittlecase:",sirname.charAt(0).toUpperCase() + sirname.slice(1).toLowerCase());


// task 4; Famous Quote:
 let  quote : string = "Stand with anybody that stands RIGHT. Stand with him while he is right and PART with him when he goes wrong.";
 let  author : string = "Abraham Lincoln";
 console.log(author,";"  + " says " + quote);


// task 5; Famous Quote 2:
 let  famous_person : string = "Abraham Lincoln";
 let  message : string = (famous_person) + " says " + (quote);
 console.log(message);


// task 6; Stripping Names:
 let  myname : string = "\t\n abdul ahad \n\t ";
 console.log("Original :",myname);
 console.log("Stripping  :",myname.trim());


// task 7; Number Eight: (addition, subtraction, multiplication, and division operations that each result in the number 8).
 let  num_1 : number = 2;
 let  num2 : number = 6;
 console.log(num_1 + num2);


// task 8; Number Eight:
 console.log("Addition:",5 + 3);
 console.log("Subtraction:",15 - 7);
 console.log("Multiplication",4 * 2);
 console.log("Division",16 / 2);


// task 9; Favorite Number:
 let  fav_num : number = 7;
 console.log("My favorite number is " + fav_num + ".");
 

// task 10; Adding Comments:
 // name : [abdul ahad]
 // date : [sundy , MAY 19 , 2024]


// task 11; Names (array):
 let  guestnames : string[] = ["Abdul Ahad","Shayan","Qasim","Sajid","fakhir","Ali","Hasseb"];
 console.log(guestnames[0]);
 console.log(guestnames[1]);
 console.log(guestnames[2]);
 console.log(guestnames[3]);
 console.log(guestnames[4]);
 console.log(guestnames[5]);
 console.log(guestnames[6]);


// task 12; Greetings (array):
 let  names : string[] = ["Abdul Ahad","Shayan","Qasim","Sajid","fakhir","Ali","Hasseb"];
 console.log("Dear " + names[0] + " , I am inviting you to my party");
 console.log("Dear " + names[1] + " , I am inviting you to my party");
 console.log("Dear " + names[2] + " , I am inviting you to my party");
 console.log("Dear " + names[3] + " , I am inviting you to my party");
 console.log("Dear " + names[4] + " , I am inviting you to my party");
 console.log("Dear " + names[6] + " , I am inviting you to my party");
 console.log("Dear " + names[5] + " , I am inviting you to my party");


// task 13; Your Own Array:
 let  transport : string[] = ["Honda","Audi","BMW","Roll-Royce","Ferrari","Citroen"];
 console.log("I would like to own a " + transport[0] + " motorcycle.");
 transport.map(transport => console.log("I would like to own a " + transport + " car."));


// task 14; Guest List:
 let  guestlist : string[] = ["Abdul Ahad","Shayan","Qasim","Sajid","fakhir","Ali","Hasseb"];
 guestlist.map(guestlist => console.log("Dear " + guestlist + " , I am inviting you to my party"));


// task 15; Changing Guest List:
 let  oldguestlist : string[] = ["Abdul Ahad","Shayan","Qasim","Sajid","fakhir","Ali","Hasseb"];
 let  cannotattend : string = "Abdul Ahad";
 console.log(cannotattend," can not attend dinner");
 let newguest : string = "Asif";
 oldguestlist [oldguestlist.indexOf(cannotattend)] = newguest
 oldguestlist.map(oldguestlist => console.log("Dear ",oldguestlist," I am inviting you to my party"));


// task 16; More Guests:
 let  old_guestlist : string[] = ["Abdul Ahad","Shayan","Ali","Hasseb"];
 old_guestlist.map(ooldguestlist => console.log("hi guys ", ooldguestlist ," i am invited more friend so,I am book room 66 to 70 in PC hotel"));
 console.log( "                                                                   " );
 // add more guest
 old_guestlist.push("Asif")
 old_guestlist.unshift("Mukarram")
 old_guestlist.splice(3,0,"Faisal")
 old_guestlist.map(ooldguestlist => console.log("Hi dudes ", ooldguestlist,",", " I am inviting you to my party "));
 


// task 17; Shrinking Guest List:
 let  oldguest_list : string[] = ["Abdul Ahad","Shayan","Ali","Hasseb"];
 while (oldguest_list.length > 2) {
  let removegust = oldguest_list.pop()
  console.log("Dear",removegust,"you are not invited in party");
 }
 oldguest_list.map(oldguest_list =>console.log("Dear",ooldguestlist,"you are invited in party"));


// task 18; Seeing the World:
let  places : string[] = ["London","Paris","Tokyo","New York","Dubai"];
 console.log("original order;",places);
 console.log("Alphabetical order;",places.sort());
 console.log("original order;",places);
 console.log("reverse alphabetical;",places.sort().reverse());
 console.log("original order;",places);
 places.reverse();
 console.log("reversed order;",places);
 places.reverse();
 console.log("sorted alphabetically;",places);
 places.sort().reverse();
 console.log("sorted in reverse alphabetical order",places);


//task 19; Dinner Guests:
 let  ooldguestlist : string[] = ["Abdul Ahad","Shayan","Ali","Hasseb"];
 let count_invitation : number = ooldguestlist.length
 console.log("I am inviting",count_invitation,"guests to my party");



// task 20; Think of something you could store in a array.
 let  cities : string[]=["paris","Venice","Istanbul","Tokyo","Rome"];
 console.log("list of city",cities);


//task 21; Write a program that creates TypeScript Objects containing these items.
let  DETAIL : {
  name:string,
  Date_of_birth:string | number,
  First_theory:string,
  Last_research:string,
  Age:number,
  Date_of_death:string | number
} = {
  name:"Elbert einstein",
  Date_of_birth:"March 14 1879",
  First_theory:"Special Relativity",
  Last_research:"Unified Field theory",
  Age:76,
  Date_of_death:"April 18 1955"
};
 console.log(DETAIL);


 // task 22; Intentional Error:
 let grocery :string[]=["OIL","RICE","FLOUR","DAL","BLACK PAPER"]
 console.log(grocery[5]);
 console.log(grocery[4]);


// task 23; Conditional Tests:

 let car = "BMW"
 console.log(car == "BMW"? "True":"False");

 let fruit = "Apple"
 console.log(fruit == "22"?  "True":"False");

 let Age = 15
 console.log(Age == 15? "True":"False");

 let sir_name = "okasha"
 console.log(sir_name == "asarib"? "True":"False");

 let month = "july"
 console.log(month == "july"? "True":"False");

 let Fav_places ="Makkah" && "Madina" && "Karbala"
 console.log(Fav_places == "Privilage" || Fav_places == "Makkah" ? "True":"False");

 let num = 10
 console.log(num > 10 || num < 10 || num == 10 ? "True":"False");

 let days = "sunday"
 console.log(days == "monday" || days == "friday" ? "True":"False");

 let year = 2000
 console.log(year == 2000 && year < 2000 || year == 2024);

 let laptop_brand = "dell"
 console.log(laptop_brand == "dell"? "True":"False");


// task 24; More Conditional Tests:
 let name1 = "Abdul Ahad"
 let name2 = "Ahad"
 let name3 = "abdul ahad"

 if (name1 == name1) {
  console.log("name is euqal");
 }else if (name1 == name2) {
  console.log("name is equal");
 } else if (name1 == name3) {
  console.log("name is equal");
 }else {
  console.log("NAME IS NOT EQUAL");
 }

 let age = 15

 if (age > 18) {
  console.log("you are adult");
 }else if (age < 18) {
  console.log("you are minor");
 }else {
  console.log("go back");
 }
 
 let num1 = 20

 if (num1 >= 20) {
  console.log("YOU HAVE ",num1 ," RUPEES CASH");
 }else if (num1 <= 20 ) {
   console.log("YOU HAVE ",num1 ," RUPEES CASH");
 }else{
  console.log("you have no cash");
 }

 let firstname = "Abdul Ahad"
 let password = "2009"

 if (firstname == "Abdul Ahad" && password == '2009'){
  console.log("login succesfully");
 }else if (firstname == "abdul ahad" || firstname == "Abdul Ahad") {
  console.log("login succesfully");
 }else{
  console.log("login failed");
 }

 let country : string[]= ["Amrica","india","Canada","itly","south korea"]
 if (country.includes("south korea")) {
  console.log("south korea is famous for his dramas");
  
 }
// task 25; Alien Colors #1:
 let Alien_Colors = "Green"

 if (Alien_Colors == "Green") {
  console.log("the player just earned 5 points");
 }else{
  console.log("you loss");
 }

// task 26; Alien Colors #2:
 let Alien_Colors2 = "Yellow"

 if (Alien_Colors2 == "Green") {
   console.log("the player just earned 5 points");
 }else if (Alien_Colors2 == "Yellow") {
   console.log("the player earned 10 points");
 }else{
   console.log("you loss");
 }
 

// task 27; Alien Colors #3:
 let Alien_Colors3 = "Red"

 if (Alien_Colors3 == "Green") {
   console.log("the player just earned 5 points");
 }else if (Alien_Colors3 == "Yellow") {
   console.log("the player earned 10 points");
 }else if (Alien_Colors3 == "Red") {
  console.log("the player earned 15 points");
 }else{
   console.log("you loss");
 }
 

// task 28; Stages of Life:

let AGE = 16

if (AGE <= 2) {
  console.log("You're a cute baby");
}else if (AGE == 2 || AGE < 4) {
  console.log("You're a happy toddler");
}else if (AGE == 4 || AGE < 13) {
  console.log("You're a naughty kid");
}else if (AGE == 13 || AGE < 18) {
  console.log("You're a young teenager");
}else if (AGE == 18 || AGE < 60) {
  console.log("You're a Adult");
}else if (AGE == 60 || AGE > 60) {
  console.log("You're a an older"," MASHALLAH alive in this age");
}else{
  console.log("invalid age");
}


// task 29; Favorite Fruit:
let fav_fruit :string[]=["apple","banana","cherry","pin-e-apple"]
if (fav_fruit.includes("apple")) {
  console.log("One apple daily is good for health");
} else if (fav_fruit.includes("banana")) {
  console.log("banana is best for increas level of protine in our body");
}else if (fav_fruit.includes("cherry")) {
  console.log("cherry is best for increas level of blood in our body");
}else if (fav_fruit.includes("pin-e-apple")) {
  console.log("pin-e-apple is good for decreas cancer risk");
}else {
  console.log("unknown fruit benefit");
}


// task 30; hello admin:
 let web_users : string []=["admin","ahad","shayan","ubaid"]

 for (let user of web_users) {
      if (user==="admin") {
        console.log("hello ",user," would you like see a report of online shop");
      }else{
        console.log("hello ",user," thank you for login, what's you like buy today ");
      }
 }
 

// task 31; No Users:
 let users : string []=[""]
 if (users.length===0) {
  console.log("we need to find some users");
  } for (let user of users)
    if (user==="admin") {
      console.log("hello ",user," would you like see a report of online shop");
    }else{
      console.log("hello ",user ," thank you for login, what's you like buy today ");
  }


// task 32' Checking Usernames:
let current_user : string []=["ahad","shayan","ubaid","admin"]
let new_user : string[]=["asif","amir","ubaid","fakhir","zarbab"]
for (let user of new_user){
  if (current_user.includes(user)){
    console.log("user name is already taken");
  } else{
    console.log("user name is available");
  }
}


// task 33; Ordinal Numbers:
let numbers : number []=[1,2,3,4,5,6,7,8,9]
for (let number of numbers) {
  if (number===1) {
    console.log(number+"st");
    } else if (number===2) {
      console.log(number+"nd");
      } else if (number===3) {
        console.log(number+"rd");
        } else {
          console.log(number+"th");
          }
}


// task 34; fav pizza:
let fav_pizza : string []=["veg.","chees","chicken","B.B.Q"]
fav_pizza.forEach(pizza => {
  console.log("i like ",pizza," pizza");
})
console.log("I like pizza but not extremely");


// task 35; Animals:
let animals : string []=["sugar glinder","cat","rabbit","koala"]
for (let animal of animals) {
  console.log(animal)
}
console.log('\n')
for (let animal of animals){
  console.log(animal+"is mot cute animal");
}
 console.log('\n all of this good pets but extremly like',animals[0]);
 

// task 36; T-Shirt #1:
function Tshirt (size:string, text:string):void {
  console.log('I am order',size ,"shirt that say",text);
}

Tshirt("Medium","I love typescript");
Tshirt("Large","focus on your goal");


// task 37; T_shirt #2:
function T_shirt (size:string="small", text:string="I LOVE MYSELF"):void {
  console.log('I am order',size ,"shirt that say",text);
}
T_shirt();
T_shirt("Medium","Don't fall in love because it's not a function of your age");
T_shirt("Large","focus on your goal");


// task 38; cities:
function describing_city (city:string, country:string="pakistan"):void {
  console.log(city ,"is in",country);
}
describing_city("Karachi");
describing_city("Paris","europe");
describing_city("Swat","KPK");


//task 39; cities #2:
function city_country (city:string, country:string):string {
  return `${city},${country}`
}
  let c1: string = city_country('Edinburgh','Scotland');
  let c2: string = city_country("Verona","Italy");
  let c3: string = city_country("Aomori","Japan");

console.log(c1);
console.log(c2);
console.log(c3);



// task 40; album:
function make_album(Artist:string, title: string, track:number):object {
  let album = {Artist,title,track};
    if (track !== undefined) {
      album.track = track;
    }
    return album;
}

console.log(make_album("Arjit Singh", "Soulful",2));
console.log(make_album("Atif aslam", "Rafta Rafta", 1));



// task 41; Magicians:
// Create an array of magician's names
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

 const magicians: string[] = ["David Copperfield", "Dynamo", "Penn and Teller"];
 show_magicians(magicians);


// task 42; Great Magicians:

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
   magicians[i]= "The great magician " + magicians[i]
  }
}

const magicians1 : string[] = ["David Copperfield", "Dynamo", "Penn and Teller"];
make_great(magicians1);
show_magicians(magicians)

// task 43; Unchanged Magicians:
function make_great2(magician:string[]): string[] {
    const greatmagician :string[] = [];
    for (let i = 0; i < magician.length; i++) {
        greatmagician.push("The great "+magician[i] );
        
    }
    return greatmagician;
}

const magician3 : string[] = ["David Copperfield", "Dynamo", "Penn and Teller"];
const greatmagician = make_great2(magician3);
show_magicians(magician3)
show_magicians(greatmagician)


// task 44; sandwich:
function makeSandwich(item: string[]): void {
        console.log("Making sandwich with following items:");
     for (let i = 0; i < item.length; i++) {
        console.log(`-${item[i]}`);
        
  }
}

makeSandwich(["bread", "cheese", "tomato"]);
makeSandwich(["meat slice","butter"])
makeSandwich(["souces"])
console.log("your sandwich is ready");

// task 45; car:

type car = {
    manufactor: string,
    model: string,
    [key: string]:any
}

function mycar(manufactor: string, model:string, optional: Record<string, any>): car {
    return{
        manufactor,
        model,
        ...optional
        
    }
}
const myNewCar = mycar("toyota", "camry", {color: "black", year:2024});
console.log(myNewCar); */
