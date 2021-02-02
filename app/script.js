document.querySelector('.button-primary').onclick = function () {
	let cityName = document.querySelector('.listcountry').value;

	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=beff25eb1441783a9bf78a772e2b4cbf`)
		// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=beff25eb1441783a9bf78a772e2b4cbf`)
		.then(function (resp) {
			return resp.json()
		})



		.then(function (forecast) {
			console.log(forecast);
			let visiableColumnWeather = document.querySelector('.pricing-table')
			visiableColumnWeather.classList.remove("unvisiable");

			function fewDay(name, fullDay, numberDay, numberDayDesc, numberDayTemp, numberDayFeather) {
				document.querySelector(name).innerHTML = forecast.city.name;
				let forecastDate = forecast.list[`${fullDay}`].dt_txt;
				document.querySelector(numberDay).textContent = forecastDate;

				document.querySelector(numberDayDesc).textContent = forecast.list[`${fullDay}`].weather[0]['description'];
				document.querySelector(numberDayTemp).innerHTML = Math.round(forecast.list[`${fullDay}`].main.temp - 273) + '&deg;';
				document.querySelector(numberDayFeather).innerHTML = `<img src="https://openweathermap.org/img/wn/${forecast.list[`${fullDay}`].weather[0]['icon']}@2x.png">`;


			}

			fewDay('.city-1', 0, '.day1-date', '.day1-desc', '.day1-temp', '.day1-feather');
			fewDay('.city-2', 6, '.day2-date', '.day2-desc', '.day2-temp', '.day2-feather');
			fewDay('.city-3', 12, '.day3-date', '.day3-desc', '.day3-temp', '.day3-feather');
			fewDay('.city-4', 24, '.day4-date', '.day4-desc', '.day4-temp', '.day4-feather');

		})
		.catch(function () {
			// catch any errors
		});
}