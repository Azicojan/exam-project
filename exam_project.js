
//today forecast menu

let today = document.querySelector('.menu_today');
today.addEventListener('click',todayFixed);
let hourly = document.querySelector('.hourly');
let currentWeather = document.querySelector('.current_weather');

function todayFixed(){
    today.style.cssText=`
    
    border-right: 1px solid grey;
    border-left: 1px solid grey;
    border-bottom: 3px solid rgb(45, 166, 170);`;
    
    fiveDay.style.cssText=`
    border-style:none;` 

    nearbyPlaces.style.cssText=`
    display:grid;`;
    currentWeather.style.cssText=`
    display:grid;`
    hourly.style.cssText=`
    display:grid;`
    mainContainer.style.cssText=`
    height:1000px;`
    infoBlock.style.cssText=`
    display: grid;
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 0.1% 24.9% 42% 24%;
    row-gap: 2%;`
    
    document.querySelector('.dailyData').style.cssText=`
    display:none;`
    document.querySelector('.daily').style.cssText=`
    display:none;`
}


window.addEventListener("DOMContentLoaded",pageLoad);

function pageLoad(){
    today.style.cssText=`
    
    border-right: 1px solid grey;
    border-left: 1px solid grey;
    border-bottom: 3px solid rgb(45, 166, 170); `;

    document.querySelector('.dailyData').style.cssText=`
    display:none;`
    document.querySelector('.daily').style.cssText=`
    display:none;`

};




// a five-day forecast menu

let fiveDay = document.querySelector('.menu_5day');
let nearbyPlaces = document.querySelector('.nearby_places');
let mainContainer = document.querySelector('.main_container');
let infoBlock = document.querySelector('.info_block');



//new elements for the 5-day forecast

let daily = document.createElement('div');
    daily.className = "daily";
let dailyData = document.createElement('div');
    dailyData.className = "dailyData";
    infoBlock.prepend(daily);
    infoBlock.append(dailyData);

let second_block_header2 = document.createElement('div');
second_block_header2.className="second_block_header2";
dailyData.append(second_block_header2);
document.querySelector('.second_block_header2').textContent="a 3-hour step";

let fiveDayTable = document.createElement('table');
fiveDayTable.id="fiveDayTable";
dailyData.append(fiveDayTable);
document.querySelector('#fiveDayTable').innerHTML=`
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>Forecast</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>Temp (&#8451;)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr><tr>
    <td>RealFeel</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr><tr>
    <td>Wind (meter/sec)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>`

//day 1    

let day1 = document.createElement('div');
day1.className = "day1";
daily.append(day1);

let weekday1 = document.createElement('div');
weekday1.className = 'weekday1';
day1.append(weekday1);

let weekday1Date = document.createElement('div');
weekday1Date.className= 'weekday1Date';
day1.append(weekday1Date);

let weekday1icon = document.createElement('div');
weekday1icon.className = "weekday1icon";
day1.append(weekday1icon);

let weekday1temp = document.createElement('div');
weekday1temp.className = 'weekday1temp';
day1.append(weekday1temp);

let weekday1Description = document.createElement('div');
weekday1Description.className = 'weekday1Description';
day1.append(weekday1Description);






//day 2

let day2 = document.createElement('div');
day2.className = "day2";
daily.append(day2);  

let weekday2 = document.createElement('div');
weekday2.className = 'weekday2';
day2.append(weekday2);

let weekday2Date = document.createElement('div');
weekday2Date.className= 'weekday2Date';
day2.append(weekday2Date);

let weekday2icon = document.createElement('div');
weekday2icon.className = "weekday2icon";
day2.append(weekday2icon);

let weekday2temp = document.createElement('div');
weekday2temp.className = 'weekday2temp';
day2.append(weekday2temp);

let weekday2Description = document.createElement('div');
weekday2Description.className = 'weekday2Description';
day2.append(weekday2Description);




//day 3

let day3 = document.createElement('div');
day3.className = "day3";
daily.append(day3);  

let weekday3 = document.createElement('div');
weekday3.className = 'weekday3';
day3.append(weekday3);

let weekday3Date = document.createElement('div');
weekday3Date.className= 'weekday3Date';
day3.append(weekday3Date);

let weekday3icon = document.createElement('div');
weekday3icon.className = "weekday3icon";
day3.append(weekday3icon);

let weekday3temp = document.createElement('div');
weekday3temp.className = 'weekday3temp';
day3.append(weekday3temp);

let weekday3Description = document.createElement('div');
weekday3Description.className = 'weekday3Description';
day3.append(weekday3Description);

day3.addEventListener('click', highlighted3);
function highlighted3(){
    document.querySelector('.day1').classList.remove('myStyle');
    document.querySelector('.day2').classList.remove('myStyle');
    document.querySelector('.day3').classList.add('myStyle');
    document.querySelector('.day4').classList.remove('myStyle');
    document.querySelector('.day5').classList.remove('myStyle');

    
}


//day 4

let day4 = document.createElement('div');
day4.className = "day4";
daily.append(day4);  

let weekday4 = document.createElement('div');
weekday4.className = 'weekday4';
day4.append(weekday4);

let weekday4Date = document.createElement('div');
weekday4Date.className= 'weekday4Date';
day4.append(weekday4Date);

let weekday4icon = document.createElement('div');
weekday4icon.className = "weekday4icon";
day4.append(weekday4icon);

let weekday4temp = document.createElement('div');
weekday4temp.className = 'weekday4temp';
day4.append(weekday4temp);

let weekday4Description = document.createElement('div');
weekday4Description.className = 'weekday4Description';
day4.append(weekday4Description);

day4.addEventListener('click', highlighted4);
function highlighted4(){
    document.querySelector('.day1').classList.remove('myStyle');
    document.querySelector('.day2').classList.remove('myStyle');
    document.querySelector('.day3').classList.remove('myStyle');
    document.querySelector('.day4').classList.add('myStyle');
    document.querySelector('.day5').classList.remove('myStyle');

    
}

//day 5

let day5 = document.createElement('div');
day5.className = "day5";
daily.append(day5);  

let weekday5 = document.createElement('div');
weekday5.className = 'weekday5';
day5.append(weekday5);

let weekday5Date = document.createElement('div');
weekday5Date.className= 'weekday5Date';
day5.append(weekday5Date);

let weekday5icon = document.createElement('div');
weekday5icon.className = "weekday5icon";
day5.append(weekday5icon);

let weekday5temp = document.createElement('div');
weekday5temp.className = 'weekday5temp';
day5.append(weekday5temp);

let weekday5Description = document.createElement('div');
weekday5Description.className = 'weekday5Description';
day5.append(weekday5Description);









fiveDay.addEventListener("click", fiveDayFixed);
function fiveDayFixed(){
    fiveDay.style.cssText=`
    
    border-right: 1px solid grey;
    border-left: 1px solid grey;
    border-bottom: 3px solid rgb(45, 166, 170); `;

    today.style.cssText=`
    border-style:none;`

    nearbyPlaces.style.cssText=`
    display:none;`

    currentWeather.style.cssText=`
    display:none;`

    hourly.style.cssText=`
    display:none;`

    mainContainer.style.cssText=`
    height:740px;
    `
    infoBlock.style.cssText=`
    display:grid;
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 0.1% 34.9% 58.9% 0.1%;
    row-gap: 2%;`

    
    

    daily.style.cssText= `
    display:grid;
    background-color: rgb(230, 230, 230);
    grid-area:2/2;
    grid-template-columns:repeat(5,20%);`


    // day one style

    day1.style.cssText=`
    display:grid;
    grid-template-rows: 15% 15% 35% 20% 15%;
    border-right: 1px solid grey;`

    weekday1.style.cssText=`
    color:rgb(45, 166, 170);
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;`
    
    weekday1Date.style.cssText=`
    font-size: 17px;
    font-weight: 200;
    color:grey;
    display: flex;
    justify-content: center;
    align-items: center;`

    weekday1icon.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;`
  
    weekday1temp.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 500;`

    weekday1Description.style.cssText=`
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 200;
    color:grey;`

   

    //day 2 style

    day2.style.cssText=`
    display:grid;
    grid-template-rows: 15% 15% 35% 20% 15%;
    border-right: 1px solid grey;`

    
    weekday2.style.cssText=`
    color:rgb(45, 166, 170);
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;`
    
    weekday2Date.style.cssText=`
    font-size: 17px;
    font-weight: 200;
    color:grey;
    display: flex;
    justify-content: center;
    align-items: center;`

    weekday2icon.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;`
  
    weekday2temp.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 500;`

    weekday2Description.style.cssText=`
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 200;
    color:grey;`



    //day 3 style

    day3.style.cssText=`
    display:grid;
    grid-template-rows: 15% 15% 35% 20% 15%;
    border-right: 1px solid grey;`

    
    weekday3.style.cssText=`
    color:rgb(45, 166, 170);
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;`
    
    weekday3Date.style.cssText=`
    font-size: 17px;
    font-weight: 200;
    color:grey;
    display: flex;
    justify-content: center;
    align-items: center;`

    weekday3icon.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;`
  
    weekday3temp.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 500;`

    weekday3Description.style.cssText=`
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 200;
    color:grey;`



    //day 4 style

    day4.style.cssText=`
    display:grid;
    grid-template-rows: 15% 15% 35% 20% 15%;
    border-right: 1px solid grey;`

    
    weekday4.style.cssText=`
    color:rgb(45, 166, 170);
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;`
    
    weekday4Date.style.cssText=`
    font-size: 17px;
    font-weight: 200;
    color:grey;
    display: flex;
    justify-content: center;
    align-items: center;`

    weekday4icon.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;`
  
    weekday4temp.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 500;`

    weekday4Description.style.cssText=`
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 200;
    color:grey;`


    //day 5 style

    day5.style.cssText=`
    display:grid;
    grid-template-rows: 15% 15% 35% 20% 15%;
    `

    
    weekday5.style.cssText=`
    color:rgb(45, 166, 170);
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;`
    
    weekday5Date.style.cssText=`
    font-size: 17px;
    font-weight: 200;
    color:grey;
    display: flex;
    justify-content: center;
    align-items: center;`

    weekday5icon.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;`
  
    weekday5temp.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 500;`

    weekday5Description.style.cssText=`
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 200;
    color:grey;`



    dailyData.style.cssText=`
    background-color:rgb(230, 230, 230);
    grid-area:3/2;
    display: grid;
    grid-template-rows: 12% 88%;`
    
    second_block_header2.style.cssText=`
    font-size: 20px;
    font-weight: bold;
    color:rgb(45, 166, 170);
    width:384.02px;
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    left: 70px;
    top: 5px;`

    fiveDayTable.style.cssText=`
    text-align: center;
    margin-bottom: 20px;`

    
   

};


