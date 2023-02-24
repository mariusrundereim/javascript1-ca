let all = "all";
let findCountry = "";
let region = "";

const loader = document.querySelector(".loading");
const searchCountry = document.querySelector(".search-name");
const buttonName = document.querySelector(".button-name");
const byContinents = document.querySelector("#continent");
const buttonContinents = document.querySelector(".button-con");

const sortIcon = document.querySelector(".sort-icon");

console.log(sortIcon);

// Call ALL Countries
async function countryApi() {
  document.querySelector(".container").innerHTML = "";
  try {
    loader.classList.add("show");
    const response = await fetch(`https://restcountries.com/v3.1/${all}`); //https://restcountries.com/v3.1/
    const data = await response.json();
    //console.log(data);
    getAll(data);
    setTimeout(() => {
      loader.classList.remove("show");
    }, 800);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}

function getAll(data) {
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

function setSingleCountry(country) {
  document.querySelector(".container").innerHTML = "";
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
}

// Call Continents by Name

async function getCountryByName() {
  try {
    loader.classList.add("show");
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${findCountry}`
    );
    const data = await response.json();
    console.log(data);

    setSingleCountry(data[0]);
    loader.classList.remove("show");
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}

// Call Countries By Contintents
async function getCountriesByContinent() {
  document.querySelector(".container").innerHTML = "";
  try {
    loader.classList.add("show");
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await response.json();
    console.log(data);
    getRegions(data);
    loader.classList.remove("show");
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}

function getRegions(data) {
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
//getCountryByName();

//getCountriesByContinent();
//getCountryByName();

buttonName.addEventListener("click", () => {
  findCountry = searchCountry.value;

  getCountryByName();
});

buttonContinents.addEventListener("click", () => {
  region = byContinents.value;
  console.log(region);
  getCountriesByContinent();
});

//sorting of countries

async function countryApiSorted() {
  document.querySelector(".container").innerHTML = "";
  try {
    loader.classList.add("show");
    const response = await fetch(`https://restcountries.com/v3.1/${all}`); //https://restcountries.com/v3.1/
    const data = await response.json();
    //console.log(data);
    data.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });
    getAll(data);
    setTimeout(() => {
      loader.classList.remove("show");
    }, 3000);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
//sorted reverse
async function countryApiReverse() {
  document.querySelector(".container").innerHTML = "";
  try {
    loader.classList.add("show");
    const response = await fetch(`https://restcountries.com/v3.1/${all}`); //https://restcountries.com/v3.1/
    const data = await response.json();
    //console.log(data);
    data.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return 1;
      }
      if (a.name.common > b.name.common) {
        return -1;
      }
      return 0;
    });
    getAll(data);
    setTimeout(() => {
      loader.classList.remove("show");
    }, 3000);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
