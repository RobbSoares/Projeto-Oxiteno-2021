const express = require('express');
const nodemailer = require("nodemailer");
const router = express.Router();
const Chamados = require('../../models/Chamados.model');

//Routes GET
router.get('/', async (req,res) =>{
    try {
        const chamados = await Chamados.find();
        if(!chamados) throw Error('Sem dados!');
        res.status(200).json(chamados);
    } catch (err) {
        res.status(400).json({ msg: err });
        console.log(err);
    }
});

//Routes GET by ID
router.get('/:id', async (req,res) =>{
    try {
        const chamado = await Chamados.findById(req.params.id);
        if(!chamado) throw Error('Sem dados!');
        res.status(200).json(chamado);
    } catch (err) {
        res.status(400).json({ msg: err });
        console.log(err);
    }
});

//Routes GET by ID
/*
router.get('/:gerencia', async (req,res) =>{
    try {
        const chamado = await Chamados.find({ gerencia: Chamados.params.gerencia})
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
    const newChamado = new Chamados(req.body);
    try {
        const chamado = await newChamado.save();
        if(!chamado) throw Error('Algo deu errado ao registrar o chamado!');

        let transporter = nodemailer.createTransport({
            service: "gmail",
            host:  "smtp.gmail.com",
            port: 587,
            secure: true,
            auth: {
                user: "projeto.oxiteno.grupo2@gmail.com",
                pass: "Oxiteno2"
            }
        });
        
        
        transporter.sendMail({
            from: "Grupo 2 <projeto.oxiteno.grupo2@gmail.com>",
            to: "robson.santana.soares@gmail.com, vinicius.almeida.ti@gmail.com, miguelmorais.mcm@gmail.com",
            subject: "Confirmação de abertura de Chamado",
            text: `Codigo do chamado: ${req.body.numChamado}, ${req.body.sla} Horas`
        }).then(message => {
            console.log(message);
        }).catch(err => {
            console.log(err);
        })
        //console.log(res.status(200).json(chamado));
        res.status(200).json(chamado);
    } catch(err) {
        res.status(400).json({ msg: err })
        console.log(err)
    }

});

//Routes DELETE
router.delete('/:id', async (req,res) =>{
    try {
        const chamado = await Chamados.findByIdAndDelete(req.params.id);
        if(!chamado) throw Error('Chamando não encontrado!');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err })
        console.log(err)
    }
});

//Routes UPDATE
router.patch('/:id', async (req,res) =>{
    try {
        const chamado = await Chamados.findByIdAndUpdate(req.params.id, req.body);
        if(!chamado) throw Error('Algo deu errado ao atualizar a informação');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err })
        console.log(err)
    }
})

module.exports = router;