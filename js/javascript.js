 //=> back to all html pages 
document.write("helslo");


 //=> when i click id "btn" print in id "res"  =>>>> hello js
document.getElementById("btn").onclick=function(){

    document.getElementById("res").innerHTML="hello js";

}
 //=> f12 shurtcuts + we can use alert ("");
console.log("console print");
console.log(1+2);                      //3  console.log("1+2") =>  1+2 ;          

 //=>all code lignes named statement


 //variable
 var x=5;
 console.log(x);

//find data type  function "typeof"
    

// object
var  obj = {
    name:"ska",
    age:33
}
console.log (obj.name , obj.age);         //ska , 33
console.log(obj["name"] ,obj["age"] );    //ska , 33

//undefined
var y;
console.log(y);                         // undefined result

//=============================================================================================
//operators//
// Arthematic Operator + - * / % ++ -- ** + -
var x=7 , y =3;

console.log(x+y);                         //10
console.log(x%y);                         //1  rest of devision

// var x=3 , y =7;  console.log(x%y);     //3  result small number will be 3
// x++ post increment  x=x+1
// ++x //pre increment
// x** 2 //                                7*7
//console.log(+3);                         3            
//console.log(-3);                         -3
//console.log(+"3");                       convert any data not number to number will be 3
//console.log(+true);                      1
//console.log(+false);                     0
//x + =1  ===   x= x + 1   ===   x++
//x - =1  ===   x= x - 1   ===   x--


// Logical Operator && || !

var s=5;d=7;
// if Condition
//if (s==5)   if (s==5) && (d==7)   if (s==5)|| (d==7)  if (!(s==5) )     

// Switch

switch (s) {
    case 5:
        console.log("yes");
        break;

    case 7:
        console.log("no");
        break;
        
    default:
    console.log("wrong");
        break;


}                                    // yes
//=============================================================================================
// Function Definition  

function log() {
var a =3;
var b=4;
console.log(a+b);
}

// Function call
log();                                //7





function log(d,c) {

    console.log(d+c);
}
 
log(9,6);                             //15
    
// Function Return

function returndata() {
    z=2;
    return z;
    
}
var ff = returndata();
console.log(ff);                        //2

// Function Expression
var fn = function () {
    console.log( "Expression Function");  
}
fn();                                    //Expression Function
var fn2 = function test () {             //Expression Function2
    console.log( "Expression Function2");  
}
fn2();                                    //Expression Function best solution bcz if we have error name of funtion will be mention

// Immediately invoked function expression  IIFE  funtion run automatic without call
(
    function automatic() {
    console.log("automatic");
    }

)   
();

// Events
// - mouse events


var butn2=document.getElementById('btn2');
var resid =document.getElementById('res');
function test33 () {
    resid.innerHTML="action2";                           //click write hoveraction2
}
butn2.onclick = test33 ;                               // action automaticif without () so call without ()
    

// - keyboard events
var inputt= document.getElementById('input'); 
var keyupp= function test35() {console.log("hello2");}
var keyupp2= function test35() {console.log("hello3");}

          //method1
inputt.onkeypress = keyupp;
           //method2
inputt.addEventListener( 'keyup', keyupp2  ) ;    

// - window load event

// window.onload=function aa() {                               //alert hello when load page 
//     alert("helloooooooo");
    
// }



// Loop iteration ====>  initialization - condition - update

// - for loop
for (var i = 0; i <= 5; i++) {
   console.log(i);                  // 0 - 1 - 2 - 3 - 4 -5
    
}


// - while loop
var i =0;
while (i<=5) {
    console.log(i);                // 0 - 1 - 2 - 3 - 4 -5
    i++;
}

// - do while 
var i =0;
do {
    console.log(i);   
    i++;               // 0 - 1 - 2 - 3 - 4 -5
    
} while (i <=5);