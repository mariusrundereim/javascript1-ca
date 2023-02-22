const queryString = document.location.search; // querystring = ?name=Iceland&id=10
const params = new URLSearchParams(queryString); // {"name": "Iceland", "id":"10"}
const countryName = params.get("name"); //countryname = "Iceland"

const url = `https://restcountries.com/v3.1/name/${countryName}`;
//console.log(url);

async function detailCountry() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    getDetails(data);
    //getTranslations(data);
    const changeTitle = data[0].name.common;
    document.title = `Details - ${changeTitle}`;
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
detailCountry();

function getDetails(data) {
  data.forEach((country) => {
    return (document.querySelector(".detail-section").innerHTML += `
    <div class="details-section"><h2>${country.name.common}</h2><h3>${country.continents}</h3>
    <img class="detail-flag-img" src="${country.flags.png}"></img>
    <p>Car on ${country.car.side} side</p>
    <p>Population: ${country.population}</p></div>`);
  });
}

// function getTranslations(data) {
//   data.forEach((country) => {
//     console.log(country.translations);
//     const translateLang = country.translations;
//     for (let i = 0; i < translateLang.length; i++) {
//       console.log(translateLang[i]);
//     }
//   });
// }
