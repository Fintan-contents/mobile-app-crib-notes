let warmStartDeepLink: string | undefined;

export const setWarmStartDeepLink = (url: string) => {
  warmStartDeepLink = url;
};
export const getOnceWarmStartDeepLink = () => {
  const deepLink = warmStartDeepLink;
  warmStartDeepLink = undefined;
  return deepLink;
};
