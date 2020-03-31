"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const express_2 = require("express");
const r = express_2.Router();

router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'GET listo!'
    });
});
r.get('/api/menu', (re, rest) => {
    rest.json({
        ok: true,
        mensaje: 'GET listo!'
    });
});
r.post('/api/menu/:id', (re, rest) => {
    const cuerpo = re.body.cuerpo;
    const de = re.body.de;
    const id = re.params.id;
    re.json({
        ok: true,
        cuerpo,
        de
        // mensaje: 'POST listo!'
    });
});
router.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        cuerpo,
        de,
        id
        // mensaje: 'POST listo!'
    });
});
exports.default = router;
exports.default = r;
