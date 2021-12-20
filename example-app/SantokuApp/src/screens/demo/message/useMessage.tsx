import {m} from 'framework';

const infoKeyExtractor = (_: unknown, index: number) => index.toString();

export const useMessage = () => {
  return {
    info: [
      {
        name: 'ホーム',
        value: m('ホーム'),
      },
      {
        name: 'validation.required',
        value: m('validation.required', m('チーム詳細')),
      },
      {
        name: 'msg.error.ネットワーク',
        value: m('msg.error.ネットワーク'),
      },
    ],
    infoKeyExtractor,
  };
};
