import {render, screen} from '@testing-library/react-native';
import beginnerMark from 'assets/images/beginner-mark.png';
import React from 'react';

import {QRCode} from './QRCode';

describe('QRCode', () => {
  it('QRCodeが正常にrenderできることを確認', () => {
    render(
      <QRCode
        value="0123456789"
        size={200}
        ecl="Q"
        backgroundColor="red"
        color="yellow"
        enableLinearGradient
        linearGradient={['rgb(255,255,255)', 'rgb(0,0,0)']}
        gradientDirection={['10', '10', '10', '10']}
        logo={beginnerMark}
        logoSize={50}
        logoBackgroundColor="white"
        logoMargin={4}
        logoBorderRadius={2}
        quietZone={5}
        onError={(e: unknown) => console.error(e)}
      />,
    );
    // QRCodeではtestIDを設定していないので、レンダリング後のコンポーネントを取得できずPropsの検証ができませんでした。
    // また、QRCode#getRefを使用して、SVGのデータURLを前回のテスト結果と比較することも検討しましたが、
    // render後のrefがundefinedになってしまい検証を諦めました。
    // https://github.com/awesomejerry/react-native-qrcode-svg#examples
    // そのため、スナップショットの検証のみを実施します。
    expect(screen).toMatchSnapshot();
  });
});
