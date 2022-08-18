import {getEvents} from './getEvents';
import {getEventsEventId} from './getEventsEventId';
import {postEvents} from './postEvents';

export const eventHandlers = [getEvents, getEventsEventId, postEvents];
