const handleUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");

        const data = await response.json();
        console.log(data);
    }
    catch {
        console.log("There's an error!");
    }
}

handleUser()

