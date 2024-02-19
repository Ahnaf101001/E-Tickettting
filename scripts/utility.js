function addElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function setBackGround(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-[#F7F8F8]");
    element.classList.remove("text-[#03071299]");
    element.classList.add("bg-[#1DD100]");
    element.classList.add("text-white");
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function display(elementId){
    const display = document.getElementById(elementId);
    let displayString = display.innerText;
    let displayValue = parseInt(displayString);
    displayValue =  count;
}
