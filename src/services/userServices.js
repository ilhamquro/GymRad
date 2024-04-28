import prisma from '../utils/prismaClient.js';

const create = async (username, email, noHp) => {
  try {
    await prisma.user.create({
      data: {
        username,
        email,
        no_hp: noHp
      }
    });

    return {
      code: 201,
      message: 'Successfully created'
    };
  } catch (error) {
    return {
      code: 400,
      error
    };
  }
};

const userService = {
  create
};

export default userService;