//console.log(today);
//console.log(fiveDay);

//info about the default location


function getLocation() {
   
    navigator.geolocation.getCurrentPosition(showPosition);   
   
}
getLocation();

function showPosition(position) {
    
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    
async function currentInfo() {

    let apiResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=1a82994e07d559edd4eeb784aa36884f`)
    let result = await apiResponse.json()
    let coordsArray = [];
    coordsArray.push(lat);
    coordsArray.push(long);



    //console.log(coordsArray);
    //console.log(result);
    let weatherIcon = result.current.weather[0].icon;
    document.querySelector("#weatherIcon").innerHTML = `<img src='http://openweathermap.org/img/wn/${weatherIcon}@2x.png'>`;    
    document.querySelector(".condition_description").textContent = result.current.weather[0].main;
    const kel = 273;
    document.querySelector(".temperature").innerHTML = Math.round(result.current.temp - kel) + '&#8451;';
    document.querySelector(".real_feel").innerHTML= "Real Feel " + Math.round(result.current.feels_like - kel) + '&#8451';
    
    //sunrise times;

    let sunrise = (result.current.sunrise )*1000;
    const sunriseDate = new Date(sunrise);
    

    //sunset times

    let sunset = (result.current.sunset )*1000;
    const sunsetDate = new Date(sunset);

    //a day duration 

    let difference = sunset - sunrise;
    let duration = new Date(difference).toISOString().slice(11, 19);
          
   
    document.querySelector(".sunrise_time").textContent= sunriseDate.toLocaleTimeString('en-US');
    document.querySelector(".sunset_time").textContent= sunsetDate.toLocaleTimeString('en-Us');
    document.querySelector(".duration").textContent= duration;

    //current date

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    //console.log(day);
   
    

    if(day < 10){
        day = `0${date.getDate()}`;
    }
    if(month < 10 ){
        month = `0${date.getMonth() + 1}`;
    }

    let currentDate = `${day}.${month}.${year}`;

    document.querySelector(".current_date").textContent = currentDate;


    //Default city onload

    function displayDefaultCity(){
        let searchLocation = document.querySelector('#location');
        searchLocation.value = result.timezone;
        if(result.timezone === "Asia/Tashkent"){
            searchLocation.value = "Tashkent, Uzbekistan";
        }
        
        
    
    }
    displayDefaultCity();

    
    //hourly info

    let currentDay = new Date((result.current.dt)*1000).toLocaleString('default',{weekday:'long'})
    //console.log(currentDay);

    function pickUpHourly(){
        let newArrayHourly = [];
        for(let i = 0; i < 7; i++){
            if(new Date((result.hourly[i].dt)*1000).toLocaleString('default',{weekday:'long'}) === currentDay){
                newArrayHourly.push(result.hourly[i]);
            }
            
        }
        return newArrayHourly;

    }                

    let newArrHourly = pickUpHourly();
    //console.log(newArrHourly);
  
    
    for(let i = 0; i < newArrHourly.length; i++){
        
    
        let hour = (newArrHourly[i].dt)*1000;
        const hour_time = new Date(hour);
        document.querySelector("#myTable").rows[0].cells[i+1].textContent= hour_time.toLocaleTimeString('en-Us',{hour:'2-digit',minute:'2-digit'});
        
        let icon1 = newArrHourly[i].weather[0].icon;
        document.querySelector("#myTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${icon1}@2x.png' >`;

        let forecast = newArrHourly[i].weather[0].main;
        document.querySelector("#myTable").rows[2].cells[i+1].innerHTML = forecast;

            
        let temp = newArrHourly[i].temp;
        document.querySelector("#myTable").rows[3].cells[i+1].innerHTML = Math.round(temp - kel) + '&#8451;';

        let feel = newArrHourly[i].feels_like;
        document.querySelector("#myTable").rows[4].cells[1].innerHTML = Math.round(feel - kel) + '&#8451;';
        
        let hour_wind_direction = newArrHourly[i].wind_deg;

        function  toTextualDescription(degree){
            if (degree>337.5) return 'Northerly';
            if (degree>292.5) return 'North Westerly';
            if(degree>247.5) return 'Westerly';
            if(degree>202.5) return 'South Westerly';
            if(degree>157.5) return 'Southerly';
            if(degree>122.5) return 'South Easterly';
            if(degree>67.5) return 'Easterly';
            if(degree>22.5){return 'North Easterly';}
            return 'Northerly';
        }
        toTextualDescription(hour_wind_direction);
        
        let wind_direction = toTextualDescription(hour_wind_direction);
        
        
        let hour_wind_speed = newArrHourly[i].wind_speed;
        document.querySelector("#myTable").rows[5].cells[i+1].textContent = `${hour_wind_speed} ${wind_direction}`;
        
        
        } 
        return coordsArray;

  }
  
  currentInfo();
  


//nearby places


async function nearbyAreas() {

    //the first city nearby

    let apiResponseNearbyCity1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.7833&lon=72.2837&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
    let resultNearby1 = await apiResponseNearbyCity1.json()
   // console.log(resultNearby1);
    document.querySelector('.city1_name').textContent=resultNearby1.name;
    document.querySelector('.weather_icon1').textContent=resultNearby1.weather[0].main;
    document.querySelector('.temp1').innerHTML = Math.round(resultNearby1.main.temp)+'&#8451;';

   //the second city nearby

   let apiResponseNearbyCity2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=39.7681&lon=64.4556&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
    let resultNearby2 = await apiResponseNearbyCity2.json()
  //  console.log(resultNearby2);
    document.querySelector('.city2_name').textContent=resultNearby2.name;
    document.querySelector('.weather_icon2').textContent=resultNearby2.weather[0].main;
    document.querySelector('.temp2').innerHTML = Math.round(resultNearby2.main.temp)+'&#8451;';

  //the third city nearby
 
  let apiResponseNearbyCity3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=39.6270&lon=66.9750&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
    let resultNearby3 = await apiResponseNearbyCity3.json()
   // console.log(resultNearby3);
    document.querySelector('.city3_name').textContent=resultNearby3.name;
    document.querySelector('.weather_icon3').textContent=resultNearby3.weather[0].main;
    document.querySelector('.temp3').innerHTML = Math.round(resultNearby3.main.temp)+'&#8451;';

//the fourth city nearby

let apiResponseNearbyCity4 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=41.3895&lon=60.3415&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
    let resultNearby4 = await apiResponseNearbyCity4.json()
   // console.log(resultNearby4);
    document.querySelector('.city4_name').textContent=resultNearby4.name;
    document.querySelector('.weather_icon4').textContent=resultNearby4.weather[0].main;
    document.querySelector('.temp4').innerHTML = Math.round(resultNearby4.main.temp)+'&#8451;';


}
nearbyAreas();



