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
    createCliente: async (_, { nome, profissao, salario, dataNascimento }) => {
      const cliente = new Cliente({ nome, profissao, salario, dataNascimento });
      await cliente.save();
      return cliente;
    },
    updateCliente: async (_, { id, nome, profissao, salario, dataNascimento, dataEntrada }) => {
      return await Cliente.findByIdAndUpdate(
        id,
        { nome, profissao, salario, dataNascimento, dataEntrada },
        { new: true }
      );
    },
    deleteCliente: async (_, { id }) => {
      return await Cliente.findByIdAndRemove(id);
    }
  }
};

export default resolvers;
