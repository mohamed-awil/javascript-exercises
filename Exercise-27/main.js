function checkPromise(){

    return new Promise ((resolve,reject)=> {
    setTimeout(()=>{
      
          const checking = true;

        if (checking) {
            resolve(`Waad guulaysatay`)
        } else {
            reject(`Maad guulaysan`)
        }

         },2000);
        
    })
}

checkPromise()
.then((message)=> console.log(message))
.catch((err)=> console.log(err))
   
