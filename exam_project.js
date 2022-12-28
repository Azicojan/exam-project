
//today 
let today = document.querySelector('.menu_today');
today.addEventListener("mouseover",mouseOver);
today.addEventListener("mouseout",mouseOut);


function mouseOver(){
    today.style.cssText=`
    
    border-right: 1px solid grey;
    border-left: 1px solid grey;
    border-bottom: 3px solid rgb(45, 166, 170); `;
};

function mouseOut(){
    today.style.cssText=`
    border-style:none;`
}


// a five-day forecast

let fiveDay = document.querySelector('.menu_5day');
fiveDay.addEventListener("mouseover", fiveDayOver);
fiveDay.addEventListener("mouseout",fiveOverOut);

function fiveDayOver(){
    fiveDay.style.cssText=`
    
    border-right: 1px solid grey;
    border-left: 1px solid grey;
    border-bottom: 3px solid rgb(45, 166, 170); `;
};

function fiveOverOut(){
    fiveDay.style.cssText=`
    border-style:none;`
}
console.log(today);
console.log(fiveDay)