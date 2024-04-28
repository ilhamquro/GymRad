const databaseErrorHandler = (dbResult, res) => {
  const errorTarget = dbResult.error.meta.target;

  if (/username/.test(errorTarget)) {
    res.status(dbResult.code);
    res.send('Username is already in use');
    return;
  }
  if (/email/.test(errorTarget)) {
    res.status(dbResult.code);
    res.send('Email is already in use');
    return;
  }
  if (/no_hp/.test(errorTarget)) {
    res.status(dbResult.code);
    res.send('Phone number is already in use');
  }
};

export default databaseErrorHandler;
