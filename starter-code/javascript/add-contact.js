

var showOrder =function (){
    var userOrder;
    var numberOfImage;
    var orderImage = '';
    // userOrder=prompt("please enter house or hotel !");
    while(userOrder !=="house" && userOrder !== "hotel"){
        userOrder=prompt("please enter house or hotel !") ;
    }
        numberOfImage=prompt(`how many ${userOrder} do you want ?`);
        for(var i=0 ; i<numberOfImage ;i++){
        
            // console.log("index is"+i);
         if (userOrder ==="house"){
    orderImage=orderImage +'<img src="images/house.png">';
}
    else if (userOrder ==="hotel")
    {orderImage=orderImage +'<img src="images/hotel.png">';}
    console.log(orderImage);
        }
        
        
        return orderImage;
   
    }
    document.write('<p>'+showOrder()+ '</p>')
    let numberImg=document.images.length;
    console.log(numberImg)

    document.write('<p>'+`Number of Images : ${numberImg}`+'</p>');
    






