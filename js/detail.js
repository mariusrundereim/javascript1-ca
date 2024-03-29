const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const countryName = params.get("name");

const loader = document.querySelector(".loading");

const url = `https://restcountries.com/v3.1/name/${countryName}`;

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
    </div>`);
  });
}
