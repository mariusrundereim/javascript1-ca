const queryString = document.location.search; // querystring = ?name=Iceland&id=10
const params = new URLSearchParams(queryString); // {"name": "Iceland", "id":"10"}
const countryName = params.get("name"); //countryname = "Iceland"

const loader = document.querySelector(".loading");

const url = `https://restcountries.com/v3.1/name/${countryName}`;
//console.log(url);

async function detailCountry() {
  try {
    loader.classList.add("show");
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    getDetails(data);

    //getTranslations(data);
    const changeTitle = data[0].name.common;
    document.title = `Details - ${changeTitle}`;
    loader.classList.remove("show");
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
detailCountry();

function getDetails(data) {
  data.forEach((country) => {
    console.log(country.maps.googleMaps);
    return (document.querySelector(".detail-section").innerHTML += `
    <div class="details-section">
    <h2>${country.name.common}</h2>
    <h3>${country.continents}</h3>
    <img class="detail-flag-img" src="${country.flags.png}"></img>
    <div class="detail-item">
    <h3>People in this country drive on <span class="api-result-focus">${country.car.side}</span> side</h3>
    </div>
    <div class="detail-item">
    <h3>Population: <span class="api-result-focus">${country.population}</span></h3>
    </div>
    <div class="detail-item"></div>
    <div class="detail-item"></div>
    <div class="map-container">
    <iframe
              src="${country.maps.googleMaps}"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    
    
    </div>`);
  });
}
