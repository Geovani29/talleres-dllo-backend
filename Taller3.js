function desglosarString(str, tipo) {
    const vocales = "aeiouAEIOU";
    let contador = 0;

    for (let caracter of str) {
        if (/[a-zA-Z]/.test(caracter)) {
            if (vocales.includes(caracter)) {
                if (tipo === "vocales") contador++;
            } else {
                if (tipo === "consonantes") contador++;
            }
        }
    }
    return contador;
}
console.log(desglosarString("murcielagos", "vocales"));
console.log(desglosarString("murcielagos", "consonantes"));

//---------------------------------------------------------------

function twoSum(nums, obje) {
    const mapa = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complemento = obje - nums[i];
        if (mapa.has(complemento)) {
            return [mapa.get(complemento), i];
        }
        mapa.set(nums[i], i);
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 4, 2], 6));

//---------------------------------------------------------------

function conversionRomana(romano) {
    if (typeof romano !== "string" || romano.trim() === "") {
        return "Debe ingresar un string con cifras romanas"
    }

    const valores = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    };

    let s = romano.toUpperCase().trim();
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const actual = valores[s[i]];
        const siguiente = valores[s[i + 1]] ?? 0;

        if (actual === undefined) {
            return "Númeor romano invalido"
        }

        if (actual < siguiente) {
            total -= actual;
        } else {
            total += actual;
        }
    }
    return total;
}
console.log(conversionRomana("I2II"));
console.log(conversionRomana("XIV"));
console.log(conversionRomana("MMXXIV"));
console.log(conversionRomana(2));

//---------------------------------------------------------------

function descomposicion(cadena) {
    const elementos = cadena.split(",");
    const palabra = elementos[0];
    const diccionario = elementos.slice(1);

    for (let i = 0; i < diccionario.length; i++) {
        for (let j = 0; j < diccionario.length; j++) {
            if (i !== j) {
                if (diccionario[i] + diccionario[j] === palabra) {
                    return [diccionario[i], diccionario[j]];
                }
            }
        }
    }
    return [];
}
console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"));



