import Cliente from "../models/cliente.js";

const resolvers = {
  Query: {
    getClientes: async () => {
      return await Cliente.find();
    },
    getCliente: async (_, { id }) => {
      return await Cliente.findById(id);
    }
  },
  Mutation: {
    createCliente: async (_, { nome, profissao, salario, dataNascimento, habilidades, resumo, filiado }) => {
      const cliente = new Cliente({ nome, profissao, salario, dataNascimento, habilidades, resumo, filiado });
      await cliente.save();
      return cliente;
    },
    updateCliente: async (_, { id, nome, profissao, salario, dataNascimento, dataEntrada, habilidades, resumo, filiado }) => {
      return await Cliente.findByIdAndUpdate(
        id,
        { nome, profissao, salario, dataNascimento, dataEntrada, habilidades, resumo, filiado },
        { new: true }
      );
    },
    deleteCliente: async (_, { id }) => {
      return await Cliente.findByIdAndRemove(id);
    }
  }
};

export default resolvers;