async function fiveDayForecast() {
    
    
    
    
    let apiResponseFiveDays = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
    let resultFiveDays = await apiResponseFiveDays.json()
   // console.log(resultFiveDays);
   // console.log(resultFiveDays.list[0]);
    

    //a day 1 of a week

    const d1 = new Date((resultFiveDays.list[0].dt)*1000).toLocaleString('default', {weekday:'long'});
    document.querySelector('.weekday1').textContent=d1;
   // console.log(d1);
   
    



    // brief date in words

    let date1 = new Date(resultFiveDays.list[0].dt_txt).getDate();
    if(date1<10){
        date1 = `0${date1}`;
    }
    let month1 = new Date(resultFiveDays.list[0].dt_txt).toLocaleString('default', {month:'short'});
    let briefDate = `${date1} ${month1}`
    document.querySelector('.weekday1Date').textContent= briefDate;
    //console.log(briefDate);
    
    //the day1 icon

    let icon1 = resultFiveDays.list[0].weather[0].icon;
    document.querySelector(".weekday1icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon1}@2x.png' >`;
    //console.log(icon1);
    
    //the day1 temperature

    let day1temp = resultFiveDays.list[0].main.temp;
    document.querySelector('.weekday1temp').innerHTML = Math.round(day1temp) + '&#8451;';
    //console.log(day1temp);

    //the day1 description

    let day1Description = resultFiveDays.list[0].weather[0].description;
    document.querySelector('.weekday1Description').textContent = day1Description;




    //a day 2 of a week

    const d2 = new Date(resultFiveDays.list[8].dt_txt).toLocaleString('default', {weekday:'long'});
    document.querySelector('.weekday2').textContent=d2;


    // brief date in words

    let date2 = new Date(resultFiveDays.list[8].dt_txt).getDate();
    if(date2<10){
        date2 = `0${date2}`;
    }
    let month2 = new Date(resultFiveDays.list[8].dt_txt).toLocaleString('default', {month:'short'});
    let briefDate2 = `${date2} ${month2}`
    document.querySelector('.weekday2Date').textContent= briefDate2;
    //console.log(briefDate2);
    
    //the day2 icon

    let icon2 = resultFiveDays.list[8].weather[0].icon;
    document.querySelector(".weekday2icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon2}@2x.png' >`;
    
    
    //the day2 temperature

    let day2temp = resultFiveDays.list[8].main.temp;
    document.querySelector('.weekday2temp').innerHTML = Math.round(day2temp) + '&#8451;';
    

    //the day2 description

    let day2Description = resultFiveDays.list[8].weather[0].description;
    document.querySelector('.weekday2Description').textContent = day2Description;



    //a day 3 of a week

    const d3 = new Date(resultFiveDays.list[16].dt_txt).toLocaleString('default', {weekday:'long'});
    document.querySelector('.weekday3').textContent=d3;


    // brief date in words

    let date3 = new Date(resultFiveDays.list[16].dt_txt).getDate();
    if(date3<10){
        date3 = `0${date3}`;
    }
    let month3 = new Date(resultFiveDays.list[16].dt_txt).toLocaleString('default', {month:'short'});
    let briefDate3 = `${date3} ${month3}`
    document.querySelector('.weekday3Date').textContent= briefDate3;
    //console.log(briefDate2);
    
    //the day3 icon

    let icon3 = resultFiveDays.list[16].weather[0].icon;
    document.querySelector(".weekday3icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon3}@2x.png' >`;
    
    
    //the day3 temperature

    let day3temp = resultFiveDays.list[16].main.temp;
    document.querySelector('.weekday3temp').innerHTML = Math.round(day3temp) + '&#8451;';
    

    //the day3 description

    let day3Description = resultFiveDays.list[16].weather[0].description;
    document.querySelector('.weekday3Description').textContent = day3Description;

    

    //a day 4 of a week

    const d4 = new Date(resultFiveDays.list[24].dt_txt).toLocaleString('default', {weekday:'long'});
    //console.log(d4);
    document.querySelector('.weekday4').textContent=d4;


    // brief date in words

    let date4 = new Date(resultFiveDays.list[24].dt_txt).getDate();
    if(date4<10){
        date4 = `0${date4}`;
    }
    let month4 = new Date(resultFiveDays.list[24].dt_txt).toLocaleString('default', {month:'short'});
    let briefDate4 = `${date4} ${month4}`
    document.querySelector('.weekday4Date').textContent= briefDate4;
    
    
    //the day4 icon

    let icon4 = resultFiveDays.list[24].weather[0].icon;
    document.querySelector(".weekday4icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon4}@2x.png' >`;
    //console.log(icon4);
    
    //the day4 temperature

    let day4temp = resultFiveDays.list[24].main.temp;
    document.querySelector('.weekday4temp').innerHTML = Math.round(day4temp) + '&#8451;';
    

    //the day4 description

    let day4Description = resultFiveDays.list[24].weather[0].description;
    document.querySelector('.weekday4Description').textContent = day4Description;



    //a day 5 of a week

    const d5 = new Date(resultFiveDays.list[32].dt_txt).toLocaleString('default', {weekday:'long'});
    document.querySelector('.weekday5').textContent=d5;


    // brief date in words

    let date5 = new Date(resultFiveDays.list[32].dt_txt).getDate();
    if(date5<10){
        date5 = `0${date5}`;
    }
    let month5 = new Date(resultFiveDays.list[32].dt_txt).toLocaleString('default', {month:'short'});
    let briefDate5 = `${date5} ${month5}`
    document.querySelector('.weekday5Date').textContent= briefDate5;
   
    
    //the day5 icon

    let icon5 = resultFiveDays.list[32].weather[0].icon;
    document.querySelector(".weekday5icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon5}@2x.png' >`;
    
    
    //the day5 temperature

    let day5temp = resultFiveDays.list[32].main.temp;
    document.querySelector('.weekday5temp').innerHTML = Math.round(day5temp) + '&#8451;';
    
    //the day5 description

    let day5Description = resultFiveDays.list[32].weather[0].description;
    document.querySelector('.weekday5Description').textContent = day5Description;

    

    
    // a 3-hour daily info   ----   DAY 1 DEFAULT

   
    document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = d1;

    

    function pickUp(){
        let newArray = [];
        for(let arr of resultFiveDays.list){
            if(new Date((arr.dt)*1000).toLocaleString('default',{weekday:'long'}) === d1){
                newArray.push(arr);
            }
            
        }
        return newArray;

    }
    
    // a 3-hour step


    let newArr = pickUp();
    //console.log(newArr);
   
    
    for(let i = 0; i < newArr.length; i++){
        
    
            let first_step = (newArr[i].dt)*1000;
            const first_step_time = new Date(first_step);
            document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time.toLocaleTimeString('en-Us',{timeZone:resultFiveDays.timezone,hour:'2-digit',minute:'2-digit'});

            let first_step_icon = newArr[i].weather[0].icon;
            document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon}@2x.png'>`;

            let first_step_forecast = newArr[i].weather[0].main;
            document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast;
            
            let first_step_temp = newArr[i].main.temp;
            document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp) + '&#8451;';

            let first_step_feel = newArr[i].main.feels_like;
            document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel) + '&#8451;';
        
            let first_step_wind_direction = newArr[i].wind.deg;
            let wind_direction1 = toTextualDescription(first_step_wind_direction);
            let first_step_wind_speed = newArr[i].wind.speed;
            document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed} ${wind_direction1}`;
            
            function  toTextualDescription(degree){
                if (degree>337.5) return 'Northerly';
                if (degree>292.5) return 'North Westerly';
                if(degree>247.5) return 'Westerly';
                if(degree>202.5) return 'South Westerly';
                if(degree>157.5) return 'Southerly';
                if(degree>122.5) return 'South Easterly';
                if(degree>67.5) return 'Easterly';
                if(degree>22.5){return 'North Easterly';}
                return 'Northerly';
            }
            toTextualDescription(first_step_wind_direction);                           
        
        
        } 
       

        //DAY 1 onclick

    day1.addEventListener('click', highlighted1);

    function highlighted1(){
        document.querySelector('.day1').classList.add('myStyle');
        document.querySelector('.day2').classList.remove('myStyle');
        document.querySelector('.day3').classList.remove('myStyle');
        document.querySelector('.day4').classList.remove('myStyle');
        document.querySelector('.day5').classList.remove('myStyle');
    
        document.querySelector('#fiveDayTable').innerHTML=`
        <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>Forecast</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>Temp (&#8451;)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr><tr>
        <td>RealFeel</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr><tr>
        <td>Wind (meter/sec)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>`



        document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = d1;

      

        function pickUp(){
            let newArray = [];
            for(let arr of resultFiveDays.list){
                if(new Date((arr.dt)*1000).toLocaleString('default',{weekday:'long'}) === d1){
                    newArray.push(arr);
                }
                
            }
            return newArray;
    
        }
            
        let newArr = pickUp();
       // console.log(newArr);
       
       

       
        for(let i = 0; i < newArr.length; i++){
            
        
                let first_step = (newArr[i].dt)*1000;
                const first_step_time = new Date(first_step);
                document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time.toLocaleTimeString('en-Us',{timeZone:resultFiveDays.timezone,hour:'2-digit',minute:'2-digit'});
    
                let first_step_icon = newArr[i].weather[0].icon;
                document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon}@2x.png'>`;
    
                let first_step_forecast = newArr[i].weather[0].main;
                document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast;
                
                let first_step_temp = newArr[i].main.temp;
                document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp) + '&#8451;';
    
                let first_step_feel = newArr[i].main.feels_like;
                document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel) + '&#8451;';
            
                let first_step_wind_direction = newArr[i].wind.deg;
                let wind_direction1 = toTextualDescription(first_step_wind_direction);
                let first_step_wind_speed = newArr[i].wind.speed;
                document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed} ${wind_direction1}`;
                
                function  toTextualDescription(degree){
                    if (degree>337.5) return 'Northerly';
                    if (degree>292.5) return 'North Westerly';
                    if(degree>247.5) return 'Westerly';
                    if(degree>202.5) return 'South Westerly';
                    if(degree>157.5) return 'Southerly';
                    if(degree>122.5) return 'South Easterly';
                    if(degree>67.5) return 'Easterly';
                    if(degree>22.5){return 'North Easterly';}
                    return 'Northerly';
                }
                toTextualDescription(first_step_wind_direction);                           
            
            
            
           }
         
        }
    

//the DAY 2

    

    day2.addEventListener('click', highlighted2);

    function highlighted2(){
        document.querySelector('.day1').classList.remove('myStyle');
        document.querySelector('.day2').classList.add('myStyle');
        document.querySelector('.day3').classList.remove('myStyle');
        document.querySelector('.day4').classList.remove('myStyle');
        document.querySelector('.day5').classList.remove('myStyle');
    
        document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = d2;



        function pickUp2(){
            let newArray2 = [];
            for(let arr of resultFiveDays.list){
                if(new Date((arr.dt)*1000).toLocaleString('default',{weekday:'long'}) === d2){
                    newArray2.push(arr);
                }
                
            }
            return newArray2;
    
        }                
    
        let newArr2 = pickUp2();
       // console.log(newArr2);
       
        
        for(let i = 0; i < newArr2.length; i++){
            
        
                let first_step2 = (newArr2[i].dt)*1000;
                const first_step_time2 = new Date(first_step2);
                document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time2.toLocaleTimeString('en-Us',{timeZone:resultFiveDays.timezone,hour:'2-digit',minute:'2-digit'});
    
                let first_step_icon2 = newArr2[i].weather[0].icon;
                document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon2}@2x.png'>`;
    
                let first_step_forecast2 = newArr2[i].weather[0].main;
                document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast2;
                
                let first_step_temp2 = newArr2[i].main.temp;
                document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp2) + '&#8451;';
    
                let first_step_feel2 = newArr2[i].main.feels_like;
                document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel2) + '&#8451;';
            
                let first_step_wind_direction2 = newArr2[i].wind.deg;
                let wind_direction1_2 = toTextualDescription(first_step_wind_direction2);
                let first_step_wind_speed2 = newArr2[i].wind.speed;
                document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed2} ${wind_direction1_2}`;
                
                function  toTextualDescription(degree){
                    if (degree>337.5) return 'Northerly';
                    if (degree>292.5) return 'North Westerly';
                    if(degree>247.5) return 'Westerly';
                    if(degree>202.5) return 'South Westerly';
                    if(degree>157.5) return 'Southerly';
                    if(degree>122.5) return 'South Easterly';
                    if(degree>67.5) return 'Easterly';
                    if(degree>22.5){return 'North Easterly';}
                    return 'Northerly';
                }
                toTextualDescription(first_step_wind_direction2);                           
            
            
            } 
        
    }

//the DAY 3

    

day3.addEventListener('click', highlighted3);

function highlighted3(){
    document.querySelector('.day1').classList.remove('myStyle');
    document.querySelector('.day2').classList.remove('myStyle');
    document.querySelector('.day3').classList.add('myStyle');
    document.querySelector('.day4').classList.remove('myStyle');
    document.querySelector('.day5').classList.remove('myStyle');

    document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = d3;



    function pickUp3(){
        let newArray3 = [];
        for(let arr of resultFiveDays.list){
            if(new Date((arr.dt)*1000).toLocaleString('default',{weekday:'long'}) === d3){
                newArray3.push(arr);
            }
            
        }
        return newArray3;

    }
    
    // a 3-hour step


    let newArr3 = pickUp3();
    //console.log(newArr3);
   
    
    for(let i = 0; i < newArr3.length; i++){
        
    
            let first_step3 = (newArr3[i].dt)*1000;
            const first_step_time3 = new Date(first_step3);
            document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time3.toLocaleTimeString('en-Us',{timeZone:resultFiveDays.timezone,hour:'2-digit',minute:'2-digit'});

            let first_step_icon3 = newArr3[i].weather[0].icon;
            document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon3}@2x.png'>`;

            let first_step_forecast3 = newArr3[i].weather[0].main;
            document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast3;
            
            let first_step_temp3 = newArr3[i].main.temp;
            document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp3) + '&#8451;';

            let first_step_feel3 = newArr3[i].main.feels_like;
            document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel3) + '&#8451;';
        
            let first_step_wind_direction3 = newArr3[i].wind.deg;
            let wind_direction1_3 = toTextualDescription(first_step_wind_direction3);
            let first_step_wind_speed3 = newArr3[i].wind.speed;
            document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed3} ${wind_direction1_3}`;
            
            function  toTextualDescription(degree){
                if (degree>337.5) return 'Northerly';
                if (degree>292.5) return 'North Westerly';
                if(degree>247.5) return 'Westerly';
                if(degree>202.5) return 'South Westerly';
                if(degree>157.5) return 'Southerly';
                if(degree>122.5) return 'South Easterly';
                if(degree>67.5) return 'Easterly';
                if(degree>22.5){return 'North Easterly';}
                return 'Northerly';
            }
            toTextualDescription(first_step_wind_direction3);                           
        
        
        } 

    }



    // DAY 4

    day4.addEventListener('click', highlighted4);

function highlighted4(){
    document.querySelector('.day1').classList.remove('myStyle');
    document.querySelector('.day2').classList.remove('myStyle');
    document.querySelector('.day3').classList.remove('myStyle');
    document.querySelector('.day4').classList.add('myStyle');
    document.querySelector('.day5').classList.remove('myStyle');

    document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = d4;



    function pickUp4(){
        let newArray4 = [];
        for(let arr of resultFiveDays.list){
            if(new Date((arr.dt)*1000).toLocaleString('default',{weekday:'long'}) === d4){
                newArray4.push(arr);
            }
            
        }
        return newArray4;

    }
    
    // a 3-hour step


    let newArr4 = pickUp4();
   // console.log(newArr4);
   
    
    for(let i = 0; i < newArr4.length; i++){
        
    
            let first_step4 = (newArr4[i].dt)*1000;
            const first_step_time4 = new Date(first_step4);
            document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time4.toLocaleTimeString('en-Us',{timeZone:resultFiveDays.timezone,hour:'2-digit',minute:'2-digit'});

            let first_step_icon4 = newArr4[i].weather[0].icon;
            document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon4}@2x.png'>`;

            let first_step_forecast4 = newArr4[i].weather[0].main;
            document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast4;
            
            let first_step_temp4 = newArr4[i].main.temp;
            document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp4) + '&#8451;';

            let first_step_feel4 = newArr4[i].main.feels_like;
            document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel4) + '&#8451;';
        
            let first_step_wind_direction4 = newArr4[i].wind.deg;
            let wind_direction1_4 = toTextualDescription(first_step_wind_direction4);
            let first_step_wind_speed4 = newArr4[i].wind.speed;
            document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed4} ${wind_direction1_4}`;
            
            function  toTextualDescription(degree){
                if (degree>337.5) return 'Northerly';
                if (degree>292.5) return 'North Westerly';
                if(degree>247.5) return 'Westerly';
                if(degree>202.5) return 'South Westerly';
                if(degree>157.5) return 'Southerly';
                if(degree>122.5) return 'South Easterly';
                if(degree>67.5) return 'Easterly';
                if(degree>22.5){return 'North Easterly';}
                return 'Northerly';
            }
            toTextualDescription(first_step_wind_direction4);                           
        
        
        } 

    }



// DAY 5


    day5.addEventListener('click', highlighted5);

    function highlighted5(){
    document.querySelector('.day1').classList.remove('myStyle');
    document.querySelector('.day2').classList.remove('myStyle');
    document.querySelector('.day3').classList.remove('myStyle');
    document.querySelector('.day4').classList.remove('myStyle');
    document.querySelector('.day5').classList.add('myStyle');

    document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = d5;

    function pickUp5(){
        let newArray5 = [];
        for(let arr of resultFiveDays.list){
            if(new Date((arr.dt)*1000).toLocaleString('default',{weekday:'long'}) === d5){
                newArray5.push(arr);
            }
            
        }
        return newArray5;

    }
    
    // a 3-hour step


    let newArr5 = pickUp5();
   // console.log(newArr5);
   
    
    for(let i = 0; i < newArr5.length; i++){
        
    
            let first_step5 = (newArr5[i].dt)*1000;
            const first_step_time5 = new Date(first_step5);
            document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time5.toLocaleTimeString('en-Us',{timeZone:resultFiveDays.timezone,hour:'2-digit',minute:'2-digit'});

            let first_step_icon5 = newArr5[i].weather[0].icon;
            document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon5}@2x.png'>`;

            let first_step_forecast5 = newArr5[i].weather[0].main;
            document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast5;
            
            let first_step_temp5 = newArr5[i].main.temp;
            document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp5) + '&#8451;';

            let first_step_feel5 = newArr5[i].main.feels_like;
            document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel5) + '&#8451;';
        
            let first_step_wind_direction5 = newArr5[i].wind.deg;
            let wind_direction1_5 = toTextualDescription(first_step_wind_direction5);
            let first_step_wind_speed5 = newArr5[i].wind.speed;
            document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed5} ${wind_direction1_5}`;
            
            function  toTextualDescription(degree){
                if (degree>337.5) return 'Northerly';
                if (degree>292.5) return 'North Westerly';
                if(degree>247.5) return 'Westerly';
                if(degree>202.5) return 'South Westerly';
                if(degree>157.5) return 'Southerly';
                if(degree>122.5) return 'South Easterly';
                if(degree>67.5) return 'Easterly';
                if(degree>22.5){return 'North Easterly';}
                return 'Northerly';
            }
            toTextualDescription(first_step_wind_direction5);                           
        
        
        } 

    }


    
}

fiveDayForecast();


}


let searchLocation = document.querySelector('#location');
let searchButton = document.querySelector('.search_button');
searchButton.addEventListener('click',showCity);

let newCity = '';    
function showCity(e){
   e.preventDefault();
   newCity = searchLocation.value;
   error.style.display='none';
   error.replaceWith(infoBlock);
   today.addEventListener('click',todayFixed);
   if(today){
    searchButton.addEventListener('click',todayFixed);
   }
}


// clear the search field and look for the city that has been input to find
    
searchLocation.addEventListener('click',clearSearchLocationArea);

function clearSearchLocationArea(){
    searchLocation.value = '';

};


//search for a user's input

searchButton.addEventListener('click',cityInfo);

async function cityInfo(){

    

    

    let apiResponse2 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${newCity}&limit=5&appid=1a82994e07d559edd4eeb784aa36884f`);
    let result2 = await apiResponse2.json()
    //console.log(result2);

    try {

        if(result2.length === 0) {
            
            error.innerHTML = `<p style="font-size:50px;
            margin-right:30px">404</p> ${newCity[0].toUpperCase()+newCity.substring(1)} could not be found. Please enter a different location.`;
            error.style.cssText=`
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:880px;
            background-color: rgba(0,0,0,0.2);
            font-family: Arial, Helvetica, sans-serif;
            font-size:30px;
            color:#696969;`
            infoBlock.replaceWith(error);
            today.removeEventListener('click',todayFixed);
            today.addEventListener('click',todayError);
            function todayError(){
                today.style.cssText=`
                
                border-right: 1px solid grey;
                border-left: 1px solid grey;
                border-bottom: 3px solid rgb(45, 166, 170);`;
                
                fiveDay.style.cssText=`
                border-style:none;` 
            }
        }
         else {

             
        

        
    
    let lat = result2[0].lat;
    let long = result2[0].lon;
    //console.log(lat);
   // console.log(long);
    
    let apiResponseCity = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=1a82994e07d559edd4eeb784aa36884f`)
    let finalOutcome = await apiResponseCity.json()
    //console.log(finalOutcome);

    let icon = finalOutcome.current.weather[0].icon
    document.querySelector("#weatherIcon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".condition_description").textContent = finalOutcome.current.weather[0].main;
    const kel = 273;
    document.querySelector(".temperature").innerHTML = Math.round(finalOutcome.current.temp - kel) + '&#8451;';
    document.querySelector(".real_feel").innerHTML= "Real Feel " + Math.round(finalOutcome.current.feels_like - kel) + '&#8451';
    
    //sunrise times;

    let sunrise = (finalOutcome.current.sunrise + finalOutcome.timezone_offset)*1000;
    const sunriseDate = new Date(sunrise);
    //console.log(sunriseDate);
    //console.log(sunriseDate.getUTCHours());
    let sunriseTime = `${sunriseDate.getUTCHours()}:${sunriseDate.getMinutes()}:${sunriseDate.getSeconds()}`;
    if(sunriseDate.getUTCHours()<10){
        sunriseTime = `0${sunriseDate.getUTCHours()}:${sunriseDate.getMinutes()}:${sunriseDate.getSeconds()}`;
    }
    if(sunriseDate.getMinutes()<10){
        sunriseTime = `${sunriseDate.getUTCHours()}:0${sunriseDate.getMinutes()}:${sunriseDate.getSeconds()}`;
    }
    if(sunriseDate.getSeconds()<10){
        sunriseTime = `0${sunriseDate.getUTCHours()}:${sunriseDate.getMinutes()}:0${sunriseDate.getSeconds()}`;
    }
    //console.log(sunrise);
    

    //sunset times

    let sunset = (finalOutcome.current.sunset + finalOutcome.timezone_offset)*1000;
    const sunsetDate = new Date(sunset);
    //console.log(sunsetDate);

    let sunsetTime = `${sunsetDate.getUTCHours()}:${sunsetDate.getMinutes()}:${sunsetDate.getSeconds()}`;
    if(sunsetDate.getUTCHours()<10){
        sunsetTime = `${sunsetDate.getUTCHours()}:${sunsetDate.getMinutes()}:${sunsetDate.getSeconds()}`;
    }
    if(sunsetDate.getMinutes()<10){
        sunsetTime = `${sunsetDate.getUTCHours()}:0${sunsetDate.getMinutes()}:${sunsetDate.getSeconds()}`;
    }
    if(sunsetDate.getSeconds()<10){
        sunsetTime = `0${sunsetDate.getUTCHours()}:${sunsetDate.getMinutes()}:0${sunsetDate.getSeconds()}`;
    }

    //a day duration 

    let difference = sunset - sunrise;
    let duration = new Date(difference).toISOString().slice(11, 19);
          
   
    document.querySelector(".sunrise_time").textContent= sunriseTime;
    document.querySelector(".sunset_time").textContent= sunsetTime;
    document.querySelector(".duration").textContent= duration;

   
    //the current date

    let currentDate = new Date((finalOutcome.current.dt)*1000).toLocaleDateString('default', {timeZone:finalOutcome.timezone});
    let currentTime = new Date ((finalOutcome.current.dt)*1000).toLocaleTimeString('default',{timeZone:finalOutcome.timezone});
    //console.log(currentTime);
   
    document.querySelector(".current_date").textContent = `${currentDate} ${currentTime}`;
    //console.log(currentDate);


 //hourly info
 
 document.querySelector('#myTable').innerHTML=`
 <tr>
 <th>TODAY</th>
 <th></th>
 <th></th>
 <th></th>
 <th></th>
 <th></th>
 <th></th>
 <th></th>
</tr>
<tr>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
</tr>
<tr>
 <td>Forecast</td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
</tr>
<tr>
 <td>Temp (&#8451;)</td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
</tr>
<tr>
 <td>RealFeel</td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
</tr>
<tr>
 <td>Wind (meter/sec)</td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 </tr>
 `


 function pickUpHourly(){
     let newArrayHourly = [];
     for(let i = 0; i < 7; i++){
         if(new Date((finalOutcome.hourly[i].dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone}) === currentDate){
             newArrayHourly.push(finalOutcome.hourly[i]);
         }
         
     }
     return newArrayHourly
     
 }                

 let newArrHourly = pickUpHourly();
 //console.log(newArrHourly);

 
 for(let i = 0; i < newArrHourly.length; i++){
     
 
     let hour = (newArrHourly[i].dt)*1000;
     const hour_time = new Date(hour);
     document.querySelector("#myTable").rows[0].cells[i+1].textContent= hour_time.toLocaleTimeString('en-Us',{timeZone:finalOutcome.timezone,hour:'2-digit',minute:'2-digit'});
     
     let icon1 = newArrHourly[i].weather[0].icon;
     document.querySelector("#myTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${icon1}@2x.png' >`;

     let forecast = newArrHourly[i].weather[0].main;
     document.querySelector("#myTable").rows[2].cells[i+1].innerHTML = forecast;

         
     let temp = newArrHourly[i].temp;
     document.querySelector("#myTable").rows[3].cells[i+1].innerHTML = Math.round(temp - kel) + '&#8451;';

     let feel = newArrHourly[i].feels_like;
     document.querySelector("#myTable").rows[4].cells[i+1].innerHTML = Math.round(feel - kel) + '&#8451;';
     
     let hour_wind_direction = newArrHourly[i].wind_deg;

     function  toTextualDescription(degree){
         if (degree>337.5) return 'Northerly';
         if (degree>292.5) return 'North Westerly';
         if(degree>247.5) return 'Westerly';
         if(degree>202.5) return 'South Westerly';
         if(degree>157.5) return 'Southerly';
         if(degree>122.5) return 'South Easterly';
         if(degree>67.5) return 'Easterly';
         if(degree>22.5){return 'North Easterly';}
         return 'Northerly';
     }
     toTextualDescription(hour_wind_direction);
     
     let wind_direction = toTextualDescription(hour_wind_direction);
     
     
     let hour_wind_speed = newArrHourly[i].wind_speed;
     document.querySelector("#myTable").rows[5].cells[i+1].textContent = `${hour_wind_speed} ${wind_direction}`;
     
     
     } 



//nearby places


async function AreasAcrossTheWorld() {

    //the first city nearby

    let apiResponseNearbyCity1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.6532&lon=-79.3832&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
    let resultNearby1 = await apiResponseNearbyCity1.json()
   // console.log(resultNearby1);
    document.querySelector('.city1_name').textContent=resultNearby1.name;
    document.querySelector('.weather_icon1').textContent=resultNearby1.weather[0].main;
    document.querySelector('.temp1').innerHTML = Math.round(resultNearby1.main.temp)+'&#8451;';

   //the second city nearby

   let apiResponseNearbyCity2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.2827&lon=-123.1207&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
    let resultNearby2 = await apiResponseNearbyCity2.json()
  //  console.log(resultNearby2);
    document.querySelector('.city2_name').textContent=resultNearby2.name;
    document.querySelector('.weather_icon2').textContent=resultNearby2.weather[0].main;
    document.querySelector('.temp2').innerHTML = Math.round(resultNearby2.main.temp)+'&#8451;';

  //the third city nearby
 
  let apiResponseNearbyCity3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=45.508888&lon=-73.561668&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
    let resultNearby3 = await apiResponseNearbyCity3.json()
    //console.log(resultNearby3);
    document.querySelector('.city3_name').textContent=resultNearby3.name;
    document.querySelector('.weather_icon3').textContent=resultNearby3.weather[0].main;
    document.querySelector('.temp3').innerHTML = Math.round(resultNearby3.main.temp)+'&#8451;';

//the fourth city nearby

let apiResponseNearbyCity4 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=51.0447&lon=-114.0719&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
    let resultNearby4 = await apiResponseNearbyCity4.json()
   // console.log(resultNearby4);
    document.querySelector('.city4_name').textContent=resultNearby4.name;
    document.querySelector('.weather_icon4').textContent=resultNearby4.weather[0].main;
    document.querySelector('.temp4').innerHTML = Math.round(resultNearby4.main.temp)+'&#8451;';


}
AreasAcrossTheWorld();
        }
    }

