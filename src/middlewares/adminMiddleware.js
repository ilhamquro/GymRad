const create = (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username.length === 0 ||
    email.length === 0 ||
    password.length === 0
  ) {
    res.status(400);
    res.send('Please fill all required fields');
  }

  next();
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email.length === 0 || password.length === 0) {
    res.status(400);
    res.send('Please fill all required fields');
  }

  next();
};

const adminMiddleware = {
  create,
  login
};

export default adminMiddleware;
