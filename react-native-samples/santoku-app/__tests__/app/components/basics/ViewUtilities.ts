import {translateToViewData} from '../../../../src/app/components/basics';

class Data1 {
  p1 = 'p1';
}

class Data1View {
  p1?: string;
}

class Data2View {
  p2?: string;
}

describe('Any typed objects can translated to view data', () => {
  test('have common properties', () => {
    const source = new Data1();
    const translated = translateToViewData<Data1View>(source);
    expect(translated.p1).toBe(source.p1);
  });

  test('have no common property', () => {
    const source = new Data1();
    const translated = translateToViewData<Data2View>(source);
    expect(translated.p2).toBeUndefined();
  });
});
