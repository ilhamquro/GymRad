import express from 'express';
import dotenv from 'dotenv';
import authRoute from './src/routes/authRoute.js';
import userRoute from './src/routes/userRoute.js';

dotenv.config();

const app = express();
const { PORT } = process.env;
app.use(express.json());

app.use(express.json());

app.use('/auth', authRoute);
app.use('/user', userRoute);

app.get('/health-check', (req, res) => {
  res.send('Health Check');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
