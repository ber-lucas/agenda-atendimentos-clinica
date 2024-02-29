import fastify from 'fastify'
import { createLocal } from './routes/local/create-local';
import { createPsychologist } from './routes/psychologist/create-psychologist';
import { createPatient } from './routes/patient/create-patient';
import { createAppointment } from './routes/appointment/create-appointment';

const app = fastify();

app.register(createLocal);
app.register(createPsychologist);
app.register(createPatient);
app.register(createAppointment);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
});