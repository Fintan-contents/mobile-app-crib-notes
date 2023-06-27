// Original source:
//   https://github.com/Kichiyaki/react-native-barcode-generator/blob/22f020eacf47fe23f0e311732ec801068db14fbc/index.js
// Original license:
//   The MIT License (MIT)
//
//   Copyright (c) 2021 Dawid Wysokiński
//
//   Permission is hereby granted, free of charge, to any person obtaining a copy
//   of this software and associated documentation files (the "Software"), to deal
//   in the Software without restriction, including without limitation the rights
//   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//   copies of the Software, and to permit persons to whom the Software is
//   furnished to do so, subject to the following conditions:
//
//   The above copyright notice and this permission notice shall be included in all
//   copies or substantial portions of the Software.
//
//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//   SOFTWARE.

import CODE128 from 'jsbarcode/src/barcodes/CODE128/CODE128';
import CODE128AUTO from 'jsbarcode/src/barcodes/CODE128/CODE128_AUTO';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, TextProps, View, ViewProps} from 'react-native';
import {Path, Svg} from 'react-native-svg';

export type Format = 'CODE128' | 'CODE128AUTO';
export const START_CHARACTERS = {
  'CODE-A': String.fromCharCode(105 + 103),
  'CODE-B': String.fromCharCode(105 + 104),
  'CODE-C': String.fromCharCode(105 + 105),
};

export const CODE_SET_CHARACTERS = {
  'CODE-A': String.fromCharCode(105 + 101),
  'CODE-B': String.fromCharCode(105 + 100),
  'CODE-C': String.fromCharCode(105 + 99),
};
const ENCODERS = {
  CODE128,
  CODE128AUTO,
};

export type BarcodeProps = {
  /**
   * バーコードに設定するデータ
   */
  value: string;
  /**
   * バーの幅
   */
  lineWidth?: number;
  /**
   * バーコードの最大幅（textで表示する領域は含まない）
   */
  maxWidth?: number;
  /**
   * バーコードの高さ（textで表示する領域は含まない）
   */
  height?: number;
  /**
   * バーコードの左右の余白
   */
  quietZone?: number;
  /**
   * バーコードのフォーマット
   * 以下のフォーマットを設定可能
   * - CODE128: スタートキャラクタやコードセットキャラクタを自身で設定するフォーマット
   * - CODE128AUTO: 指定されたデータに応じて自動でスタートキャラクタやコードセットキャラクタを設定するフォーマット
   */
  format?: Format;
  /**
   * バーの色
   */
  lineColor?: string;
  /**
   * 背景色
   */
  background?: string;
  /**
   * バーコード下部に表示するテキスト
   */
  text?: string;
  /**
   * バーコード下部に表示するテキストのProps
   */
  textProps?: TextProps;
  /**
   * ViewProps
   */
  viewProps?: ViewProps;
  /**
   * エラー発生時に呼び出されるコールバック関数
   */
  onError?: (err: any) => void;
};

const initialBarcode = {
  bars: '',
  barCodeWidth: 0,
};

const drawRect = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y}h${width}v${height}h-${width}z`;
};

const drawSvgBarCode = (binary: string, height: number, barCodeWidth: number) => {
  const rects = [];

  const singleBarWidth = barCodeWidth / binary.length;
  let barWidth = 0;
  let x = 0;
  const yFrom = 0;

  for (let b = 0; b < binary.length; b++) {
    x = b * singleBarWidth;
    if (binary[b] === '1') {
      barWidth++;
    } else if (barWidth > 0) {
      rects[rects.length] = drawRect(x - singleBarWidth * barWidth, yFrom, singleBarWidth * barWidth, height);
      barWidth = 0;
    }
  }

  if (barWidth > 0) {
    rects[rects.length] = drawRect(x - singleBarWidth * (barWidth - 1), yFrom, singleBarWidth * barWidth, height);
  }

  return rects;
};

/**
 * バーコードを生成し、表示するコンポーネント
 * CODE128のバーコードのみをサポートしている
 */
export const Barcode: React.FC<BarcodeProps> = ({
  value = '',
  lineWidth = 2,
  maxWidth = Infinity,
  height = 100,
  quietZone = 0,
  format = 'CODE128',
  lineColor = '#000000',
  background = '#FFFFFF',
  text,
  textProps: {style: textStyle, ...textProps} = {},
  viewProps: {style, ...viewProps} = {},
  onError,
}) => {
  const getEncoder = useCallback(() => {
    const encoder = new ENCODERS[format](value, {});
    if (!encoder.valid()) {
      throw new Error('Invalid barcode for selected format.');
    }
    return encoder;
  }, [format, value]);

  const {bars, barCodeWidth} = useMemo(() => {
    try {
      const encoder = getEncoder();
      const encoded = encoder.encode();
      const barCodeWidth = Math.min(maxWidth, encoded.data.length * lineWidth);
      return {
        bars: drawSvgBarCode(encoded.data, height, barCodeWidth).join(' '),
        barCodeWidth,
      };
    } catch (error) {
      onError?.(error);
    }
    return initialBarcode;
  }, [getEncoder, lineWidth, height, maxWidth, onError]);

  return (
    <View
      style={StyleSheet.flatten([styles.container, {backgroundColor: background, paddingHorizontal: quietZone}, style])}
      {...viewProps}>
      <Svg height={height} width={barCodeWidth} fill={lineColor}>
        <Path d={bars} />
      </Svg>
      {text && (
        <Text style={StyleSheet.flatten([styles.textStyle, textStyle])} {...textProps}>
          {text}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
});
