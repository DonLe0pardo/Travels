"use strict";

// alert ( "Я JavaScript!" )



/* let name = "Джон";
let admin = name;

alert ( admin ); */



/*
 let name = prompt( "Как твоё имя?", "" )

 alert(name); */

/* 
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);


alert(a + b); // 12

*/
/*
let company = prompt('Какое «официальное» название JavaScript?', '');
if (company == "ECMAScript") {
	alert("Верно!")
}   else{
	alert("Не знаете? ECMAScript!");
}
*/


/*

let age = (14 || 90);

if (age == 14) {
  alert( 'bravo' );
}
if(age == 90){
	alert ("da");
}
else{
	alert("no");
}
*/

//if (age < 14 || age > 90);




//if (!(age >= 14 && age <= 90));

/*  //неверно
let entrance = prompt("Кто там?", " ");
if(entrance == "Админ") {
	alert("Пароль?");
}
if(entrance != "Админ"){
	alert("Я вас не знаю");
}
else{
	alert("Отменено");
};

let password = prompt("Пароль?", " ");

if(password =="Я Главный"){
	alert("Здравствуйте");
}
if(password !="Я Главный"){
	alert("Неверный пароль");
}
else{
	alert("Отменено");
};

*/

/*
let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

*/

/*
let num = 0;
while (num < 3){
	console.log(`Число: ${num}`);
	num++
}

*/


/*

//Задача №4. Прекратить работу цикла №1 когда size равна 1
//Цикл №1
сicleOne: for (let num = 0; num < 2; num++) {
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		if (size == 3){
			break сicleOne;
		}
		console.log(size);
		
	}
}

*/




/*
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) {
			continue firstFor;
		}
		console.log(size);
	}
}

*/




/*

let str = {};

str.test = 5;

alert(typeof str);

*/



/*
function hghghj() {
	let yyy = 1 + 2;
	console.log(yyy);

}
 hghghj();


*/



/*

window.addEventListener("scroll", function() {
	console.log("scrolled");
});


const testBtn = document.querySelector(".btn");


testBtn.addEventListener("click", function(){
	console.log("clicked");
});

testBtn.addEventListener("scroll", function(){
	checkScroll();
});

function checkScroll(){
	let scrollPoc = window.scrollY;
	if (scrollPoc > 0){
		btn.classList.add("red");
	} else{
		btn.classList.remove("red");
	}
}

*/


/*

for (let i < 0; i <= 10; i += 2) {


 console.log(i);
}

*/






    
 for (let arr = 0; arr <= 10; arr += 2){
 	console.log(arr);

 }


 

/*
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i in arr) {
      if (arr[i] % 2 == 0) {
      	console.log(arr);
      }
    }

*/


/*

let arr = [2, 10, 3, 1, 5, 6];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 == 0) {
  console.log( arr[i] );
}
 }



*/


    
