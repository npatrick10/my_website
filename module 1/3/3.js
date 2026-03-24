
    // number 3
    const num1 = parseInt(prompt('enter first number'));
    const num2 = parseInt(prompt('enter second number'));
    const num3 = parseInt(prompt('enter third number'));
    const sum = num1 + num2 + num3;
    const product = num1 * num2 * num3;
    const average = sum / 3;
    document.querySelector('#target').innerHTML = 'the sum of the numbers is: ' + sum + '<br>' +
        'the product of the numbers is: ' + product + '<br>' +
        'the average of the numbers is: ' + average;