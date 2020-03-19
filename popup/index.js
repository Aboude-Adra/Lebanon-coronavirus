const fetchFromApi = async () => {
    return new Promise(async (res, rej) => {
        const response = await fetch("https://corona.lmao.ninja/countries/Lebanon");
        const json = await response.json();

        // const confirmed = json.locations[0].latest.confirmed
        // const deaths = json.locations[0].latest.deaths
        // const recovered = json.locations[0].latest.recovered
        const confirmed = json.cases
        const todayCases = json.todayCases
        const deaths = json.deaths
        const recovered = json.recovered
        
        res({
            "confirmed": confirmed,
            "deaths": deaths,
            "recovered": recovered,
            "todayCases": todayCases,
        });
    });
};

const setValues = (data) => {
    const totalEl = document.querySelector("#all-cases");
    const deathsEL = document.querySelector("#deaths");
    const recoveredEl = document.querySelector("#recovered");
    const todayCasesEl = document.querySelector("#todayCases");

    totalEl.innerHTML = data.confirmed;
    deathsEL.innerHTML = data.deaths;
    recoveredEl.innerHTML = data.recovered;
    todayCasesEl.innerHTML = data.todayCases;
};

window.onload = () => {
    fetchFromApi().then(data => {
        setValues(data)
    });
};