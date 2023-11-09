/*function letsDance(danceStyle) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            if (danceStyle === 'polka') {
                resolve('Yes, polka is my thing!');
            } else {
                reject(new Error('Nope'));
            }

        }, 2000);
    });
}

async function initiateDance(danceStyle) {
    try {
        const response = await letsDance(danceStyle);
        console.log(response);
    } catch (error) {
        console.log('Det blev fel:', error.message);
    }
}


initiateDance('polka');





// letsDance('hiphop')
// .then((response) => {
//     console.log(response);
// })
// .catch((reject) => {
//  console.log(reject)
// })
*/

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
        const response = await fetch('https://majazocom.github.io/Data/pokemons.json');
        const data = await response.json();

        console.log(data);
        displayBeers(data);
    } catch (error) {
        console.log('Could not get beers');
    }
    
}

getBeers();