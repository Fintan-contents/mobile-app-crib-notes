import React from 'react';
import RNQRCode, {QRCodeProps as RNQRCodeProps} from 'react-native-qrcode-svg';

type QRCodeProps = RNQRCodeProps;

/**
 * モデル2のQRコードを生成し、表示するコンポーネント。
 * 指定されたデータや誤り訂正レベルに応じて以下の項目を自動計算します。
 * - エンコーディングモード
 * - シンボルバージョン
 * - マスキングパターン
 *
 * 誤り訂正レベルは、以下の4つのレベルから選択できます。（※括弧内の数値はデータが読み取れなくなる最大の損傷面を表します。）
 * デフォルト値は、"M"です。
 * - L（約7%）
 * - M（約15%）
 * - Q（約25%）
 * - H（約30%）
 *
 * 指定可能なPropsの詳細は、{@link https://github.com/awesomejerry/react-native-qrcode-svg#props}を参照してください。
 *
 * @see {@link https://github.com/awesomejerry/react-native-qrcode-svg}
 */
export const QRCode: React.FC<QRCodeProps> = (props: QRCodeProps) => {
  return <RNQRCode {...props} />;
};
