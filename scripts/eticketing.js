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

function selected(elementId){
    count++;
    if(count<=4){
        document.getElementById(elementId).style.backgroundColor = "green";
    }else{
        count = 4;
        alert("Limit exceed");
    }

    const display = document.getElementById("bookedSeatsCount");
    let displayString = display.innerText;
    let displayValue = parseInt(displayString);
    displayValue =  count;

    setTextElementValueById("bookedSeatsCount", displayValue)
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}




