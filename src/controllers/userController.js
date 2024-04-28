/* eslint-disable camelcase */
import userService from '../services/userServices.js';
import databaseErrorHandler from '../utils/errorHandler.js';

const create = async (req, res) => {
  const { username, email, no_hp } = req.body;

  const result = await userService.create(username, email, no_hp);

  if (result.error) {
    databaseErrorHandler(result, res);
    return;
  }

  res.status(201);
  res.send('User created successfully');
};

const getList = async (req, res) => {
  const { page, pageSize } = req.query;

  const skip = Number((page - 1) * pageSize);
  const take = Number(pageSize);

  const result = await userService.getList(skip, take);

  if (result.error) {
    res.status(result.code);
    res.send(result.message);
    return;
  }

  res.status(200);
  res.send(result.data);
};

const getOne = async (req, res) => {
  const { id } = req.query;

  const result = await userService.getOne(Number(id));

  if (result.error) {
    res.status(result.code);
    res.send(result.message);
    return;
  }

  res.status(200);
  res.send(result.data);
};

const get = (req, res) => {
  const { page, pageSize, id } = req.query;

  if (id) {
    getOne(req, res);
    return;
  }

  if (page && pageSize) {
    getList(req, res);
  }
};

const update = async (req, res) => {
  const data = req.body;
  const { id } = req.query;

  const result = await userService.update(Number(id), data);

  if (result.error) {
    databaseErrorHandler(result, res);
    return;
  }

  res.status(201);
  res.send(result.message);
};

const remove = async (req, res) => {
  const { id } = req.query;

  const result = await userService.remove(Number(id));

  if (result.error) {
    res.status(result.code);
    res.send(result.message);
  }

  res.status(201);
  res.send(result.message);
};

const userController = {
  create,
  get,
  update,
  remove
};

export default userController;
