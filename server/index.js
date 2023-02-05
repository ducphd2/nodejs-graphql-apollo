import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { resolvers, typeDefs } from './apollo';
import { repositoryMethods } from './repository';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: (req, res) => ({ req, methods: repositoryMethods }),
});

server.start().then(() => {
  server.applyMiddleware({ app, cors: true });
});
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.get('/', (req, res) => res.json('Health!'));

app.listen(PORT, () => console.log(`Server ready at http://${HOST}:${PORT}${server.graphqlPath}`));
