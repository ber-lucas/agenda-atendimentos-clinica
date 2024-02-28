import fastify from 'fastify'
import { createLocal } from './routes/local/create-local';
import { createPsychologist } from './routes/psychologist/create-psychologist';

const app = fastify();

app.register(createLocal);
app.register(createPsychologist);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
});