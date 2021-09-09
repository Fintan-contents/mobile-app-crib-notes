const crashlytics = {
  recordError: jest.fn(),
};
export default jest.fn(() => crashlytics);
