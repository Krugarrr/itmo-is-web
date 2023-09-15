function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

async function printRandomPost() {
    let title = document.getElementById("title");
    let content = document.getElementById("content");
    let randomPostNumber = getRandomInt(100);
    const downloadBtn = document.getElementById('content')
    try {
        let response;
        const call = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostNumber}`).then((call) => call.json())
            .then((json) => {
                response = json;
                title.appendChild(document.createTextNode(json.title));
                content.appendChild(document.createTextNode(json.body));
            });
        const result = await response;
        console.log("Success", result);

    } catch (error) {
        toastr.error('Something went wrong', 'Упсиии', {timeout: 10000, positionClass: "toast-top-full-width"});
        console.log('Failure' + error.message);
    }

}

document.addEventListener("DOMContentLoaded", printRandomPost);


