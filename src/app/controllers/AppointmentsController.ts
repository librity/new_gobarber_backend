import { Request, Response } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepositoy from '../repositories/AppointmentsRepositoy';

const appointmentsRepositoy = new AppointmentsRepositoy();

class AppointmentsController {
  static index(req: Request, res: Response): Response {
    const appointments = appointmentsRepositoy.all();

    return res.json(appointments);
  }

  static create(req: Request, res: Response): Response {
    const { provider, date } = req.body;

    const parsedDate = startOfHour(parseISO(date));

    const appointmentOnTheSameDateAlreadyExists = appointmentsRepositoy.findByDate(
      parsedDate,
    );

    if (appointmentOnTheSameDateAlreadyExists)
      return res.status(400).json({
        error: '01-001',
        message: 'Appointment on the same date already exists.',
      });

    const appointment = appointmentsRepositoy.create({
      provider,
      date: parsedDate,
    });

    return res.json(appointment);
  }
}

export default AppointmentsController;
