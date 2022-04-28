let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0;

function increment() {
    if (currentNumber >= 10) {
        window.alert("Limite estabelecido. Atualize a página para nova contagem!")
    } else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber <= (-10)) {
        window.alert("Limite estabelecido. Atualize a página para nova contagem!")

    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        currentNumber.innerHTML.style.color = 'red'

    }

}