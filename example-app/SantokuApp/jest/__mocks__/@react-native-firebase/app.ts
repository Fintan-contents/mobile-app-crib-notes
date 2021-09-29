import firebase from '@react-native-firebase/app';

const mock: ReturnType<typeof firebase.app> = {
  name: 'mock',
  options: {
    appId: 'mocked firebase app id',
    projectId: 'mocked firebase project id',
  },
  delete: jest.fn(),
  utils: jest.fn(),
  crashlytics: jest.fn(),
};

const app = () => mock;

export default {
  app,
};
