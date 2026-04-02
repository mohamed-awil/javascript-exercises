const people = [
    {
        name: "Mohamed", age: 21, city: "Guri'el",
    },
    {
        name: "Khalid", age: 21, city: "Mogadisho",
    },
    {
        name: "Fatima", age: 30, city: "Kismaayo"
    },
]

for(person of people)  {
    for (let key in person) {
        console.log(key +": "+ person[key]);
        
    }
    console.log("---");
}