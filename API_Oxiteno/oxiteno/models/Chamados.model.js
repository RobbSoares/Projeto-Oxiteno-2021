const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChamadoSchema = new Schema({
    numChamado: {
        type: String,
        required: 'O campo é necessário.'
    },
    gerencia: {
        type: String,
        required: 'O campo é necessário.'
    },
    processo: {
        type: String,
        required: 'O campo é necessário.'
    },
    sla: {
        type: Number,
    },
    email: {
        type: String,
        required: 'O campo é necessário.'
    },
    local: {
        type: String,
        required: 'O campo é necessário.'
    },
    andar: {
        type: String,
        required: 'O campo é necessário.'
    },
    mensagem: {
        type: String,
        required: 'O campo é necessário.'
    },
    detalhesAdicionais: {
        type: String,
        required: 'O campo é necessário.'
    },
    dataAbertura: {
        type: Date,
        default: Date.now,
        required: 'O campo é necessário.'
    },
    dataVencimento: {
        type: String,
        required: 'O campo é necessário.'
    },
    statusChamado: {
        type: String,
        required: 'O campo é necessário.'
    }
});

module.exports = mongoose.model('Chamados',ChamadoSchema);