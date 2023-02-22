let all = "all";

let findCountry = "";
let region = "europe";
const loader = document.querySelector(".loading");

// Call ALL Countries
async function countryApi() {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/${all}`); //https://restcountries.com/v3.1/
    const data = await response.json();
    console.log(data);

    getInfo(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}

// Call Continents

async function getCountryByName() {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${findCountry}`
    );
    const data = await response.json();
    console.log(data);

    // byContinents(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}

// Call Countries By Contintents
async function getCountriesByContinent() {
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`
  );
}
const searchCountry = document.querySelector(".search-country");
const buttonName = document.querySelector(".button-name");

buttonName.addEventListener("click", () => {
  findCountry = searchCountry.value;
  console.log("Click", findCountry);
  getCountryByName();
});

function getInfo(data) {
  data.forEach((country) => {
    //console.log(country.name.common);
    //console.log(country.flags.png);
    //console.log(country.capital);

    const container = document.createElement("div");
    container.classList.add("card-prop");
    const countryLink = document.createElement("a");
    countryLink.classList.add("card-link");
    const heading = document.createElement("h2");
    const countryFlag = document.createElement("img");
    const countryCapital = document.createElement("h3");
    //
    heading.textContent = country.name.common;
    countryLink.href = `details.html?name=${country.name.common}`;
    countryLink.textContent = `More details`;
    countryFlag.src = `${country.flags.png}`;
    countryCapital.textContent = `${country.capital}`;
    //
    container.append(heading, countryFlag, countryCapital, countryLink);
    document.querySelector(".container").append(container);
  });
}

function byContinents(data) {
  for (let i = 0; i < data.length; i++) {
    //console.log(data[i].continents[0]);
  }
}
countryApi();
//getCountryByName();
