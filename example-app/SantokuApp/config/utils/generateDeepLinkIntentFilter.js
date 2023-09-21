const DEEP_LINK_SCHEME = require('../constants/deepLink').DEEP_LINK_SCHEME;
const DEEP_LINK_DOMAIN = require('../constants/deepLink').DEEP_LINK_DOMAIN;

module.exports = (pathPrefix = undefined) => {
  const data = [
    {
      scheme: DEEP_LINK_SCHEME,
    },
    {
      host: DEEP_LINK_DOMAIN,
    },
    {
      path: withPathPrefix(pathPrefix, `/`),
    },
    {
      path: withPathPrefix(pathPrefix, `/home`),
    },
    {
      pathPattern: withPathPrefix(pathPrefix, `/questions/.*`),
    },
    {
      path: withPathPrefix(pathPrefix, `/demo/app-info`),
    },
  ];
  return {
    autoVerify: true,
    action: 'VIEW',
    data,
    category: ['BROWSABLE', 'DEFAULT'],
  };
};

const withPathPrefix = (pathPrefix, path) => {
  return pathPrefix ? `/${pathPrefix}${path}` : path;
};
