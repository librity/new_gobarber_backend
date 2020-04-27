import { Repository, EntityRepository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepositoy extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const appointmentWithSameDate = await this.findOne({
      where: { date },
    });

    return appointmentWithSameDate || null;
  }
}

export default AppointmentsRepositoy;
