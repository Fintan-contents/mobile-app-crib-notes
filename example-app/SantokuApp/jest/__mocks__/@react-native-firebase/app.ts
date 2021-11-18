import firebase from '@react-native-firebase/app';

const mock = (name?: string): ReturnType<typeof firebase.app> => {
  return {
    name: name ?? 'DEFAULT',
    options: {
      appId: 'mocked firebase app id',
      projectId: 'mocked firebase project id',
    },
    delete: jest.fn(),
    utils: jest.fn(),
    crashlytics: jest.fn(),
  };
};

export default {
  app: mock,
};
