function greatGreating(){
var hourNow;
hourNow=prompt('what is time now? 0-24');
var name ;
name= prompt('what is your name');
var greeting;
if (hourNow>0 && hourNow<=12)
{greeting='Good morning!';}
else if (hourNow>12 && hourNow<=18)
{greeting='Good afternon!';}
else if (hourNow>18 && hourNow<=24)
{greeting='Good night';}
else{greeting = 'welcome';
}

document.write('<h3>' + greeting + '  ' + name + '</h3>' )
}
greatGreating();
