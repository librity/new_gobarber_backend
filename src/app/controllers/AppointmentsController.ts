import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

interface AppointmentI {
  id: string;
  provider: string;
  date: Date;
}

const appointments: AppointmentI[] = [];

class AppointmentsController {
  static create(req: Request, res: Response): Response {
    const { provider, date } = req.body;

    const parsedDate = startOfHour(parseISO(date));

    const appointmentOnTheSameDateAlreadyExists = appointments.find(
      appointment => isEqual(parsedDate, appointment.date),
    );

    if (appointmentOnTheSameDateAlreadyExists)
      return res.status(400).json({
        error: '01-001',
        message: 'Appointment on the same date already exists.',
      });

    const appointment = {
      id: uuid(),
      provider,
      date: parsedDate,
    };

    appointments.push(appointment);

    return res.json(appointment);
  }
}

export default AppointmentsController;
