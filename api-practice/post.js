const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            displayPost(data);
        })
}

const displayPost = (posts) => {
    // console.log(posts)
    const postContainer = document.getElementById("post-container");
    for (const post of posts) {
        console.log(post);
        const title = post.title;
        const body = post.body;
        const div = document.createElement('div');
        div.classList.add("card");
        div.innerHTML = `
        <h3>${title}</h3>
        <p>${body}</p>
        `
        postContainer.appendChild(div);
    }
}

handlePost()