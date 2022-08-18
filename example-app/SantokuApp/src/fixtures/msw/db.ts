import {factory} from '@mswjs/data';
import {FactoryAPI} from '@mswjs/data/lib/glossary';

import {models} from './models';

let db: FactoryAPI<typeof models>;
let maxDb: FactoryAPI<typeof models>;
let minDb: FactoryAPI<typeof models>;

export const initialDb = () => {
  db = factory(models);
  maxDb = factory(models);
  minDb = factory(models);
};

export {db, maxDb, minDb};
