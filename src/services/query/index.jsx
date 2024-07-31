import { gql } from '@apollo/client';


export const GET_CLIENTES = gql `
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