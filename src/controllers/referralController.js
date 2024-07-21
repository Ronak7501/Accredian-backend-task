const prisma = require('../prismaClient');

const createReferral = async (req, res) => {
    try {
      const {
        referrerName,
        referrerEmail,
        referrerPhone,
        referralLink,
        referralCode,
      } = req.body;
  
      console.log('Received data:', req.body);

    //   console.log('Prisma create data:', {
    //     referrerName,
    //     referrerEmail,
    //     referrerPhone,
    //     referralLink,
    //     referralCode
    //   });
  
      if (!referrerName || !referrerEmail || !referralLink || !referralCode) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const referral = await prisma.referral.create({
        data: {
          referrerName,
          referrerEmail,
          referrerPhone,
          referralLink,
          referralCode,
        }
      });

      console.log('Referral created:', referral);
      
  
      res.status(201).json(referral);
    } catch (error) {
      console.error('Error creating referral:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  };

  module.exports = {createReferral};
  