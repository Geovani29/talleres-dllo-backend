function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(findMax([3, 17, -1, 4, -19]));

function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(includes([3, 17, -1, 4, -19], 2));

function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(sum([3, 17, -1, 4, -19]));

function missingNumbers(array) {
    let min = array[0]
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) min = array[i];
        if (array[i] > max) max = array[i];
    }

    let missing = [];
    for (let num = min; num <= max; num++) {
        let found = false;
        for (let j = 0; j < array.length && !found; j++) {
            if (array[j] === num) found = true;
        }
        if (!found) missing.push(num);
    }
    return missing;
}


console.log(missingNumbers([7, 2, 4, 6, 3, 9]));