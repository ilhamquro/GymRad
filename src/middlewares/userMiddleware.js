import isAllFilled from '../utils/isFilled.js';

const create = (req, res, next) => {
  const payload = req.body;

  const unfilledProperties = isAllFilled(payload);

  if (unfilledProperties.length > 0) {
    res.status(400);
    res.send(
      `Please fill the following properties, (${unfilledProperties.join(', ')})!`
    );
    return;
  }

  next();
};

const userMiddleware = {
  create
};

export default userMiddleware;
