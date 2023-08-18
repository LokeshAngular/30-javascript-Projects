
const searchBox = document.querySelector('.search input');
const serchBtn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const apikey = "46f80a02ecae410460d59960ded6e1c6";
    const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
    if (responce.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await responce.json();
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";
        // weatherDetails
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "../weatherimages/images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "../weatherimages/images/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "../weatherimages/images/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "../weatherimages/images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "../weatherimages/images/mist.png"
        }
    }
}
serchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
