let current = document.location.href
document.querySelectorAll('.nav-item')
    .forEach(link => {
    if (link.href.includes(current)) {
        link.classList.add('active')
    }
})
