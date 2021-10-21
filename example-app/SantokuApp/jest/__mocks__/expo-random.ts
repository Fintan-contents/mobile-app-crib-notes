export const getRandomBytes = jest.fn(() => Uint8Array.from([...Array(24).keys()]));
export const getRandomBytesAsync = jest.fn(async () => Uint8Array.from([...Array(24).keys()]));
