function showDate(params) {
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = today.toLocaleDateString("ru-RU");
}

setInterval(showTime, 1000);