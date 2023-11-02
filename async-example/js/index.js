// 1. Ta fram brödet ur påsen
function getToast(time){
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('1. Bröd framtaget.');
            resolve();
        }, time);
    });
}

// 2. Rosta
function toast(time){
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('2. Brödet rostat.');
            resolve();
        }, time);
    });
}

// 3. Smöra mackan
function butter(time){
    const butterExists = false;

    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            if (butterExists) {
                console.log('3. Brödet smörat.');
                resolve();
            } else {
                reject();
            }
            
        }, time);
    });
}

// 4. Lägg på en skiva ost
function cheese(time){
    const cheeseExists = true;

    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('4. Osten pålagd.');
            if (cheeseExists) {
                resolve();
            } else {
                reject();
            }
            
        }, time);
    });
}

// Kör!
// function makeToast(){
//     getToast(1000).then(function() {
//         toast(3000).then(function() {
//             butter(2000).then(function() {
//                 cheese(1000).then(function() {
//                 });
//             }).catch(function() {
//                 console.log('Smöret är slut!');
//             });
//         });
//     });


//     // getToast(1000);
//     // toast(3000);
//     // butter(2000);
//     // cheese(1000);
// }


async function makeToast(){
    try {
        await getToast(1000);
    } catch (error) {
        console.log('Det blev fel');
    }

    try {
        await toast(3000);
    } catch (error) {
        
    }

    try {
        await butter(2000);
    } catch (error) {
        console.log('Smöret är slut');
    }
    
    try {
        await cheese(1000);
    } catch (error) {
        
    }


    // getToast(1000);
    // toast(3000);
    // butter(2000);
    // cheese(1000);
}

makeToast()