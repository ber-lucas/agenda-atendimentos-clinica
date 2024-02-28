import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../../../lib/prisma";

export async function createPatient(app: FastifyInstance) {
  app.post('/patients', async (request, reply) => {
    const createPatientBody = z.object({
      name: z.string(),
      cpf: z.number(),
      address: z.string(),
      psychologistId: z.string().uuid(),
    });

    const {
      name,
      cpf,
      address,
      psychologistId,
    } = createPatientBody.parse(request.body);
 
    const patient = await prisma.patient.create({
      data: {
        name,
        cpf,
        address,
        Psychologist: {
          connect: {
            id: psychologistId
          }
        }
      }
    });

    return reply.status(201).send({ patientId: patient.id });
  });
}