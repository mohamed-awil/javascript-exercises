function checkPromise(){

    return new Promise ((resolve,reject)=> {
    setTimeout(()=>{
      
          const checking = false;

        if (checking) {
            resolve(`Waad guulaysatay`)
        } else {
            reject(`Maad guulaysan`)
        }

         },2000);
        
    })
}


// async/await
async function displayMessage() {
    try {
        const message = await checkPromise();
        console.log(message)
    } catch (err) {
        console.log(err)
    }
}

displayMessage()