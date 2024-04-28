/* eslint-disable camelcase */
import prisma from '../utils/prismaClient.js';

function generateDataArray(numObjects) {
  const dataArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= numObjects; i++) {
    const username = `userdumb${i}`;
    const email = `${username}@mail.com`;
    const no_hp = `048898943${i}`;

    const dataObject = {
      username,
      email,
      no_hp
    };

    dataArray.push(dataObject);
  }
  return dataArray;
}

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

  const randomUser = generateDataArray(30);
  await prisma.user.createMany({
    data: randomUser
  });
};

seed();
