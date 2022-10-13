jest.mock('bases/focus-manager/useFocusEffect', () => {
  return {
    useFocusEffect: effect => jest.fn(),
  };
});
