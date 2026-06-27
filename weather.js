const apiKey = "YOUR_API_KEY";

async function getWeather(city){

try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

const data = await response.json();

document.getElementById("weather").innerHTML=`

<h3>${data.name}</h3>

<p>🌡 ${data.main.temp}°C</p>

<p>${data.weather[0].main}</p>

`;

}
catch{

document.getElementById("weather").innerHTML=

"City Not Found";

}

}