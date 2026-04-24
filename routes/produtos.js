const express = require('express');
const router = express.Router();
const supabase = require('../data/supabase');

// ─── [GET] /api/produtos ───────────────────────────────────────
router.get('/', async (req, res, next) => {
    try {
        const { categoriaId } = req.query;
        let query = supabase.from('produtos').select('*');

        if (categoriaId && categoriaId !== 'undefined') {
            query = query.eq('categoria_id', categoriaId);
        }

        const { data, error } = await query.order('id', { ascending: true });
        if (error) throw error;
        res.json(data);
    } catch (err) {
        next(err);
    }
});

// ─── [GET] /api/produtos/:id ───────────────────────────────────
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .eq('id', id)
            .maybeSingle();

        if (error) throw error;
        if (!data) return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        res.json(data);
    } catch (err) {
        next(err);
    }
});

// ─── [POST] /api/produtos ──────────────────────────────────────
router.post('/', async (req, res, next) => {
    try {
        const { data, error } = await supabase
            .from('produtos')
            .insert([req.body])
            .select();

        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (err) {
        next(err);
    }
});

// ─── [PUT] /api/produtos/:id ───────────────────────────────────
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('produtos')
            .update(req.body)
            .eq('id', id)
            .select();

        if (error) throw error;
        if (!data.length) return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        res.json(data[0]);
    } catch (err) {
        next(err);
    }
});

// ─── [DELETE] /api/produtos/:id ────────────────────────────────
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { error } = await supabase
            .from('produtos')
            .delete()
            .eq('id', id);

        if (error) throw error;
        res.json({ mensagem: 'Produto deletado com sucesso!' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
