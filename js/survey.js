let inputBox = document.getElementsByClassName('box')
let listContainer = document.getElementsByClassName('poop-form__list-container');
let form = document.getElementsByClassName('content__poop-form');

function addTask() {
    if (inputBox[0].value === '') {
        alert("You must write something!")
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox[0].value;
        li.classList.add("defecation-list__item")
        listContainer[0].appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.classList.add("defecation-list__item--delete")
        li.appendChild(span);
    }
    inputBox[0].value = '';
    saveData();
}

form[0].addEventListener('submit', function (e) {
    e.preventDefault();
})
listContainer[0].addEventListener('click', function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer[0].innerHTML);
}

function showTask() {
    listContainer[0].innerHTML = localStorage.getItem("data");
}


showTask();
