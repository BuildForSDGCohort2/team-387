/* eslint-disable no-unused-vars */
import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/users', (req, res, next) => {
  res.send('respond with a resource');
});

export default router;
