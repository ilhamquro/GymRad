import prisma from '../utils/prismaClient';

const create = async (username, email, password) => {
  try {
    await prisma.admin.create({
      data: {
        username,
        email,
        password
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

const getByEmail = async (email) => {
  try {
    const result = await prisma.admin.findUnique({
      where: {
        email
      }
    });

    return result;
  } catch (error) {
    return {
      code: 400,
      error
    };
  }
};

const adminService = {
  create,
  getByEmail
};

export default adminService;
