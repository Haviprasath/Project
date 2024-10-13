

function myfunc(){
    document.getElementById("demo").innerHTML="hi havi";
}

function display(){
    document.getElementById("demo").style.display="none";
}
console.log(5+6);
let x,y,z;
x=5;
y=10;
z=x+y;
console.log(z);
let a=3;//a=3.2,a="hello",a='s'
//a=10;
_b="hi";//it take underscore as idetifier 
console.log(a);
console.log(_b);
console.log(5*6+3);
let $s="john"+5+"dolly";
console.log($s);
//alert("hi");
const cars=["BMW","VOVLVO","TOYOTO"];

cars.push("honda");
cars.pop();
console.log(cars);
//create a const object
const car={type:"BMW",color:"white",model:"x500"};
console.log(car);
car.color="red";//prporty change
car.owner="havi";//proporty added
console.log(car);

const c=10;
{
    const c=5;
    
}
console.log(c);
var d=2;
var d=3;
console.log(d);
e="5";
f=5;
if(e==f){
    console.log(true);
}
else{
    console.log(false);
}

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
//let x = true;
//let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const ca = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let g=5;
g**=2;
console.log(  Math.pow(10,2)+g);

function product(num1,num2){
    return num1*num2;
}
console.log(product(5,2));

//convert to ferhenit to celcisu

function toCelsius(temp){
    return (5/9)*(temp-32);
}
console.log("the temperature is "+toCelsius(98.4)+"celsius");
let people={firstname:"havi",age:24,course:"csc"

};
console.log(people.age);
delete people["age"];
console.log(people);
let myobject={
    name:"havi",
    age:24,
    mycars:{
    car1:"bmw",
    car2:"toyota",
    car3:"volvo",
}
}
console.log(myobject.mycars.car2);

const person2={
    firstname:"sriharan",
    age:24,
    lastname:"haviprasath",
    fullname:function(){
        return (this.firstname+" "+this.lastname).toUpperCase();
    }

}
let text=" ";
for(let x in person2){
    text+=person2[x];
}
const person3 = {
    name: "John",
    age: 30,
    city: "New York"
  };
//array
const myarray=Object.values(person2);
// Stringify Object
let myString = JSON.stringify(person3);
document.getElementById("demo").innerHTML=myString;

function person4(fname,lname,age,eyecolor){
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
   this. eyecolor=eyecolor;
   this.fullname=function(){
    return "my father name is "+this.firstName+this.lastName;
   }

}
const father=new person4("Arasaratnam","sriharan",54,"black");
const Mother=new person4("sriharan","pathmapriya",46,"black");
document.getElementById("demo").innerHTML=father.fullname();

//console.log(document.getElementById("mybox").textContent="bye");

console.log(num1);
function answer(){
   const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);
    const result=num1+num2;
    document.getElementById("total").innerHTML=result;
}
function random(){
    let a=Math.random();
    return document.getElementById("number").innerHTML=Math.floor(a*10)+1;
}