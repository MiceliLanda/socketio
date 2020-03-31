

import { Router, Request, Response } from 'express';

const router = Router();
cons r = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET listo!'
    });
});

r.get('/api/menu', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET listo!'
    });
});

r.post('/api/menu', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
        // mensaje: 'POST listo!'
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id

    res.json({
        ok: true,
        cuerpo,
        de,
        id
        // mensaje: 'POST listo!'
    });
});

export default router;
export default r;
