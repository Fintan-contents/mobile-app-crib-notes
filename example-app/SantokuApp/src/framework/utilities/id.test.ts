import {launchedId, random, randomAsync} from './id';
import * as Random from 'expo-random';

describe('random', () => {
  test('指定したバイト数のランダム値が取得できるかの検証', () => {
    const spy = jest.spyOn(Random, 'getRandomBytes').mockReturnValue(Uint8Array.from([...Array(50).keys()]));
    const id = random(50);
    expect(spy).toHaveBeenCalledWith(50);
    expect(id).toHaveLength(50);
    expect(id).toMatch(/^[0-9a-z]+$/);
  });
});

describe('randomAsync', () => {
  test('指定したバイト数のランダム値が取得できるかの検証', async () => {
    const spy = jest
      .spyOn(Random, 'getRandomBytesAsync')
      .mockReturnValue(new Promise((resolve) => resolve(Uint8Array.from([...Array(50).keys()]))));
    const id = await randomAsync(50);
    expect(spy).toHaveBeenCalledWith(50);
    expect(id).toHaveLength(50);
    expect(id).toMatch(/^[0-9a-z]+$/);
  });
});

describe('launchedId', () => {
  test('32桁の起動IDが取得できるかの検証', async () => {
    const spy = jest
      .spyOn(Random, 'getRandomBytesAsync')
      .mockReturnValue(new Promise((resolve) => resolve(Uint8Array.from([...Array(32).keys()]))));
    const id = await launchedId();
    expect(spy).toHaveBeenCalledWith(32);
    expect(id).toHaveLength(32);
  });
});
