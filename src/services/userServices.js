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

const getList = async (skip, take) => {
  try {
    const data = await prisma.user.findMany({
      skip,
      take
    });

    return {
      code: 201,
      data,
      message: 'Successfully created'
    };
  } catch (error) {
    return {
      code: 400,
      error
    };
  }
};

const getOne = async (id) => {
  try {
    const data = await prisma.user.findUnique({
      where: {
        id
      }
    });

    return {
      code: 201,
      data,
      message: 'Successfully get the data'
    };
  } catch (error) {
    return {
      code: 400,
      error
    };
  }
};

const update = async (id, data) => {
  try {
    await prisma.user.update({
      where: {
        id
      },
      data
    });

    return {
      code: 201,
      message: 'Successfully updated'
    };
  } catch (error) {
    return {
      code: 400,
      error
    };
  }
};

const remove = async (id) => {
  try {
    await prisma.user.delete({
      where: {
        id
      }
    });

    return {
      code: 201,
      message: 'Successfully deleted'
    };
  } catch (error) {
    return {
      code: 400,
      error
    };
  }
};

const userService = {
  create,
  getList,
  getOne,
  update,
  remove
};

export default userService;
