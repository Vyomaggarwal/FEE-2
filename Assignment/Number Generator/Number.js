function generateNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('display').innerHTML = "Generated Number: " + randomNumber;
}
