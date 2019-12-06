function fun(){
    
//window.addEventListener('load',()=>{
let long;
let lat;
let temperatureDescription=document.querySelector(".temperature-description");
let temperatureFahrenheit=document.querySelector(".temperature-fahrenheit");
let temperatureTimezone=document.querySelector(".location-timezone");
let temperatureCelsius=document.querySelector(".temperature-celsius");
let temperatureDescriptionFuture=document.querySelector(".temperature-description_future");
let temperatureDescriptionuHourly=document.querySelector(".temperature-description_hourly");

if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(position=>{

long=position.coords.longitude;
lat=position.coords.latitude;


let locationSearchData=document.querySelector('select').value;
for(let dataFlow of locationData)
{
   if(dataFlow["name"]==locationSearchData)
   {
      lat=dataFlow["data"]["latitude"];
      long=dataFlow["data"]["longitude"]
   } 
}

console.log(long);
console.log(lat);

const proxy="http://cors-anywhere.herokuapp.com/";
const api=`${proxy}https://api.darksky.net/forecast/cd7471b02431d8a4aef34d22afd6e1aa/${lat},${long}`;
fetch(api)
.then(Response =>{
    return Response.json();
}).then(data=>{
    console.log(data);
    const {temperature, summary}=data.currently;
    temperatureFahrenheit.textContent=temperature;
    let Celsius=(temperature-32)*5/9;
    temperatureCelsius.textContent=Celsius;
    temperatureDescription.textContent=summary;
    temperatureTimezone.textContent=data.timezone;
    temperatureDescriptionuHourly.textContent=data.hourly.summary;
    temperatureDescriptionFuture.textContent=data.daily.summary;
    });
});
}
//});

}




var locationData=[{
    name :"Chittorgarh" ,
    data :{
        latitude :24.879999,
        longitude :74.629997
    }
},
{
    name :"Ratnagiri" ,
    data :
    {
        latitude :16.994444,
        longitude :73.300003
    }
},
{
    name :"Pindwara" ,
    data :
    {
        latitude :24.794500,
        longitude :73.055000
    }
},
{
    name :"Bhubaneswar" ,
    data :
    {
        latitude :20.296059,
        longitude :85.824539
    }
},
{
    name :"Alipurduar" ,
    data :
    {
        latitude :26.491890,
        longitude :89.527100
    }
},
{
    name :"Bihar" ,
    data :
    {
        latitude :25.477585,
        longitude :85.709091
    }
},
{
    name :"Goregaon" ,
    data :
    {
        latitude :19.155001,
        longitude :72.849998
    }
}];

let output="";
let optionelement="";
for(let outdata of locationData)
{
    
    
    output+=`<option selected="selected" value=${outdata["name"]}>${outdata["name"]}</option>`

    document.getElementById('select').innerHTML=output;
   // document.getElementById('span1').innerHTML=outdata["data"]["latitude"];
   
    console.log(outdata["name"]);
   // console.log(outdata["data"]["latitude"]);
}
