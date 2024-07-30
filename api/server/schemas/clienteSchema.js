import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Cliente {
    id: ID!
    nome: String!
    profissao: String!
    salario: Float!
    dataNascimento: String!
    dataEntrada: String!
  }

  type Query {
    getClientes: [Cliente]
    getCliente(id: ID!): Cliente
  }

  type Mutation {
    createCliente(nome: String!, profissao: String!, salario: Float!, dataNascimento: String!): Cliente
    updateCliente(id: ID!, nome: String, profissao: String, salario: Float, dataNascimento: String, dataEntrada: String): Cliente
    deleteCliente(id: ID!): Cliente
  }
`;

export default typeDefs;
