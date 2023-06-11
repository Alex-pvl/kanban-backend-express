const fs = require('fs');
const crypto = require('crypto');

const generateRSAKeys = () => {
  const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    }
  });

  fs.writeFileSync('private.pem', privateKey);
  fs.writeFileSync('public.pem', publicKey);

  console.log('RSA keys generated successfully!');
};

generateRSAKeys();