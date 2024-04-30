const databaseErrorHandler = (dbResult, res) => {
  if (dbResult.code === 400) {
    res.status(500);
    res.send(`Error: Database mu ga konek TOD`);
    return;
  }
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
