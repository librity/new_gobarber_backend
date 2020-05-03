import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRepositoy from '../repositories/AppointmentsRepositoy';
import CreateAppointmentService from '../services/CreateAppointmentService';

class AppointmentsController {
  static async index(req: Request, res: Response): Promise<Response> {
    const appointmentsRepositoy = getCustomRepository(AppointmentsRepositoy);
    const appointments = await appointmentsRepositoy.find();

    return res.json(appointments);
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const { provider_id, date } = req.body;

    const parsedDate = parseISO(date);

    const appointment = await CreateAppointmentService.execute({
      provider_id,
      date: parsedDate,
    });

    return res.json(appointment);
  }
}

export default AppointmentsController;
