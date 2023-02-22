const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const countryName = params.get("name");
//const countryName = "denmark";

const url = `https://restcountries.com/v3.1/name/${countryName}`;
console.log(url);
