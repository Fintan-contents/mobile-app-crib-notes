import {CryptoDigestAlgorithm, CryptoEncoding} from 'expo-crypto';

const hash = '12345667890abcdefghijklmnopqrstuv12345667890abcdefghijklmnopqrstuv';
export const digestStringAsync = jest.fn(() => hash);

const randomBytes = Uint8Array.from([...Array(24).keys()]);
export const getRandomBytes = jest.fn(() => randomBytes);
export const getRandomBytesAsync = jest.fn(async () => await new Promise(resolve => resolve(randomBytes)));

export {CryptoDigestAlgorithm, CryptoEncoding};
