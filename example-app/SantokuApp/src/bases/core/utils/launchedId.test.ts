import * as Random from 'expo-random';

import {launchedId} from './launchedId';

describe('launchedId', () => {
  test('32桁の起動IDが取得できるかの検証', async () => {
    const spy = jest
      .spyOn(Random, 'getRandomBytesAsync')
      .mockReturnValue(new Promise(resolve => resolve(Uint8Array.from([...Array(32).keys()]))));
    const id = await launchedId();
    expect(spy).toHaveBeenCalledWith(32);
    expect(id).toHaveLength(32);
    expect(id).toMatch(/^[0-9a-v]+$/);
  });
});
