const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const countryName = params.get("name");

const url = `https://restcountries.com/v3.1/name/${countryName}`;
console.log(url);

async function countryApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    getInfo(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
countryApi();

function getInfo(data) {
  data.forEach((country) => {
    console.log(country.name.common);
  });
}
