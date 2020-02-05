






var showOrder =function (){
var userOrder;
var numberOfImage;
var orderImage = '';
while(userOrder !=="house" && userOrder !== "hotel"){
    userOrder=prompt("please enter house or hotel !") ;
    numberOfImage=prompt("how many image do you want ?");
    for(var i=0 ; i<numberOfImage ;i++)
    {console.log("index is"+i);
        if (userOrder ==="house")
{orderImage=orderImage +'<img src="images/house.png">'   ;}
else if (orderImage ==="hotle")
{orderImage=orderImage +'<img src="images/hotle.png">';}
console.log(orderImage);
    }return orderImage;
}
}
document.write('<p>'+showOrder()+ '</p>' )







