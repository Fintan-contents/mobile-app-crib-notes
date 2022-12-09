import {getSystemAppUpdatesTypeVersion} from './getSystemAppUpdatesTypeVersion';
import {getSystemCsrfToken} from './getSystemCsrfToken';

export const systemHandlers = [getSystemCsrfToken, getSystemAppUpdatesTypeVersion];
