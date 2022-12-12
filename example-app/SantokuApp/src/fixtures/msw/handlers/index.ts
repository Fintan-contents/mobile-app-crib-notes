import {accountHandlers} from './account';
import {eventHandlers} from './event';
import {notificationHandlers} from './notification';
import {questionHandlers} from './question';
import {systemHandlers} from './system';
import {tagHandlers} from './tag';
import {templateHandlers} from './template';
import {termsHandlers} from './terms';

export const handlers = [
  ...accountHandlers,
  ...termsHandlers,
  ...systemHandlers,
  ...tagHandlers,
  ...notificationHandlers,
  ...templateHandlers,
  ...eventHandlers,
  ...questionHandlers,
];
