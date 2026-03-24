  // number 7
    const numRolls = parseInt(prompt('enter the number of dice rolls'));
    let totalSum = 0;
    for (let i = 0; i < numRolls; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        totalSum += roll;
    }
    document.querySelector('#target').innerHTML = 'the sum of the results of the dice rolls is: ' + totalSum;