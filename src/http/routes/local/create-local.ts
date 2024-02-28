import { FastifyInstance } from 'fastify'
import { z } from 'zod';
import { prisma } from '../../../lib/prisma';

export async function createLocal(app: FastifyInstance) {
  app.post('/locals', async (request, reply) => {
    const createLocalBody = z.object({
      number: z.number(),
      online: z.boolean(),
    });

    const { number, online } = createLocalBody.parse(request.body);

    const local = await prisma.local.create({
      data: {
        number,
        online
      }
    });

    return reply.status(201).send({ localId: local.id });
  });
}