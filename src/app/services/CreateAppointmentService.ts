import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepositoy from '../repositories/AppointmentsRepositoy';
import appointmentErrors from '../errors/appointmentErrors';

interface CreateAppointmentDTO {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public static async execute({
    provider_id,
    date,
  }: CreateAppointmentDTO): Promise<Appointment> {
    const appointmentsRepositoy = getCustomRepository(AppointmentsRepositoy);

    const appointmentDate = startOfHour(date);

    const appointmentOnTheSameDateAlreadyExists = await appointmentsRepositoy.findByDate(
      appointmentDate,
    );

    if (appointmentOnTheSameDateAlreadyExists)
      throw appointmentErrors.dateTaken;

    const appointment = appointmentsRepositoy.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepositoy.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
