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

    setTextElementValueById("totalMoney", displayValue2)
}




