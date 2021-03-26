var name1=prompt('waht is your Name?');
var age=prompt('year of porn ?');

let myAge=document.getElementById('click1');
var today =new Date();

 var hourNow=today.getHours();
 console.log(hourNow)
 var greeting;
 let agePerson=today.getFullYear()-age;

// console.log(agePerson);
console.log(today.getFullYear());



 if(hourNow>18){
     greeting="Good evening!"
 }
else if(hourNow>12){
    greeting="Good afternoon!"
}
else if(hourNow>0){
    greeting="Good morning!"
}
else{
    greeting="Welcome!"
}

document.write('<h3>'+greeting+ " "+name1+'</h3>')


function myFun(){
    myAge.innerHTML=name1+' Your age is: '+agePerson;
  
}


