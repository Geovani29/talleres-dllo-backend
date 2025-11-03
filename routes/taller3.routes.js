const express = require('express');
const router = express.Router();
const { 
    desglosarString, 
    twoSum, 
    conversionRomana, 
    descomposicion 
} = require('../Taller3');

// Endpoint para desglosar string
router.post('/desglosar-string', (req, res) => {
    try {
        const { str, tipo } = req.body;
        
        if (!str || typeof str !== 'string') {
            return res.status(400).json({ 
                error: 'El parámetro str es requerido y debe ser un string' 
            });
        }
        
        if (!tipo || (tipo !== 'vocales' && tipo !== 'consonantes')) {
            return res.status(400).json({ 
                error: 'El parámetro tipo es requerido y debe ser "vocales" o "consonantes"' 
            });
        }
        
        const resultado = desglosarString(str, tipo);
        res.json({ 
            cadena: str,
            tipo,
            cantidad: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para two sum
router.post('/two-sum', (req, res) => {
    try {
        const { nums, objetivo } = req.body;
        
        if (!nums || !Array.isArray(nums)) {
            return res.status(400).json({ 
                error: 'El parámetro nums es requerido y debe ser un arreglo' 
            });
        }
        
        if (objetivo === undefined || objetivo === null) {
            return res.status(400).json({ 
                error: 'El parámetro objetivo es requerido' 
            });
        }
        
        const resultado = twoSum(nums, Number(objetivo));
        res.json({ 
            objetivo: Number(objetivo),
            indices: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para conversión romana
router.post('/conversion-romana', (req, res) => {
    try {
        const { romano } = req.body;
        
        if (!romano) {
            return res.status(400).json({ 
                error: 'El parámetro romano es requerido' 
            });
        }
        
        const resultado = conversionRomana(romano);
        res.json({ 
            romano,
            decimal: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para descomposición
router.post('/descomposicion', (req, res) => {
    try {
        const { cadena } = req.body;
        
        if (!cadena || typeof cadena !== 'string') {
            return res.status(400).json({ 
                error: 'El parámetro cadena es requerido y debe ser un string' 
            });
        }
        
        const resultado = descomposicion(cadena);
        res.json({ 
            resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

