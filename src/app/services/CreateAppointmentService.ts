import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepositoy from '../repositories/AppointmentsRepositoy';
import appointmentErrors from '../errors/appointmentErrors';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepositoy: AppointmentsRepositoy;

  constructor(appointmentsRepositoy: AppointmentsRepositoy) {
    this.appointmentsRepositoy = appointmentsRepositoy;
  }

  public execute({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointmentDate = startOfHour(date);

    const appointmentOnTheSameDateAlreadyExists = this.appointmentsRepositoy.findByDate(
      appointmentDate,
    );

    if (appointmentOnTheSameDateAlreadyExists)
      throw appointmentErrors.dateTaken;

    const appointment = this.appointmentsRepositoy.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
