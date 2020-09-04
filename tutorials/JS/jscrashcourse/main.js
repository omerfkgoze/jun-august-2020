/*
const name = 'John';
const age = 30;

const hello = `My name is ${name} and I am ${age}`;

console.log(hello);


const fruits = ['apple', 'banana', 'pears'];


fruits[3] = 'grape';

fruits.push('ananas');

fruits.unshift('mango')

fruits.pop();


console.log(Array.isArray(fruits));

console.log(fruits);

console.log(fruits.indexOf('banana'))


const name = ['adam', 'mark', 'david'];

console.log(Array.isArray(name));



const person = {
  firstName : 'John',
  lastName : 'Duo',
  age : 30,
  hobbies : ['music', 'movies', 'sport'],
  address : {
    street : 'prenzlauer',
    city : 'Wandlitz',
    state :'BB'
  }
} 

  console.log(person.address.city);

person.email = 'johnduo@gmail.com';

console.log(person)

const { firstName, lastName, address: { street, city, state } } = person;

console.log(firstName, lastName, city); */


/*
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];

*/



/* 2 Array metodunun zincirlenmiş hali

const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
});

console.log(todoCompleted);
*/


/*
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted);
*/



/*
const todoText = todos.map(function(todo) {
  return todo.text;
})

console.log(todoText);
*/


/* 
todos.forEach(function(todo) {
  console.log(todo.text);
}); 

*/


/* Best for loop**********
 
  for(let T of todos) {
  console.log(T.text);
}
*/

/* 
  for(let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

let i = 0;
while ( i < 10 ) {
  console.log(`For Loop Number: ${i}`);
  i++;
}
*/


/*
const x = 10;
const y = 5;

if (x === 10) {
  console.log('x is 10');
} else if(x < 10) {
  console.log('x is less than 10');
} else {
  console.log('x is greater than 10');
}


if (x < 5 || y < 10 ) {
  console.log('x is less than 5 or y is less than 10');
};

if (x < 20 && y < 7) {
  console.log('x is less than 20 and y is less than 7');
}

if(x < 20) {
  if(y < 7)
  console.log('nesting');
}

*/

/**************** 
const x = 10;

const  color = x > 10 ? 'red' : 'blue';
// x ondan büyük ise red, değil ise blue
console.log(color);


switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}
*/

// Funcion

/*
function addNums (num1, num2) {
  console.log(num1 + num2);
}

addNums(5,4);


function addNums (num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}

addNums();


function addNums (num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addNums(5,5));
*/


/*
const addNums = (num1 = 1, num2 = 1) => {
  console.log(num1 + num2);
}

addNums(5,5);



const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5,5));



const addNums = num1 => num1 + 5;

  console.log(addNums(5));

*/

/*
 function x (q) {
   var asd = "";
   switch(q) {
     case 1:
       cevap = "alfa";
       break;
     case 2:
       cevap = "beta";
       break;
     default:
       cevap = "mal mısın aq";
       break;
   }
   return cevap;
 }

    console.log(x(3));

*/

/*
//  Constructor Funcion

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear;
  }
  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Prototype kodları, konsolda görünen bilgilerin sadeleştirilmesi için kullaılır. Ancak hemen altında bulunan kodlama yöntemi ile daha sade ve düzenli prototype oluşturmuş oluruz.(Class)
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

*/

/*
//Class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//Instantiate object
 const person1 = new Person('Ömer Faruk', 'Küçükgöze', '4-14-1997');
 const person2 = new Person('Eslem', 'Dericioğlu', '10-19-1998');


 console.log(person1,person2);  
 console.log(person2.dob.getFullYear());
 console.log(person1.getBirthYear());
 console.log(person2.fullName());

*/

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));


// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'mal';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover', (e) => {
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('header').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Fuck you</h1>';
// });

/*
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  console.log(nameInput.value);

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'amq çocuu doldursana';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);
    
    //Clear list
    nameInput.value = '';
    emailInput.value = '';
  
  }
}

*/









/* 
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/