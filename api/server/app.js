import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import conectaNaDatabase from './conectDB.js';
import typeDefs from './schemas/clienteSchema.js';
import resolvers from './resolvers/clienteResolver.js';
import cors from 'cors';
dotenv.config();

const startServer = async () => {
  // Conectar ao banco de dados
  await conectaNaDatabase();

  // Criar o servidor Apollo
  const server = new ApolloServer({ typeDefs, resolvers });

  // Iniciar o servidor Apollo
  await server.start();

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor GraphQL');
  });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
