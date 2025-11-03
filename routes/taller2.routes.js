const express = require('express');
const router = express.Router();
const { 
    findMax, 
    includes, 
    sum, 
    missingNumbers 
} = require('../Taller2');

// Endpoint para encontrar el máximo
router.post('/find-max', (req, res) => {
    try {
        const { array } = req.body;
        
        if (!array || !Array.isArray(array)) {
            return res.status(400).json({ 
                error: 'El parámetro array es requerido y debe ser un arreglo' 
            });
        }
        
        if (array.length === 0) {
            return res.status(400).json({ 
                error: 'El array no puede estar vacío' 
            });
        }
        
        const resultado = findMax(array);
        res.json({ 
            maximo: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para verificar si incluye un valor
router.post('/includes', (req, res) => {
    try {
        const { array, value } = req.body;
        
        if (!array || !Array.isArray(array)) {
            return res.status(400).json({ 
                error: 'El parámetro array es requerido y debe ser un arreglo' 
            });
        }
        
        if (value === undefined || value === null) {
            return res.status(400).json({ 
                error: 'El parámetro value es requerido' 
            });
        }
        
        const resultado = includes(array, value);
        res.json({ 
            value,
            incluye: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para sumar elementos del array
router.post('/sum', (req, res) => {
    try {
        const { array } = req.body;
        
        if (!array || !Array.isArray(array)) {
            return res.status(400).json({ 
                error: 'El parámetro array es requerido y debe ser un arreglo' 
            });
        }
        
        const resultado = sum(array);
        res.json({ 
            suma: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para encontrar números faltantes
router.post('/missing-numbers', (req, res) => {
    try {
        const { array } = req.body;
        
        if (!array || !Array.isArray(array)) {
            return res.status(400).json({ 
                error: 'El parámetro array es requerido y debe ser un arreglo' 
            });
        }
        
        if (array.length === 0) {
            return res.status(400).json({ 
                error: 'El array no puede estar vacío' 
            });
        }
        
        const resultado = missingNumbers(array);
        res.json({ 
            numerosFaltantes: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

