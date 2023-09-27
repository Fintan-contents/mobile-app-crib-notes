/*
  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment --
  expo-linkingのすべてのNamed Exportを列挙するのは大変なので、
  ES6のexport/import形式ではなく、module.exportsを使ってexportする。
 */
module.exports = {
  ...jest.requireActual('expo-linking'),
  addEventListener: jest.fn(() => ({
    remove: jest.fn(),
  })),
  getInitialURL: jest.fn().mockResolvedValue(null),
};
