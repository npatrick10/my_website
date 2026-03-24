    // number 9
    const number = parseInt(prompt('enter an integer'));
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        document.write(number + ' is a prime number.');
    } else {
        document.write(number + ' is not a prime number.');
    }
    if (isPrime) {
    document.querySelector('#target').innerHTML = number + ' is a prime number.';
} else {
    document.querySelector('#target').innerHTML = number + ' is not a prime number.';
}