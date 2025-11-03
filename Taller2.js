function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

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

// Exportar funciones
module.exports = {
    findMax,
    includes,
    sum,
    missingNumbers
};