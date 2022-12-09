import {AppConfig} from 'bases/core/configs/AppConfig';

import {db} from '../db';

export const termsData = () => {
  db.terms.create({id: '1', url: AppConfig.termsUrl, version: '0.1.0'});
};
