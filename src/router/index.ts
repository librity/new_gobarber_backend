import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const { name, email } = req.body;

  const user = {
    name,
    email,
  };

  return res.json(user);
});

export default router;
