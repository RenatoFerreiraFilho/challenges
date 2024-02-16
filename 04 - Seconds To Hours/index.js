// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
    const minutesInOneHour = 60;
    const secondsInOneMinute = 60;
    const secondsInOneHour = minutesInOneHour * secondsInOneMinute;
    const timeHours = parseInt(seconds / secondsInOneHour);
    timeHours;
    const timeMinutes = parseInt(
        (seconds % secondsInOneHour) / secondsInOneMinute
    );
    console.log(seconds % secondsInOneHour);
    timeMinutes;
    const timeSeconds =
        seconds -
        timeHours * secondsInOneHour -
        timeMinutes * secondsInOneMinute;

    return (
        `0${timeHours}`.slice(-2) +
        ":" +
        `0${timeMinutes}`.slice(-2) +
        ":" +
        `0${timeSeconds}`.slice(-2)
    );
}

console.log(humanReadable(359999));
