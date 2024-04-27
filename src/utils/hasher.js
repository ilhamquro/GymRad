/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcrypt';

const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);

export const encrypt = (plainString) => bcrypt.hashSync(plainString, salt);

export const compare = (plain, hashed) => bcrypt.compareSync(plain, hashed);
