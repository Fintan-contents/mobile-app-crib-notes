export const setItemAsync = jest.fn();
export const getItemAsync = jest.fn(() => '1234567890');
export const deleteItemAsync = jest.fn();
export const isAvailableAsync = jest.fn();

/*
  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment --
  expo-secure-storeのすべてのNamed Exportを列挙するのは大変なので、
  ES6のexport/import形式ではなく、module.exportsを使ってexportする。
 */
module.exports = {
  ...jest.requireActual('expo-secure-store'),
  setItemAsync,
  getItemAsync,
  deleteItemAsync,
  isAvailableAsync,
};
