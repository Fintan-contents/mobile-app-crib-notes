const randomBytes = Uint8Array.from([...Array(24).keys()]);
export const getRandomBytes = jest.fn(() => randomBytes);
export const getRandomBytesAsync = jest.fn(async () => await new Promise(resolve => resolve(randomBytes)));
