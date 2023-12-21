function useless(callback) {
    return callback
}

var text = 'Amigo';

assert(
    useless(function () { return text; }) === text,
    "The useless function works! " + text);
function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
    showTime();
}, 1000);
