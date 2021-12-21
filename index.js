const NodeRSA = require('node-rsa');

// const key = new NodeRSA({ b: 1024 });

let secret = 'W3Bridge coding challenge is fun';

// var public_key = key.exportKey('public');
// var private_key = key.exportKey('private');


public_key = '-----BEGIN PUBLIC KEY-----\n' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCufTY8jA52CH64A2rFzhHQpSjL\n' +
    'C5lQKE4OzPycGMbIiNEn+G3DyAq26W49hMU0UhdDkwDvoapogZIv6z/EFapJO3or\n' +
    're/TS4aIPo3sH3LuPK8KUyqt1snDMOJW7Hg297VyqHPNUEa78OEXee9fp+WlHzVC\n' +
    'BcU/dBdrLw58W0X2nQIDAQAB\n' +
    '-----END PUBLIC KEY-----';


private_key = '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIICXQIBAAKBgQCufTY8jA52CH64A2rFzhHQpSjLC5lQKE4OzPycGMbIiNEn+G3D\n' +
    'yAq26W49hMU0UhdDkwDvoapogZIv6z/EFapJO3orre/TS4aIPo3sH3LuPK8KUyqt\n' +
    '1snDMOJW7Hg297VyqHPNUEa78OEXee9fp+WlHzVCBcU/dBdrLw58W0X2nQIDAQAB\n' +
    'AoGAG5wQcvAucZrSgkd4I6iBxSP9GnPRZI+cGldxOTnqalzLy6lRpQMIPv0cxns1\n' +
    'wRukNrsSENjh3/twqEhvJJXRBdXM0Wswguw6q1l8Wquq5mtNBV9VQmbenx/WeD4h\n' +
    'U867v9Gtn511erxhE2i7RdMY7YeORv1nnFgYIMZfd/tGjjkCQQD2BVZHFss5HIxl\n' +
    'UJ9AClfKy9df0HGWCRRdabxWC1dvbCAZfniiiv6gMdPr+XBVAtT1X6wNlGAhtRKC\n' +
    'C1BzUPSrAkEAtZEYJ3ROtOlHPNUedhsrGkOPEn3KZSoxjg/65l8AN0akiDU8tLej\n' +
    'ALRnZ3ttHhZkhJZGonbXIhXlLfgaaNtx1wJBANh/CdW1MVEo1kOyFvH8KBXGG9mt\n' +
    'TMeDZfBuQ9ZUVLUwqW7F5NLlDf1a2+skrr2gqFblwjqQ/6ep+IeH/Vv9OdECQQC0\n' +
    '/khnvCdhbFIZMBHHhlm3OrV6p26E3kS76u4fi4A5mfAV34v+UjjpUOzrWTxzC7tz\n' +
    '+CG9fl4CmnT1GCerc2XNAkAbust21TfK2dwIOnHQENzuYwLbjPKBB2PwyDujld0r\n' +
    'IRKAUWlkhZqEBxa01vI/StWxwWSGGDhZwlIMp/oUJOJV\n' +
    '-----END RSA PRIVATE KEY-----';


    let key_private = new NodeRSA(private_key)
    let key_public = new NodeRSA(public_key)

    // public key for encryption

   var encryptedString = key_public.encrypt(secret, 'base64')

//    decryption using private key
    var decryptedString = key_private.decrypt(encryptedString, 'utf8')

    console.log(decryptedString)