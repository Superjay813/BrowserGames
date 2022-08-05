function clock() {
    const d = new Date();
    const hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    const minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    const seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    const pmAm = hours > 12 ? "PM" : "AM";

    if (hours > 12) {
        hours = d.getHours() - 12;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("pmAm").innerHTML = pmAm;
}

//Repeats the function every second to run the display.
setInterval(function(){clock()}, 1000);