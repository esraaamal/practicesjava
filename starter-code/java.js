var today =new Data();
var hourNow =today.getHours();
var greeting;
if (hourNow > 18) {
    greeting='good evennig!';
    
} else if(hourNow >12){
    greeting='good evennig!';
} else if(hourNow >0){
    greeting='good morning!';
}
else {
    greeting='welcome!';

}
document.write('<h3>' + greeting + '</h3>');
    
    
