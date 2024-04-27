import adminService from '../services/adminService';
import { compare, encrypt } from '../utils/hasher';

const create = async (req, res) => {
  const { username, email, password } = req.body;

  const encryptedPassword = encrypt(password);

  const result = await adminService.create(username, email, encryptedPassword);

  if (result.error) {
    switch (result.error.meta.target) {
      case 'admin_email_key':
        res.status(result.code);
        res.send('Email is already in use');
        break;

      case 'admin_username_key':
        res.status(result.code);
        res.send('Username is already in use');
        break;

      default:
        break;
    }
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
