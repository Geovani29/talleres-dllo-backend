# Backend de Talleres

## Instalación

1. Clonar el repositorio

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor:
```bash
npm start
```

o

```bash
npm run dev
```

## API Endpoints

### Taller 1

#### 1. Convertidor de Temperatura
**POST** `/taller1/convertidor-temperatura`

Convierte temperatura de Celsius a Fahrenheit.

```json
Request:
{
  "temperaturaC": -40
}

Response:
{
  "temperaturaF": -40
}
```

#### 2. Resolvedor de Ecuaciones Cuadráticas
**POST** `/taller1/resolvedor`

Resuelve ecuaciones cuadráticas usando la fórmula general.

```json
Request:
{
  "a": 1,
  "b": 5,
  "c": 4,
  "select": 2
}

Response:
{
  "solucion": -4
}
```

#### 3. Mejor Paridad
**POST** `/taller1/mejor-paridad`

Verifica si un número es par o impar (método eficiente).

```json
Request:
{
  "num": 7
}

Response:
{
  "numero": 7,
  "resultado": "El numero es impar"
}
```

#### 4. Peor Paridad
**POST** `/taller1/peor-paridad`

Verifica paridad (funciona solo para números 0-10).

```json
Request:
{
  "num": 5
}

Response:
{
  "numero": 5,
  "resultado": "El numero es impar"
}
```

---

### Taller 2

#### 1. Encontrar Máximo
**POST** `/taller2/find-max`

Encuentra el valor máximo en un array.

```json
Request:
{
  "array": [3, 17, -1, 4, -19]
}

Response:
{
  "maximo": 17
}
```

#### 2. Includes
**POST** `/taller2/includes`

Verifica si un valor existe en el array.

```json
Request:
{
  "array": [3, 17, -1, 4, -19],
  "value": 4
}

Response:
{
  "value": 4,
  "incluye": true
}
```

#### 3. Suma de Array
**POST** `/taller2/sum`

Suma todos los elementos de un array.

```json
Request:
{
  "array": [3, 17, -1, 4, -19]
}

Response:
{
  "suma": 4
}
```

#### 4. Números Faltantes
**POST** `/taller2/missing-numbers`

Encuentra los números faltantes en un rango.

```json
Request:
{
  "array": [7, 2, 4, 6, 3, 9]
}

Response:
{
  "numerosFaltantes": [5, 8]
}
```

---

### Taller 3

#### 1. Desglosar String
**POST** `/taller3/desglosar-string`

Cuenta vocales o consonantes en una cadena.

```json
Request:
{
  "str": "murcielagos",
  "tipo": "vocales"
}

Response:
{
  "cadena": "murcielagos",
  "tipo": "vocales",
  "cantidad": 5
}
```

#### 2. Two Sum
**POST** `/taller3/two-sum`

Encuentra dos índices cuya suma sea el objetivo.

```json
Request:
{
  "nums": [2, 7, 11, 15],
  "objetivo": 9
}

Response:
{
  "objetivo": 9,
  "indices": [0, 1]
}
```

#### 3. Conversión Romana
**POST** `/taller3/conversion-romana`

Convierte números romanos a decimales.

```json
Request:
{
  "romano": "MMXXIV"
}

Response:
{
  "romano": "MMXXIV",
  "decimal": 2024
}
```

#### 4. Descomposición de Palabras
**POST** `/taller3/descomposicion`

Encuentra dos palabras que formen una palabra objetivo.

```json
Request:
{
  "cadena": "malhumor,al,hum,humor,m,mal,malhu"
}

Response:
{
  "resultado": ["mal", "humor"]
}
```