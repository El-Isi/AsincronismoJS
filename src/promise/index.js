const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('hey!');
        } else {
            reject('whooops!');
        }
    });
}

/*somethingWillHappen().then( response =>{
    console.log(response);
}).catch(err => {
    console.log(err);
});*/

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve('True!');
            }, 2000);
        } else {
            const error = new Error('Whooops!');
            reject(error);
        }
    });
}

/*somethingWillHappen2().then( response => {
    console.log(response);
}).catch( err => {
    console.log(err);
});*/

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then( response => {
        console.log('array ' , response);
    }).catch( err => {
        console.error(err);
})
