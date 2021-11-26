import {CryptoDigestAlgorithm, CryptoEncoding} from 'expo-crypto';

const hash = '12345667890abcdefghijklmnopqrstuv12345667890abcdefghijklmnopqrstuv';
export const digestStringAsync = jest.fn(() => hash);
export {CryptoDigestAlgorithm, CryptoEncoding};
