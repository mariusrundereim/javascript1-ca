const url = "https://restcountries.com/v3.1/";
// const urlName = "https://restcountries.com/v3.1/name";
let query = "all";
async function countryApi() {
  try {
    const response = await fetch(url + query);
    const data = await response.json();

    console.log(data);

    /*
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name.common);
      console.log("Land is in:", data[i].continents[0]);
    }
    */

    /*
    data.forEach((country) => {
      console.log(country.name.common);
    });
    */

    getInfo(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
countryApi();

function getInfo(data) {
  data.forEach((country) => {
    //console.log(country.name.common);
    //console.log(country.flags.png);
    //console.log(country.capital);
    const container = document.createElement("div");
    container.classList.add("card-prop");
    const countryLink = document.createElement("a");
    const heading = document.createElement("h2");
    const countryFlag = document.createElement("img");
    const countryCapital = document.createElement("h3");
    //
    heading.textContent = country.name.common;
    countryLink.href = `details.html?=${country.name}`;
    countryLink.textContent = `Link`;
    countryFlag.src = `${country.flags.png}`;
    countryCapital.textContent = `${country.capital}`;
    //
    container.append(heading, countryFlag, countryCapital, countryLink);

    document.querySelector(".container").append(container);
  });
}
