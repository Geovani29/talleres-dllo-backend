const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar las rutas
const taller1Routes = require('./routes/taller1.routes');
const taller2Routes = require('./routes/taller2.routes');
const taller3Routes = require('./routes/taller3.routes');

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        message: 'API de Talleres de Desarrollo Backend',
        version: '1.0.0',
        endpoints: {
            taller1: [
                'POST /taller1/convertidor-temperatura',
                'POST /taller1/resolvedor',
                'POST /taller1/mejor-paridad',
                'POST /taller1/peor-paridad'
            ],
            taller2: [
                'POST /taller2/find-max',
                'POST /taller2/includes',
                'POST /taller2/sum',
                'POST /taller2/missing-numbers'
            ],
            taller3: [
                'POST /taller3/desglosar-string',
                'POST /taller3/two-sum',
                'POST /taller3/conversion-romana',
                'POST /taller3/descomposicion'
            ]
        }
    });
});

// Usar las rutas
app.use('/taller1', taller1Routes);
app.use('/taller2', taller2Routes);
app.use('/taller3', taller3Routes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Endpoint no encontrado',
        message: 'La ruta solicitada no existe'
    });
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;

