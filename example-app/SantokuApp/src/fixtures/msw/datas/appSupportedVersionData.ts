import {db} from '../db';

export const appSupportedVersionData = () => {
  db.appSupportedVersion.create({id: '1', type: 'ios', version: '0.1.0'});
  db.appSupportedVersion.create({id: '2', type: 'android', version: '0.1.0'});
};
