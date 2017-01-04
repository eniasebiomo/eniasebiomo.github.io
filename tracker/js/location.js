function changeLocation1() {
    document.getElementById('eni-location').innerHTML = 'class!';
}

function changeLocation2() {
    var userInput = document.getElementById('userInput').value;
    document.getElementById('eni-location').innerHTML = userInput + '!';
}
