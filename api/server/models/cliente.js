import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    profissao: { type: String, required: true },
    salario: { type: Number, required: true },
    dataNascimento: { type: Date, required: true },
    dataEntrada: { type: Date, default: Date.now }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente