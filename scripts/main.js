const CLEAPI = "b1242b3f54608645ce49a3bf6dfb3d68";
let resultatApi;

const temps = document.querySelector(".temps");
const temperature = document.querySelector(".temperature");
const localisation = document.querySelector(".localisation");

//Ottengo la geolocalizzazione dal browser
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      //   console.log(position);

      let long = position.coords.longitude;
      let lat = position.coords.latitude;

      AppelAPI(long, lat);
    },
    () => {
      alert(
        `Vous avez refusé la géolocalisation, l'application ne peux pas fonctionner, veilleuz  l'activer.!`
      );
    }
  );
}

//FUNCTIONS

function AppelAPI(long, lat) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEAPI}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      resultatApi = data;
      temps.innerText = resultatApi.current.weather[0].description;
      temperature.innerText = `${Math.trunc(resultatApi.current.temp)}°`;
      localisation.innerText = resultatApi.timezone;
    });
}
