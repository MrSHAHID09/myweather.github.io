let searchButton = document.querySelector(".search-button");
let gpsButton = document.querySelector('.gps-button');


async function getApiData(placeDetail) {
  let urlPath = `http://api.weatherapi.com/v1/current.json?key=1484cda77d99411aba1162115221007&q=${placeDetail}&aqi=no`;

  let myObj = [];

  await fetch(urlPath)
    .then((resp) => resp.json())
    .then((myData) => myObj.push(myData))
    .catch((err) => {
      console.warn("Sorry we are unable to find weather detail");
    });

  let placeNameDetail = `${myObj[0].location.name} ${myObj[0].location.region}`;

  document.querySelector(".place-name").innerHTML = placeNameDetail;
  document.querySelector(".temperature").innerHTML = myObj[0].current.temp_c;
}



searchButton.addEventListener("click", () => {
  let placeName = document.querySelector(".input-bar").value;
  getApiData(placeName);
});

gpsButton.addEventListener('click' , ()=>{
    navigator.geolocation.getCurrentPosition (position=>{
        
        let latLong = `${position.coords.latitude},${position.coords.longitude}`
        getApiData(latLong);
        
})});
