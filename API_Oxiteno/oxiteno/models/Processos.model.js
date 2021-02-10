const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProcessoSchema = new Schema({
    nomeProcesso: {
        type: String,
        required: 'O campo é necessário.'
    },
    gerenciaProcesso: {
        type: String,
        required: 'O campo é necessário.'
    },
    descricaoProcesso: {
        type: String,
        required: 'O campo é necessário.'
    },
    slaProcesso: {
        type: Number,
        required: 'O campo é necessário'
    }
});

module.exports = mongoose.model('Processos',ProcessoSchema);