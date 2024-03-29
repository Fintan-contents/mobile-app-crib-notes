import {NavigationProp} from '@react-navigation/native';
import type {ParamListBase} from '@react-navigation/routers';

const mock: jest.Mocked<NavigationProp<ParamListBase>> = {
  addListener: jest.fn(),
  canGoBack: jest.fn(),
  dispatch: jest.fn(),
  getParent: jest.fn(),
  getState: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  navigate: jest.fn(),
  removeListener: jest.fn(),
  reset: jest.fn(),
  setOptions: jest.fn(),
  setParams: jest.fn(),
  getId: jest.fn(),
};

Object.defineProperty(__mocks, 'navigation', {value: mock});

/*
  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment --
  @react-navigation/nativeのすべてのNamed Exportを列挙するのは大変なので、
  ES6のexport/import形式ではなく、module.exportsを使ってexportする。
 */
module.exports = {
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => mock,
};
