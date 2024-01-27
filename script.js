let srcBox = document.querySelector("#inpt");
let btn = document.querySelector("#btn");
let image = document.querySelector(".weather-icon");

const url = "https://api.openweathermap.org/data/2.5/weather?&appid=4af6c9b3fb0630fae59a03a08296fca2&units=metric&";

async function getWeather(ctyName) {
  let curr_url = url + "q=" + ctyName;
  let data = await fetch(curr_url);
  let dataJson = await data.json();
  
  document.querySelector(".city").innerHTML = dataJson.name;
  document.querySelector(".temp").innerHTML = Math.round(dataJson.main.temp) + "°C";
  document.querySelector(".wind").innerHTML = dataJson.wind.speed + " km/h";
  
  let date = new Date(dataJson.sys.sunset * 1000);
  document.querySelector("#sunset").innerHTML = date.getHours() + ":" + date.getMinutes();

  updateIcon(dataJson.weather[0].main); 
  changeTheme(dataJson.weather[0].main); 
}


function updateIcon(icon){
  switch (icon) {
    case "Clouds":
      image.src = "clouds.png";
      break;
    case "Clear":
      image.src = "clear.png";
      break;
    case "Rain":
      image.src = "rain.png";
      break;
    case "Snow":
      image.src = "snow.png";
      break;
    case "Drizzle":
      image.src = "drizzle.png";
      break;
    default :
      image.src = "clear.png";
  }
}


function changeTheme(icon){
  console.log(icon); 
  let crd = document.querySelector(".card"); 
  
  switch (icon) {
    case "Clouds": {
        document.body.style.background = "#003366";  
        crd.style.background = "linear-gradient(10deg, #003366 , #66b3ff)"; 
      }
      break;
    case "Clear":{
        document.body.style.background =  "	#c9c91d";        
        crd.style.background = "linear-gradient(10deg, #999900 , #ffff99)"; 
      }
      break;
    case "Rain":{
        document.body.style.background =  "#1d2125";        
        crd.style.background = "linear-gradient(10deg, #1a1a1a, #a6a6a6)"; 
      }
      break;
    case "Snow":{
        document.body.style.background =  "#f2f2f2";        
        crd.style.background = "linear-gradient(10deg, #cccccc , #ffffff)";   
      }
      break;
    case "Drizzle":{
        document.body.style.background =  "#527a7a";        
        crd.style.background = "linear-gradient(10deg, #527a7a , #c2d6d6)"; 
      }
      break;
    default :{
        document.body.style.background = "#0073e6";  
        crd.style.background = "linear-gradient(10deg, #b3b300, #ffffb3)"; 
      }
  }
}


btn.addEventListener("click", () => {
  getWeather(srcBox.value);
});