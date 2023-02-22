const queryString = document.location.search; // querystring = ?name=Iceland&id=10
const params = new URLSearchParams(queryString); // {"name": "Iceland", "id":"10"}
const countryName = params.get("name"); //countryname = "Iceland"
//const countryName = "denmark";

const url = `https://restcountries.com/v3.1/name/${countryName}`;
console.log(url);

async function countryCon() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
countryCon();
