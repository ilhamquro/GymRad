import express from 'express';

const router = express.Router();

router.post('/create/admin', (req, res) => {
  const { email, password } = req.body;
  res.send(email, password);
});

const authRoute = router;

export default authRoute;
