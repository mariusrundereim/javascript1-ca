const url = "https://restcountries.com/v3.1/";
// const urlName = "https://restcountries.com/v3.1/name";
let query = "all";
async function countryApi() {
  try {
    const response = await fetch(url + query);
    const data = await response.json();

    console.log(data);
    console.log(data[4].name.common);

    /*
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name.common);
      console.log("Land is in:", data[i].continents[0]);
    }
    */

    data.forEach((country) => {
      console.log(country.name.common);
    });

    // countryName.forEach((countries) => listCommon(countries));
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
countryApi();

/*

function get(id) {
  const arr = ["norge", "sverige", "danmark"];
  return arr[id];
}

let myCountry = get(2);

*/
