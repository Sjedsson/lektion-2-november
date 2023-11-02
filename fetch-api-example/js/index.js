// function getBeers() {
//     fetch('https://api.punkapi.com/v2/beers').then(function (response) {
//         console.log(response);
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//     }).catch(function(error) {
//         console.log(error);
//     })
// }

const beersElem = document.querySelector('section');

function displayBeers(beers) {
    let allBeers = '';

    for(let i = 0; i < beers.length; i++) {
        console.log(beers[i]);
        allBeers = allBeers + `
            <article>
                <img src="${beers[i].image_url}" />
                <h2>${beers[i].name}</h2>
                <p>${beers[i].description}</p>
            </article>
        `
    }

    beersElem.innerHTML = allBeers;
}

async function getBeers() {
    try {
        const response = await fetch('https://api.punkapi.com/v2/beers');
        const data = await response.json();

        console.log(data);
        displayBeers(data);
    } catch (error) {
        console.log('Could not get beers');
    }
    
}

getBeers();