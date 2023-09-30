let current = document.location.href
document.querySelectorAll('.top-nav__item')
    .forEach(link => {
    if (link.href.includes(current)) {
        link.classList.add('active')
    }
})
