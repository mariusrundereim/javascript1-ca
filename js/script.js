let all = "all";

let findCountry = "";
let region = "europe";

const searchCountry = document.querySelector(".search-name");
const buttonName = document.querySelector(".button-name");

// Call ALL Countries
async function countryApi() {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/${all}`); //https://restcountries.com/v3.1/
    const data = await response.json();
    //console.log(data);

    getInfo(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}

// Call Continents by Name

async function getCountryByName() {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${findCountry}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}

buttonName.addEventListener("click", () => {
  findCountry = searchCountry.value;
  console.log("Click", findCountry);
  getCountryByName();
});

// Call Countries By Contintents
async function getCountriesByContinent() {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await response.json();
    //console.log(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}

function getInfo(data) {
  data.forEach((country) => {
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

countryApi();
getCountryByName();
getCountriesByContinent();
//getCountryByName();
