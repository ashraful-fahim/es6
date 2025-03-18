let counter = 0;

function updateClock() {
    console.log('Current Time:', new Date().toLocaleTimeString());
    counter++;
    if (counter === 10) {
        clearInterval(intervalID);
        console.log('Clock stopped after 10 seconds.');
    }
}

const intervalID = setInterval(updateClock, 1000);

