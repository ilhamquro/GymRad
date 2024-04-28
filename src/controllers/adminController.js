import adminService from '../services/adminService.js';
import databaseErrorHandler from '../utils/errorHandler.js';
import { compare, encrypt } from '../utils/hasher.js';

const create = async (req, res) => {
  const { username, email, password } = req.body;

  const encryptedPassword = encrypt(password);

  const result = await adminService.create(username, email, encryptedPassword);

  if (result.error) {
    databaseErrorHandler(result, res);
    return;
  }

  res.status(result.code);
  res.send('Admin successfully created');
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await adminService.getByEmail(email);

  if (!result) {
    res.status(404);
    res.send(`Couldn't find admin with email equal to ${email}`);
    return;
  }

  const isPasswordValid = compare(password, result.password);

  if (!isPasswordValid) {
    res.status(403);
    res.send('Password is invalid');
    return;
  }

  res.status(200);
  res.send('Login successful');
};

const adminController = {
  create,
  login
};

export default adminController;
