import userService from '../services/userServices.js';
import databaseErrorHandler from '../utils/errorHandler.js';

const create = async (req, res) => {
  // eslint-disable-next-line camelcase
  const { username, email, no_hp } = req.body;

  const result = await userService.create(username, email, no_hp);

  if (result.error) {
    databaseErrorHandler(result, res);
    return;
  }

  res.status(201);
  res.send('User created successfully');
};
const getList = (req, res) => {};
const getOne = (req, res) => {};
const update = (req, res) => {};
const remove = (req, res) => {};

const userController = {
  create
};

export default userController;
