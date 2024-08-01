import { gql } from '@apollo/client';


const GET_CLIENTES = gql`
query GetClientes {
    getClientes {
      id
      nome
      profissao
      salario
      habilidades
      resumo
      filiado
      dataNascimento
      dataEntrada
    }
  }
`;
const CREATE_CLIENTE = gql`
  mutation CreateCliente(
    $nome: String!,
    $profissao: String!,
    $salario: Float!,
    $habilidades: String!,
    $resumo: String!,
    $filiado: Boolean!,
    $dataNascimento: String!
  ) {
    createCliente(
      nome: $nome,
      profissao: $profissao,
      salario: $salario,
      habilidades: $habilidades,
      resumo: $resumo,
      filiado: $filiado,
      dataNascimento: $dataNascimento
    ) {
      id
      nome
      profissao
      salario
      habilidades
      resumo
      filiado
      dataNascimento
      dataEntrada
    }
  }
`;
const DELETE_CLIENTE = gql`
  mutation DeleteCliente($id: ID!) {
    deleteCliente(id: $id) {
      id
      nome
    }
  }
`
export { CREATE_CLIENTE, GET_CLIENTES, DELETE_CLIENTE }