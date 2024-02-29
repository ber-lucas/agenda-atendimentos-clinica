import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../../../lib/prisma";

export async function createAppointment(app: FastifyInstance) {
  app.post('/appointments', async (request, reply) => {
    const createAppointmentBody = z.object({
      patientId: z.string().uuid(),
      psychologistId: z.string().uuid(),
      localId: z.string().uuid(),
      startDateAndTime: z.string().datetime(),
      duration: z.number()
    });

    const {
      patientId,
      psychologistId,
      localId,
      startDateAndTime,
      duration
    } = createAppointmentBody.parse(request.body);

    const appointment = await prisma.appointment.create({
      data: {
        duration,
        startDateAndTime,
        localId,
        patientId,
        psychologistId,
      }
    });

    return reply.status(201).send({ appointmentId: appointment.id });
  });
}