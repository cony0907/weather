const API_KEY = "c323327275c99cd57862ea3267b50094";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        weatherTemp.innerText =
          data.name + "," + parseInt(data.main.temp) + "℃";

        weatherIcon.src =
          "https://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png";
      });
  },
  () => alert("Not allowed!")
);
