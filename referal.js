const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testCreateReferral() {
  try {
    const referral = await prisma.referral.create({
      data: {
        referrerName: 'Ronak',
        referrerEmail: 'vaghelaronak0@gmail.com',
        referrerPhone: '9022463880',
        referralLink: 'https://www.abc.com',
        referralCode: '123456',
        refereeName : 'jilesh'
      },
    });
    console.log('Referral created:', referral);
  } catch (error) {
    console.error('Error creating referral:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testCreateReferral();
