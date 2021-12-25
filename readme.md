Assessment:
Write a simple cipher in javascript that takes a string as an argument and returns an encrypted text as well as takes encrypted text and returns the original text.

Firstly, i will described the term encryption and decryption and the methods utilized to encipher text/message,`data` so as to prevent the data from attacks. This is achieved via Cryptography.

Encryption is a means of securing digital data using one or more mathematical techniques, along with a password or 'key' used to decrypt the information <a href="https://www.investopedia.com/terms/e/encryption.asp#:~:text=Encryption%20is%20a%20means%20of,makes%20the%20original%20information%20unreadable.">Source</a>. While decryption is a process that transforms encrypted information into its original format.

Method of Cryptography:
Cryptography is classified into symmetric cryptography , asymmetric cryptography and hashing.

In private key, the same key (secret key) is used for both encryption and decryption. However, in public key, mathematically identical but different keys are used. One key (Public key) is used for encrypt the plain text to convert it into a cipher and another key (Private key) is used by receiver to decrypt the cipher text to read the message.

Solution to Problem: This solution utilizes the asymmetric cryptography approach in which there are two different keys i.e Public key and private key.

Step 1: Initialize a package.json by using the command `npm init -y` and create a file name `index.js`

Note: This project utilizes node-rsa package module, an npm package which provides the access to various cryptography method.

To install the package nodersa `npm install node-rsa`

step2: Require the module node-rsa :
`const NodeRSA = require('node-rsa')`

Step 3: To generate our key i.e the private and public key.

`const key = new NodeRSA ({b: 1024})`

<!-- Generate public key -->

`var public_key = key.exportKey('public')`

<!-- Generate public key -->

var private_key = key.exportKey('private')

Copy the keys from your terminal and paste in your index.js file just as i did in the index.js file, see line 11 to 33.

step 4: With these keys we can create a new instance both keys to enable encryption and decryption. However
i.e `let key_private = new NodeRSA(private_key)`
`let key_public = new NodeRSA(key_public)`

step 5: Encryption

Recall that the public key is used to encrypt. so using the key_public we can encrypt our data using this method:

`key_public.encrypt(message, format)`

This method takes in two arguments, messaage and format

`var encryptedString = key_public.encrypt(message, 'base64')`

Note: Excluding the formate i.e `base64` render the data as buffer. Always remember to add the format.

Decryption: Recall that the private key is used to decrypt. so using the key_private we can encrypt our data using this method:

`key_private.decrypt(encryptedText, format)`

s`var decryptedString = key_private.decrypt(encryptedString, 'utf8')`

The `utf8` indicates that we want the data returned as a plain text.
