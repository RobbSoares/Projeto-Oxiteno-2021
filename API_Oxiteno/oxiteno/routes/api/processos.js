const express = require('express');
const router = express.Router();
const Processos = require('../../models/Processos.model');

//Routes GET
router.get('/', async (req,res) =>{
    try {
        const processos = await Processos.find();
        if(!processos) throw Error('Sem dados!');
        res.status(200).json(processos);
    } catch (err) {
        res.status(400).json({ msg: err });
        console.log(err);
    }
});

//Routes GET by ID
router.get('/:id', async (req,res) =>{
    try {
        const processo = await Processos.findById(req.params.id);
        if(!processo) throw Error('Sem dados!');
        res.status(200).json(processo);
    } catch (err) {
        res.status(400).json({ msg: err });
        console.log(err);
    }
});

//Routes GET by ID
/*
router.get('/:gerencia', async (req,res) =>{
    try {
        const chamado = await Processos.find({ gerencia: Chamados.params.gerencia})
        if(!chamado) throw Error('Sem dados!');
        res.status(200).json(chamado);
    } catch (err) {
        res.status(400).json({ msg: err });
        console.log(err);
    }
});*/

//Routes POST 
router.post('/', async (req, res) =>{
    //res.send(`Criar Chamados`);
    //console.log(req.body);
    const newProcesso = new Processos(req.body);
    try {
        const processo = await newProcesso.save();
        if(!processo) throw Error('Algo deu errado ao registrar o chamado!');
        //console.log(res.status(200).json(chamado));
        res.status(200).json(processo);
    } catch(err) {
        res.status(400).json({ msg: err })
        console.log(err)
    }

});

//Routes DELETE
router.delete('/:id', async (req,res) =>{
    try {
        const processo = await Processos.findByIdAndDelete(req.params.id);
        if(!processo) throw Error('Chamando não encontrado!');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err })
        console.log(err)
    }
});

//Routes UPDATE
router.patch('/:id', async (req,res) =>{
    try {
        const processo = await Processos.findByIdAndUpdate(req.params.id, req.body);
        if(!processo) throw Error('Algo deu errado ao atualizar a informação');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err })
        console.log(err)
    }
})

module.exports = router;