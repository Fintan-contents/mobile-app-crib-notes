import {initialData} from './datas';
import {initialDb} from './db';
import {initialServer} from './server';

export const initialMsw = async () => {
  initialDb();
  await initialData();
  initialServer();
};
