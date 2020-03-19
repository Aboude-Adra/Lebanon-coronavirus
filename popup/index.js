const fetchFromApi = async () => {
    return new Promise(async (res, rej) => {
        const response = await fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=LB");
        const json = await response.json();

        const confirmed = json.locations[0].latest.confirmed
        const deaths = json.locations[0].latest.deaths
        const recovered = json.locations[0].latest.recovered
        
        res({
            "confirmed": confirmed,
            "deaths": deaths,
            "recovered": recovered,
        });
    });
};

const setValues = (data) => {
    const totalEl = document.querySelector("#all-cases");
    const deathsEL = document.querySelector("#deaths");
    const recoveredEl = document.querySelector("#recovered");

    totalEl.innerHTML = data.confirmed;
    deathsEL.innerHTML = data.deaths;
    recoveredEl.innerHTML = data.recovered;
};

window.onload = () => {
    fetchFromApi().then(data => {
        setValues(data)
    });
};