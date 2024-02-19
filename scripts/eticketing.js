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


let count = 0;
let money = 0;

function selected(elementId){
    count++;
    money = money + 550;

    if(count<=4){
        setBackGround(elementId);
    }
    else{
        count = count - 1;
        money = money - 550;
        alert("Limit exceed");
    }

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




