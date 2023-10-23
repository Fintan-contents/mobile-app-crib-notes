const defaultOptions = {
  queries: {
    retry: false, // default: 3
    // Santokuでは、オフライン時のエラー処理をAxiosからエラーがthrowされるかで判定しており、onlineモードでQueryが発行されないとエラー処理が実施されないため
    // https://tanstack.com/query/v4/docs/react/guides/migrating-to-react-query-4#queries-and-mutations-per-default-need-network-connection-to-run
    networkMode: 'offlineFirst' as const, // default: 'online'
  },
  mutations: {
    networkMode: 'offlineFirst' as const, // default: 'online'
  },
};

export {defaultOptions};
