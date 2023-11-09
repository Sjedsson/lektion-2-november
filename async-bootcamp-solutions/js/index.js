function letsDance(danceStyle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (danceStyle == 'polka') {
                resolve('Yes, polka is my thing');
            } else {
                reject('Not even for a million bucks');
            }
        }, 2000);
    });
}

letsDance('polka').then((answer) => {
    console.log(answer);
}).catch((answer) => {
    console.log(answer);
});

// Med async / await

async function dance() {
    try {
        const answer = await letsDance('charleston');
        console.log(answer);
    } catch (error) {
        console.log(error);
    }
}

dance();