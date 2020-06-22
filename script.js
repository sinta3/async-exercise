let endpoint = `https://restcountries.eu/rest/v2/all`;
let options = {
    method: "GET",
};
let i = 0;
async function getCountryData() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();
        results.forEach((result) => {
            console.log(result.name);
            i += 1;
            return i;
        });
    } catch (error) {
        console.log(error);
    }
    console.log(`jumlah negara ${i}`);
}
getCountryData();
