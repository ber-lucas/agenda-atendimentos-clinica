import fastify from 'fastify'
import { createLocal } from './routes/local/create-local';
import { createPsychologist } from './routes/psychologist/create-psychologist';
import { createPatient } from './routes/patient/create-patient';

const app = fastify();

app.register(createLocal);
app.register(createPsychologist);
app.register(createPatient);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
});