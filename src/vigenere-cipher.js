const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let encryptedMessage = '';
    for (let i = 0, j = 0; i < message.length; i += 1) {
      const letterCode = message.toUpperCase().charCodeAt(i);
      const m = letterCode - 'A'.charCodeAt();
      if (m < 0 || m > 25) {
        encryptedMessage += message[i];
        continue;
      }
      const k = key.toUpperCase().charCodeAt(j % key.length) - 'A'.charCodeAt();
      encryptedMessage += String.fromCharCode((m + k) % 26 + 'A'.charCodeAt());
      j += 1;
    }
    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let decryptedMessage = '';
    for (let i = 0, j = 0; i < encryptedMessage.length; i += 1) {
      const letterCode = encryptedMessage.toUpperCase().charCodeAt(i);
      const c = letterCode - 'A'.charCodeAt();
      if (c < 0 || c > 25) {
        decryptedMessage += encryptedMessage[i];
        continue;
      }
      const k = key.toUpperCase().charCodeAt(j % key.length) - 'A'.charCodeAt();
      decryptedMessage += String.fromCharCode(((c - k) % 26 + 26) % 26 + 'A'.charCodeAt());
      j += 1;
    }
    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
