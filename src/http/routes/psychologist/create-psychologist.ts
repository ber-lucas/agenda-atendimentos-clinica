import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../../../lib/prisma";

export async function createPsychologist(app: FastifyInstance) {
  app.post('/psychologists', async (request, reply) => {
    const createPsychologistBody = z.object({
      name: z.string(),
      cpf: z.number(),
      crp: z.number(),
      address: z.string(),
    })

    const {
      name,
      cpf,
      crp,
      address
    } = createPsychologistBody.parse(request.body);

    const psychologist = await prisma.psychologist.create({
      data: {
        name,
        cpf,
        crp,
        address
      }
    });

    return reply.status(201).send({ psychologistId: psychologist.id });
  });
}