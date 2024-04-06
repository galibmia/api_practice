const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries =>{
    const tableBody = document.getElementById('table-body');
    
    const countryCount = countries.length;
    for(let i=0; i<countryCount; i++){
        let tr = document.createElement('tr');
        let tdSL = document.createElement('td');
        tdSL.innerText = i+1;
        tr.appendChild(tdSL);

        let tdCountry = document.createElement('td');
        tdCountry.innerText = countries[i].name.common;
        tr.appendChild(tdCountry);

        let tdCapital = document.createElement('td');
        tdCapital.innerText = countries[i].capital ? countries[i].capital [0] : "No Capital Found";
        tr.appendChild(tdCapital);

        // console.log(countries[i].cca2);
        let tdDetails = document.createElement('td');
        tdDetails.innerHTML = `
        <button onclick="loadDetails('${countries[i].cca2}')">Details</button>
        `;
        tr.appendChild(tdDetails);

        tableBody.appendChild(tr);
    }

}

const loadDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayCountryDetails(data[0]))

}

const displayCountryDetails = country =>{
    const displayCountryDetails = document.getElementById('display-country-details');
    displayCountryDetails.innerHTML = `
    <h2>Name: ${country.name.common}</h2>
    <img src="${country.flags.png}" alt="">
    `;
}

loadCountry();