const apikey = "74ec3bc36c500f4accce841c8c040d77";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".Search input");
const searchbtn = document.querySelector(".Search button");
const weathericon = document.querySelector(".Weather-Icon");

async function checkweather(City) {
	const response = await fetch(apiurl + City + `&appid=${apikey}`)

	if (response.status == 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {
		var data = await response.json();

		document.querySelector(".City").innerHTML = data.name;
		document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°c";
		document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";


		if (data.weather[0].main == "Clouds") {
			weathericon.src = "https://static.vecteezy.com/system/resources/previews/018/802/706/non_2x/cartoon-comic-cloud-png.png"
		}
		else if (data.weather[0].main == "Clear") {
			weathericon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222800.png"
		} else if (data.weather[0].main == "Rain") {
			weathericon.src = " https://clipart-library.com/image_gallery/177132.png"
		}
		else if (data.weather[0].main == "Drizzle") {
			weathericon.src = "https://www.freepnglogos.com/uploads/rain-png/cloud-rain-sky-transparent-picture-12.png"
		}
		else if (data.weather[0].main == "Mist") {
			weathericon.src = "https://www.pngplay.com/wp-content/uploads/15/Fog-Clouds-PNG-Photos.png"
		}

		document.querySelector(".weather").style.display = "block"
		document.querySelector(".error").style.display = "none";
	}


}

searchbtn.addEventListener("click", () => {
	checkweather(searchbox.value);
})