catch (err) {
    console.log(err);
    
          
    
        
}
    
    
}


let error = document.createElement('div');
error.className = 'error';


searchButton.addEventListener('click',fiveDayForecast);

async function fiveDayForecast() {
    
    

 
      let apiResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${newCity}&limit=5&appid=1a82994e07d559edd4eeb784aa36884f`);
      let result2 = await apiResponse.json()
      //console.log(result2);
      //console.log(newCity);

    try {  

        if(result2.length === 0) {
           
            error.innerHTML = `<p style="font-size:50px;
            margin-right:30px">404</p> ${newCity[0].toUpperCase()+newCity.substring(1)} could not be found. Please enter a different location.`;
            error.style.cssText=`
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:880px;
            background-color: rgba(0,0,0,0.2);
            font-family: Arial, Helvetica, sans-serif;
            font-size:30px;
            color:#696969;`
            infoBlock.replaceWith(error);
            today.removeEventListener('click',todayFixed);
            today.addEventListener('click',todayError);
            function todayError(){
                today.style.cssText=`
                
                border-right: 1px solid grey;
                border-left: 1px solid grey;
                border-bottom: 3px solid rgb(45, 166, 170);`;
                
                fiveDay.style.cssText=`
                border-style:none;` 
            }
        }

        else{

        
       
        

    let lat = result2[0].lat;
    let long = result2[0].lon;

    let apiResponseCity = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`)
    let finalOutcome = await apiResponseCity.json()
   // console.log(finalOutcome);
  
  
  let apiResponseFiveDays = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=1a82994e07d559edd4eeb784aa36884f&units=metric`);
  let resultFiveDays = await apiResponseFiveDays.json()
  //console.log(resultFiveDays);

    
 // console.log(resultFiveDays.list[0]);
  

  //a day 1 of a week
  


  const d1 = new Date((finalOutcome.daily[0].dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone});
 // console.log(d1);
 
  function getDayName (date = new Date(), locale = 'en-US'){
    return date.toLocaleDateString(locale, {weekday:'long'});
  }
  let dayOne = getDayName(new Date(d1));
  document.querySelector('.weekday1').textContent=dayOne;

  // brief date in words

  let date1 = new Date(d1).getDate();
  if(date1<10){
      date1 = `0${date1}`;
  }
  let month1 = new Date(d1).toLocaleString('default', {month:'short'});
  let briefDate = `${date1} ${month1}`
  document.querySelector('.weekday1Date').textContent= briefDate;
  //console.log(briefDate);
  
  //the day1 icon

  let icon1 = finalOutcome.daily[0].weather[0].icon;
  document.querySelector(".weekday1icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon1}@2x.png' >`;
  //console.log(icon1);
  
  //the day1 temperature

  let day1temp = finalOutcome.daily[0].temp.day;
  document.querySelector('.weekday1temp').innerHTML = Math.round(day1temp) + '&#8451;';
  //console.log(day1temp);

  //the day1 description

  let day1Description = finalOutcome.daily[0].weather[0].description;
  document.querySelector('.weekday1Description').textContent = day1Description;




  //a day 2 of a week

  const d2 = new Date((finalOutcome.daily[1].dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone});
  

  function getDayName2 (date = new Date(), locale = 'en-US'){
    return date.toLocaleDateString(locale, {weekday:'long'});
  }
  let dayTwo = getDayName2(new Date(d2));
  document.querySelector('.weekday2').textContent=dayTwo;

  // brief date in words

  let date2 = new Date(d2).getDate();
  if(date2<10){
      date2 = `0${date2}`;
  }
  let month2 = new Date(d2).toLocaleString('default', {month:'short'});
  let briefDate2 = `${date2} ${month2}`
  document.querySelector('.weekday2Date').textContent= briefDate2;
  //console.log(briefDate2);
  
  //the day2 icon

  let icon2 = finalOutcome.daily[1].weather[0].icon;
  document.querySelector(".weekday2icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon2}@2x.png' >`;
  
  
  //the day2 temperature

  let day2temp = finalOutcome.daily[1].temp.day;
  document.querySelector('.weekday2temp').innerHTML = Math.round(day2temp) + '&#8451;';
  

  //the day2 description

  let day2Description = finalOutcome.daily[1].weather[0].description;
  document.querySelector('.weekday2Description').textContent = day2Description;



  //a day 3 of a week

  const d3 = new Date((finalOutcome.daily[2].dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone});
  

  function getDayName3 (date = new Date(), locale = 'en-US'){
    return date.toLocaleDateString(locale, {weekday:'long'});
  }
  let dayThree = getDayName3(new Date(d3));
  document.querySelector('.weekday3').textContent=dayThree;

  // brief date in words

  let date3 = new Date(d3).getDate();
  if(date3<10){
      date3 = `0${date3}`;
  }
  let month3 = new Date(d3).toLocaleString('default', {month:'short'});
  let briefDate3 = `${date3} ${month3}`
  document.querySelector('.weekday3Date').textContent= briefDate3;
  //console.log(briefDate2);
  
  //the day3 icon

  let icon3 = finalOutcome.daily[2].weather[0].icon;
  document.querySelector(".weekday3icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon3}@2x.png' >`;
  
  
  //the day3 temperature

  let day3temp = finalOutcome.daily[2].temp.day;
  document.querySelector('.weekday3temp').innerHTML = Math.round(day3temp) + '&#8451;';
  

  //the day3 description

  let day3Description = finalOutcome.daily[2].weather[0].description;
  document.querySelector('.weekday3Description').textContent = day3Description;

  

  //a day 4 of a week

  const d4 = new Date((finalOutcome.daily[3].dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone});
  
  function getDayName4 (date = new Date(), locale = 'en-US'){
    return date.toLocaleDateString(locale, {weekday:'long'});
  }
  let dayFour = getDayName4(new Date(d4));
  document.querySelector('.weekday4').textContent=dayFour;
  


  // brief date in words

  let date4 = new Date(d4).getDate();
  if(date4<10){
      date4 = `0${date4}`;
  }
  let month4 = new Date(d4).toLocaleString('default', {month:'short'});
  let briefDate4 = `${date4} ${month4}`
  document.querySelector('.weekday4Date').textContent= briefDate4;
  
  
  //the day4 icon

  let icon4 = finalOutcome.daily[3].weather[0].icon;
  document.querySelector(".weekday4icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon4}@2x.png' >`;
  //console.log(icon4);
  
  //the day4 temperature

  let day4temp = finalOutcome.daily[3].temp.day;
  document.querySelector('.weekday4temp').innerHTML = Math.round(day4temp) + '&#8451;';
  

  //the day4 description

  let day4Description = finalOutcome.daily[3].weather[0].description;
  document.querySelector('.weekday4Description').textContent = day4Description;



  //a day 5 of a week

  const d5 = new Date((finalOutcome.daily[4].dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone});

  function getDayName5 (date = new Date(), locale = 'en-US'){
    return date.toLocaleDateString(locale, {weekday:'long'});
  }
  let dayFive = getDayName5(new Date(d5));
  document.querySelector('.weekday5').textContent=dayFive;

 


  // brief date in words

  let date5 = new Date(d5).getDate();
  if(date5<10){
      date5 = `0${date5}`;
  }
  let month5 = new Date(d5).toLocaleString('default', {month:'short'});
  let briefDate5 = `${date5} ${month5}`
  document.querySelector('.weekday5Date').textContent= briefDate5;
 
  
  //the day5 icon

  let icon5 = finalOutcome.daily[4].weather[0].icon;
  document.querySelector(".weekday5icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${icon5}@2x.png' >`;
  
  
  //the day5 temperature

  let day5temp = finalOutcome.daily[4].temp.day;
  document.querySelector('.weekday5temp').innerHTML = Math.round(day5temp) + '&#8451;';
  
  //the day5 description

  let day5Description = finalOutcome.daily[4].weather[0].description;
  document.querySelector('.weekday5Description').textContent = day5Description;

  

  
  // a 3-hour daily info   ----   DAY 1 DEFAULT


      document.querySelector('.day1').classList.remove('myStyle');
      document.querySelector('.day2').classList.remove('myStyle');
      document.querySelector('.day3').classList.remove('myStyle');
      document.querySelector('.day4').classList.remove('myStyle');
      document.querySelector('.day5').classList.remove('myStyle');


  document.querySelector('#fiveDayTable').innerHTML=`
  <tr>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  </tr>
  <tr>
  <td>Forecast</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  </tr>
  <tr>
  <td>Temp (&#8451;)</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  </tr><tr>
  <td>RealFeel</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  </tr><tr>
  <td>Wind (meter/sec)</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  </tr>`
 
  document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = dayOne;


 

  function pickUp(){
      let newArray = [];
      for(let arr of resultFiveDays.list){
          if(new Date((arr.dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone}) === d1){
              newArray.push(arr);
          }
          
      }
      return newArray;

  }
  
  // a 3-hour step


  let newArr = pickUp();
  //console.log(newArr);
 
  
  for(let i = 0; i < newArr.length; i++){
      
  
          let first_step = (newArr[i].dt)*1000;
          const first_step_time = new Date(first_step);
          document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time.toLocaleTimeString('en-Us',{timeZone:finalOutcome.timezone,hour:'2-digit',minute:'2-digit'});

          let first_step_icon = newArr[i].weather[0].icon;
          document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon}@2x.png'>`;

          let first_step_forecast = newArr[i].weather[0].main;
          document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast;
          
          let first_step_temp = newArr[i].main.temp;
          document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp) + '&#8451;';

          let first_step_feel = newArr[i].main.feels_like;
          document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel) + '&#8451;';
      
          let first_step_wind_direction = newArr[i].wind.deg;
          let wind_direction1 = toTextualDescription(first_step_wind_direction);
          let first_step_wind_speed = newArr[i].wind.speed;
          document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed} ${wind_direction1}`;
          
          function  toTextualDescription(degree){
              if (degree>337.5) return 'Northerly';
              if (degree>292.5) return 'North Westerly';
              if(degree>247.5) return 'Westerly';
              if(degree>202.5) return 'South Westerly';
              if(degree>157.5) return 'Southerly';
              if(degree>122.5) return 'South Easterly';
              if(degree>67.5) return 'Easterly';
              if(degree>22.5){return 'North Easterly';}
              return 'Northerly';
          }
          toTextualDescription(first_step_wind_direction);                           
      
      
      } 
     

      //DAY 1 onclick

  day1.addEventListener('click', highlighted1);

  function highlighted1(){
      document.querySelector('.day1').classList.add('myStyle');
      document.querySelector('.day2').classList.remove('myStyle');
      document.querySelector('.day3').classList.remove('myStyle');
      document.querySelector('.day4').classList.remove('myStyle');
      document.querySelector('.day5').classList.remove('myStyle');
  
      document.querySelector('#fiveDayTable').innerHTML=`
      <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>Forecast</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>Temp (&#8451;)</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr><tr>
      <td>RealFeel</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr><tr>
      <td>Wind (meter/sec)</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>`



      document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = dayOne;

    

      function pickUp(){
          let newArray = [];
          for(let arr of resultFiveDays.list){
              if(new Date((arr.dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone}) === d1){
                  newArray.push(arr);
              }
              
          }
          return newArray;
  
      }
          
      let newArr = pickUp();
     // console.log(newArr);
     
     

     
      for(let i = 0; i < newArr.length; i++){
          
      
              let first_step = (newArr[i].dt)*1000;
              const first_step_time = new Date(first_step);
              document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time.toLocaleTimeString('en-Us',{timeZone:finalOutcome.timezone,hour:'2-digit',minute:'2-digit'});
  
              let first_step_icon = newArr[i].weather[0].icon;
              document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon}@2x.png'>`;
  
              let first_step_forecast = newArr[i].weather[0].main;
              document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast;
              
              let first_step_temp = newArr[i].main.temp;
              document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp) + '&#8451;';
  
              let first_step_feel = newArr[i].main.feels_like;
              document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel) + '&#8451;';
          
              let first_step_wind_direction = newArr[i].wind.deg;
              let wind_direction1 = toTextualDescription(first_step_wind_direction);
              let first_step_wind_speed = newArr[i].wind.speed;
              document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed} ${wind_direction1}`;
              
              function  toTextualDescription(degree){
                  if (degree>337.5) return 'Northerly';
                  if (degree>292.5) return 'North Westerly';
                  if(degree>247.5) return 'Westerly';
                  if(degree>202.5) return 'South Westerly';
                  if(degree>157.5) return 'Southerly';
                  if(degree>122.5) return 'South Easterly';
                  if(degree>67.5) return 'Easterly';
                  if(degree>22.5){return 'North Easterly';}
                  return 'Northerly';
              }
              toTextualDescription(first_step_wind_direction);                           
          
          
          
         }
       
      }
  

//the DAY 2

  

  day2.addEventListener('click', highlighted2);

  function highlighted2(){
      document.querySelector('.day1').classList.remove('myStyle');
      document.querySelector('.day2').classList.add('myStyle');
      document.querySelector('.day3').classList.remove('myStyle');
      document.querySelector('.day4').classList.remove('myStyle');
      document.querySelector('.day5').classList.remove('myStyle');
  
      
      document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = dayTwo;



      function pickUp2(){
          let newArray2 = [];
          for(let arr of resultFiveDays.list){
              if(new Date((arr.dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone}) === d2){
                  newArray2.push(arr);
              }
              
          }
          return newArray2;
  
      }                
  
      let newArr2 = pickUp2();
     // console.log(newArr2);
     
      
      for(let i = 0; i < newArr2.length; i++){
          
      
              let first_step2 = (newArr2[i].dt)*1000;
              const first_step_time2 = new Date(first_step2);
              document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time2.toLocaleTimeString('en-Us',{timeZone:finalOutcome.timezone,hour:'2-digit',minute:'2-digit'});
  
              let first_step_icon2 = newArr2[i].weather[0].icon;
              document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon2}@2x.png'>`;
  
              let first_step_forecast2 = newArr2[i].weather[0].main;
              document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast2;
              
              let first_step_temp2 = newArr2[i].main.temp;
              document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp2) + '&#8451;';
  
              let first_step_feel2 = newArr2[i].main.feels_like;
              document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel2) + '&#8451;';
          
              let first_step_wind_direction2 = newArr2[i].wind.deg;
              let wind_direction1_2 = toTextualDescription(first_step_wind_direction2);
              let first_step_wind_speed2 = newArr2[i].wind.speed;
              document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed2} ${wind_direction1_2}`;
              
              function  toTextualDescription(degree){
                  if (degree>337.5) return 'Northerly';
                  if (degree>292.5) return 'North Westerly';
                  if(degree>247.5) return 'Westerly';
                  if(degree>202.5) return 'South Westerly';
                  if(degree>157.5) return 'Southerly';
                  if(degree>122.5) return 'South Easterly';
                  if(degree>67.5) return 'Easterly';
                  if(degree>22.5){return 'North Easterly';}
                  return 'Northerly';
              }
              toTextualDescription(first_step_wind_direction2);                           
          
          
          } 
      
  }

//the DAY 3

  

day3.addEventListener('click', highlighted3);

function highlighted3(){
  document.querySelector('.day1').classList.remove('myStyle');
  document.querySelector('.day2').classList.remove('myStyle');
  document.querySelector('.day3').classList.add('myStyle');
  document.querySelector('.day4').classList.remove('myStyle');
  document.querySelector('.day5').classList.remove('myStyle');

  document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = dayThree;



  function pickUp3(){
      let newArray3 = [];
      for(let arr of resultFiveDays.list){
          if(new Date((arr.dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone}) === d3){
              newArray3.push(arr);
          }
          
      }
      return newArray3;

  }
  
  // a 3-hour step


  let newArr3 = pickUp3();
  //console.log(newArr3);
 
  
  for(let i = 0; i < newArr3.length; i++){
      
  
          let first_step3 = (newArr3[i].dt)*1000;
          const first_step_time3 = new Date(first_step3);
          document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time3.toLocaleTimeString('en-Us',{timeZone:finalOutcome.timezone,hour:'2-digit',minute:'2-digit'});

          let first_step_icon3 = newArr3[i].weather[0].icon;
          document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon3}@2x.png'>`;

          let first_step_forecast3 = newArr3[i].weather[0].main;
          document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast3;
          
          let first_step_temp3 = newArr3[i].main.temp;
          document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp3) + '&#8451;';

          let first_step_feel3 = newArr3[i].main.feels_like;
          document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel3) + '&#8451;';
      
          let first_step_wind_direction3 = newArr3[i].wind.deg;
          let wind_direction1_3 = toTextualDescription(first_step_wind_direction3);
          let first_step_wind_speed3 = newArr3[i].wind.speed;
          document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed3} ${wind_direction1_3}`;
          
          function  toTextualDescription(degree){
              if (degree>337.5) return 'Northerly';
              if (degree>292.5) return 'North Westerly';
              if(degree>247.5) return 'Westerly';
              if(degree>202.5) return 'South Westerly';
              if(degree>157.5) return 'Southerly';
              if(degree>122.5) return 'South Easterly';
              if(degree>67.5) return 'Easterly';
              if(degree>22.5){return 'North Easterly';}
              return 'Northerly';
          }
          toTextualDescription(first_step_wind_direction3);                           
      
      
      } 

  }



  // DAY 4

  day4.addEventListener('click', highlighted4);

function highlighted4(){
  document.querySelector('.day1').classList.remove('myStyle');
  document.querySelector('.day2').classList.remove('myStyle');
  document.querySelector('.day3').classList.remove('myStyle');
  document.querySelector('.day4').classList.add('myStyle');
  document.querySelector('.day5').classList.remove('myStyle');

  document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = dayFour;



  function pickUp4(){
      let newArray4 = [];
      for(let arr of resultFiveDays.list){
          if(new Date((arr.dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone}) === d4){
              newArray4.push(arr);
          }
          
      }
      return newArray4;

  }
  
  // a 3-hour step


  let newArr4 = pickUp4();
 // console.log(newArr4);
 
  
  for(let i = 0; i < newArr4.length; i++){
      
  
          let first_step4 = (newArr4[i].dt)*1000;
          const first_step_time4 = new Date(first_step4);
          document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time4.toLocaleTimeString('en-Us',{timeZone:finalOutcome.timezone,hour:'2-digit',minute:'2-digit'});

          let first_step_icon4 = newArr4[i].weather[0].icon;
          document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon4}@2x.png'>`;

          let first_step_forecast4 = newArr4[i].weather[0].main;
          document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast4;
          
          let first_step_temp4 = newArr4[i].main.temp;
          document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp4) + '&#8451;';

          let first_step_feel4 = newArr4[i].main.feels_like;
          document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel4) + '&#8451;';
      
          let first_step_wind_direction4 = newArr4[i].wind.deg;
          let wind_direction1_4 = toTextualDescription(first_step_wind_direction4);
          let first_step_wind_speed4 = newArr4[i].wind.speed;
          document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed4} ${wind_direction1_4}`;
          
          function  toTextualDescription(degree){
              if (degree>337.5) return 'Northerly';
              if (degree>292.5) return 'North Westerly';
              if(degree>247.5) return 'Westerly';
              if(degree>202.5) return 'South Westerly';
              if(degree>157.5) return 'Southerly';
              if(degree>122.5) return 'South Easterly';
              if(degree>67.5) return 'Easterly';
              if(degree>22.5){return 'North Easterly';}
              return 'Northerly';
          }
          toTextualDescription(first_step_wind_direction4);                           
      
      
      } 

  }



// DAY 5


  day5.addEventListener('click', highlighted5);

  function highlighted5(){
  document.querySelector('.day1').classList.remove('myStyle');
  document.querySelector('.day2').classList.remove('myStyle');
  document.querySelector('.day3').classList.remove('myStyle');
  document.querySelector('.day4').classList.remove('myStyle');
  document.querySelector('.day5').classList.add('myStyle');

  document.querySelector("#fiveDayTable").rows[0].cells[0].textContent = dayFive;

  function pickUp5(){
      let newArray5 = [];
      for(let arr of resultFiveDays.list){
          if(new Date((arr.dt)*1000).toLocaleDateString('default',{timeZone:finalOutcome.timezone}) === d5){
              newArray5.push(arr);
          }
          
      }
      return newArray5;

  }
  
  // a 3-hour step


  let newArr5 = pickUp5();
  //console.log(newArr5);
 
  
  for(let i = 0; i < newArr5.length; i++){
      
  
          let first_step5 = (newArr5[i].dt)*1000;
          const first_step_time5 = new Date(first_step5);
          document.querySelector("#fiveDayTable").rows[0].cells[i+1].textContent= first_step_time5.toLocaleTimeString('en-Us',{timeZone:finalOutcome.timezone,hour:'2-digit',minute:'2-digit'});

          let first_step_icon5 = newArr5[i].weather[0].icon;
          document.querySelector("#fiveDayTable").rows[1].cells[i+1].innerHTML = `<img src='http://openweathermap.org/img/wn/${first_step_icon5}@2x.png'>`;

          let first_step_forecast5 = newArr5[i].weather[0].main;
          document.querySelector("#fiveDayTable").rows[2].cells[i+1].innerHTML = first_step_forecast5;
          
          let first_step_temp5 = newArr5[i].main.temp;
          document.querySelector("#fiveDayTable").rows[3].cells[i+1].innerHTML = Math.round(first_step_temp5) + '&#8451;';

          let first_step_feel5 = newArr5[i].main.feels_like;
          document.querySelector("#fiveDayTable").rows[4].cells[i+1].innerHTML = Math.round(first_step_feel5) + '&#8451;';
      
          let first_step_wind_direction5 = newArr5[i].wind.deg;
          let wind_direction1_5 = toTextualDescription(first_step_wind_direction5);
          let first_step_wind_speed5 = newArr5[i].wind.speed;
          document.querySelector("#fiveDayTable").rows[5].cells[i+1].textContent = `${first_step_wind_speed5} ${wind_direction1_5}`;
          
          function  toTextualDescription(degree){
              if (degree>337.5) return 'Northerly';
              if (degree>292.5) return 'North Westerly';
              if(degree>247.5) return 'Westerly';
              if(degree>202.5) return 'South Westerly';
              if(degree>157.5) return 'Southerly';
              if(degree>122.5) return 'South Easterly';
              if(degree>67.5) return 'Easterly';
              if(degree>22.5){return 'North Easterly';}
              return 'Northerly';
          }
          toTextualDescription(first_step_wind_direction5);                           
      
      
      } 

     }
    
    }

    }
  
  
  catch (err) {

    console.log(err);

   }
}



        

/*function funcA(c){
    function funcB(d){
     return c+d;
    }
    return funcB;
 }
  console.log(funcA(5)(10));*/
    

    
    
        
    
    
  
  

