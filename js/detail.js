const queryString = document.location.search; // querystring = ?name=Iceland&id=10
const params = new URLSearchParams(queryString); // {"name": "Iceland", "id":"10"}
const countryName = params.get("name"); //countryname = "Iceland"

const url = `https://restcountries.com/v3.1/name/${countryName}`;
console.log(url);

async function detailCountry() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    getDetails(data);
    const changeTitle = data[0].name.common;
    document.title = `Details - ${changeTitle}`;
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
detailCountry();

function getDetails(data) {
  const countryName = data[0].name.common;
  console.log(data[0].name.common);
}
