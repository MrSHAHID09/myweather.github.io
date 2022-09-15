let searchButton = document.querySelector(".search-button");
let gpsButton = document.querySelector('.gps-button');


async function getApiData(placeDetail) {
  let urlPath = `http://api.weatherapi.com/v1/current.json?key=1484cda77d99411aba1162115221007&q=${placeDetail}&aqi=no`;

  await fetch(urlPath)
    .then((resp) => resp.json())
    .then((myData) =>  {
        let placeNameDetail = `${myData.location.name} ${myData.location.region}`;
        document.querySelector(".place-name").innerHTML = placeNameDetail;
        document.querySelector(".temperature").innerHTML = myData.current.temp_c;
    })
    .catch((err) => {
      console.warn("Sorry we are unable to find weather detail");
    });

}



searchButton.addEventListener("click", () => {
  let placeName = document.querySelector(".input-bar").value;
  getApiData(placeName);
});

gpsButton.addEventListener('click' , ()=>{
    navigator.geolocation.getCurrentPosition (position=>{
        
        let latLong = `${position.coords.latitude},${position.coords.longitude}`
        getApiData(latLong);
        console.log(latLong);
        
})});
