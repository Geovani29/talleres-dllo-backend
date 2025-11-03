const express = require('express');
const router = express.Router();
const { 
    convertidorTemp, 
    resolvedor, 
    mejorParidad, 
    peorParidad 
} = require('../Taller1');

// Endpoint para convertidor de temperatura
router.post('/convertidor-temperatura', (req, res) => {
    try {
        const { temperaturaC } = req.body;
        
        if (temperaturaC === undefined || temperaturaC === null) {
            return res.status(400).json({ 
                error: 'El parámetro temperaturaC es requerido' 
            });
        }
        
        const resultado = convertidorTemp(Number(temperaturaC));
        res.json({ 
            temperaturaF: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para resolver ecuación cuadrática
router.post('/resolvedor', (req, res) => {
    try {
        const { a, b, c, select } = req.body;
        
        if (a === undefined || b === undefined || c === undefined || select === undefined) {
            return res.status(400).json({ 
                error: 'Los parámetros a, b, c y select son requeridos' 
            });
        }
        
        const resultado = resolvedor(Number(a), Number(b), Number(c), Number(select));
        res.json({ 
            solucion: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para mejor paridad
router.post('/mejor-paridad', (req, res) => {
    try {
        const { num } = req.body;
        
        if (num === undefined || num === null) {
            return res.status(400).json({ 
                error: 'El parámetro num es requerido' 
            });
        }
        
        const resultado = mejorParidad(Number(num));
        res.json({ 
            numero: Number(num),
            resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para peor paridad
router.post('/peor-paridad', (req, res) => {
    try {
        const { num } = req.body;
        
        if (num === undefined || num === null) {
            return res.status(400).json({ 
                error: 'El parámetro num es requerido' 
            });
        }
        
        const resultado = peorParidad(Number(num));
        res.json({ 
            numero: Number(num),
            resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

