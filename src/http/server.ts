import fastify from 'fastify'
import { createLocal } from './routes/local/create-local';

const app = fastify();

app.register(createLocal);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
});