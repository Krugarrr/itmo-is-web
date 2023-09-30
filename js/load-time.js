function printLoadTimeText() {
    let element = document.getElementsByClassName("load-time");
    let loadTime = window.performance.getEntriesByType("navigation");
    let text = document.createTextNode(`load time: ${Math.round(loadTime[0].domComplete)}ms`);
    element[0].appendChild(text);
}

window.addEventListener('load', () => printLoadTimeText());
