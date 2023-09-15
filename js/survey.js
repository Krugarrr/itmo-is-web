let inputBox = document.getElementById('box')
let listContainer = document.getElementById('list-container');
let form = document.getElementById('poop-form');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!")
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
})
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}


showTask();
