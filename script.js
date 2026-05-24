const time = document.getElementById("time");
const button = document.getElementById("toggle-btn");

let format24 = false;

function showTime() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (format24) {

        if (hours < 10) {
            hours = "0" + hours;
        }

        time.textContent =
            hours + ":" + minutes + ":" + seconds;

    }

    else {

        let ampm = "AM";

        if (hours >= 12) {
            ampm = "PM";
        }

        if (hours > 12) {
            hours = hours - 12;
        }

        if (hours == 0) {
            hours = 12;
        }

        time.textContent =
            hours + ":" + minutes + ":" + seconds + " " + ampm;
    }
}

button.onclick = function () {

    format24 = !format24;

    showTime();
};

setInterval(showTime, 1000);

showTime();