import { Request, Response } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepositoy from '../repositories/AppointmentsRepositoy';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRepositoy = new AppointmentsRepositoy();

class AppointmentsController {
  static index(req: Request, res: Response): Response {
    const appointments = appointmentsRepositoy.all();

    return res.json(appointments);
  }

  static create(req: Request, res: Response): Response {
    try {
      const { provider, date } = req.body;

      const parsedDate = parseISO(date);

      const createAppointmentService = new CreateAppointmentService(
        appointmentsRepositoy,
      );

      const appointment = createAppointmentService.execute({
        provider,
        date: parsedDate,
      });

      return res.json(appointment);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default AppointmentsController;
