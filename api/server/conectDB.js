import mongoose from "mongoose";

async function conectaNaDatabase() {
    const dadosConexao = process.env.MONGO_CONECT;
    try {
        mongoose.connect(dadosConexao);
        return mongoose.connection;
    } catch (error) {
        console.error("Falha na conexão", error)
    }
};

export default conectaNaDatabase;
