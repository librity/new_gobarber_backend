import { isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepositoy {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const appointmentWithSameDate = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return appointmentWithSameDate || null;
  }
}

export default AppointmentsRepositoy;
