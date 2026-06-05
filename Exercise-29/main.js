async function fetchComments(){

    console.log("Starting fetching comments");

    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const commentsData = await response.json()

    console.log(commentsData);
}

fetchComments()