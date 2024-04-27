import prisma from '../utils/prismaClient';

const seed = async () => {
  await prisma.package_type.createMany({
    data: [
      {
        name: 'Satu Bulan',
        period: 30,
        price: 100000
      },
      {
        name: 'Dua Bulan',
        period: 30,
        price: 100000
      },
      {
        name: 'Tiga Bulan',
        period: 30,
        price: 100000
      }
    ]
  });
};

seed();
