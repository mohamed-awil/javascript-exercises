
async function fetchUsers (){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!response.ok){
            throw new Error(`HTTP error status: ${response.status}`)
        };

        const data = await response.json();
        console.log('Response 🔥');
        console.table(data)


    }catch(err){
        console.log(err)
    }
}

fetchUsers()