function ticket(){
    addElementById("seatsBookingPage");
}

function baught(){
    hideElementById("start");
    addElementById("end");
}

function home(){
    hideElementById("end");
    addElementById("start");
    hideElementById("seatsBookingPage");
}

let seat = 40;
let count = 0;
let money = 0;

function selected(elementId){
    count++;
    seat--;
    money = money + 550;

    if(count<=4){
        setBackGround(elementId);


    const totalTickets = document.getElementById("totalTickets")
    let seatNum = document.createElement('span')
    let className = document.createElement('span')
    let priceTag = document.createElement('span')
    let lineBreak = document.createElement("br");

    className.style.marginLeft = '150px'
    priceTag.style.marginLeft = '70px'
    
    seatNum.innerText = elementId;
    className.innerText = "Economoy";
    priceTag.innerText = "550";
    lineBreak.innerText = '<br>';

    totalTickets.appendChild(seatNum);
    totalTickets.appendChild(className);
    totalTickets.appendChild(priceTag);
    totalTickets.appendChild(lineBreak);



    }
    else{
        count = count - 1;
        money = money - 550;
        seat = seat + 1;
        alert("Limit exceed");
    }

    const display1 = document.getElementById("seatCount");
    let displayString1 = display1.innerText;
    let displayValue1 = parseInt(displayString1);
    displayValue1 =  seat;

    setTextElementValueById("seatCount", displayValue1);

    const display = document.getElementById("bookedSeatsCount");
    let displayString = display.innerText;
    let displayValue = parseInt(displayString);
    displayValue =  count;

    setTextElementValueById("bookedSeatsCount", displayValue);

    const display2 = document.getElementById("totalMoney");
    let displayString2 = display2.innerText;
    let displayValue2 = parseInt(displayString2);
    displayValue2 = money;

    setTextElementValueById("totalMoney", displayValue2);

    
    
    
    return count,money;

}

function apply(){
    let couponInput = document.getElementById("coupon");
    let coupon = couponInput.value; 
    let money2 =0;
    
    if(coupon==="NEW15"){
        money2 = money - (money*0.15);
    }
    else if(coupon==="Couple 20"){
        money2 = money - (money*0.2);
    }
    else if(coupon===""){
        money2 = money;
    }

    const display = document.getElementById("grandTotalMoney");
    let displayString = display.innerText;
    let displayValue = parseInt(displayString);
    displayValue = money2;

    setTextElementValueById("grandTotalMoney", displayValue);
}




