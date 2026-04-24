const express = require('express');
const router = express.Router();
const supabase = require('../data/supabase');

// ─── [GET] /api/categorias ────────────────────────────────────
router.get('/', async (req, res, next) => {
    try {
        const { data, error } = await supabase
            .from('categorias')
            .select('*') // Garante que traz o ID e o NOME
            .order('id', { ascending: true });

        if (error) throw error;
        res.json(data);
    } catch (err) {
        next(err);
    }
});

// ─── [POST] /api/categorias ───────────────────────────────────
router.post('/', async (req, res, next) => {
    try {
        const { data, error } = await supabase
            .from('categorias')
            .insert([{ nome: req.body.nome }])
            .select();

        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
