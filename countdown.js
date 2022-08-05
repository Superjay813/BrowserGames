function countDown() {
    const d = new Date();
    const days = d.getDay();
    const months = d.getMonth() + 1;

    document.getElementById("days").innerHTML = days;
    document.getElementById("months").innerHTML = months;
}

//Repeats the function every second to run the display.
setInterval(function(){countDown()}, 1000);