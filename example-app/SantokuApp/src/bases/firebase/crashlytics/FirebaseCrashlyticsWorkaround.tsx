import React, {PropsWithChildren} from 'react';

/**
 * Firebase Crashlyticsに、Reactコンポーネントで発生するエラーが送信されない問題に対するWorkaroundです。
 *
 * [事象]
 * JSXやコンポーネントのライフサイクルに応じた処理（useEffectなど）で発生したエラーが、Firebase Crashlyticsに送信されない。
 * （発生したエラーをtry...catchやErrorBoundaryなどで個別にハンドリングし、明示的にFirebase Crashlyticsにログ送信している場合は問題ありません。）
 *
 * [事象が発生した環境]
 * - iOS16/iOS17
 *   - 上記以外のバージョンは未確認
 *   - Androidは本事象が発生しません
 *
 * [発生条件(AND条件)]
 * - JavaScriptエンジンにHermesを使用
 * - firebase.jsonの「crashlytics_is_error_generation_on_js_crash_enabled」をfalseに設定
 *
 * [対策]
 * React.ComponentのcomponentDidCatchでエラーを再度throwすることで、Firebase Crashlyticsにクラッシュログが送信されます。
 * （この方法は、React Native Firebase Crashlyticsの公式ドキュメントなどにも記載されていない、非公式な方法です。）
 *
 * [その他]
 * firebase.jsonの「crashlytics_is_error_generation_on_js_crash_enabled」をtrueに設定することで、クラッシュログをFirebase Crashlyticsに送信することも可能です。
 * しかし、この方法で送信されたスタックトレースは metro-symbolicateを使用して簡単にソースコードとマッピングできません。
 * （Firebase Crashlyticsに送信されるスタックトレースは難読化されており、ソースコードとマッピングしないとエラーの発生箇所が特定できません。）
 * そのため、このアプリではこの方法を採用していません。
 *
 * @see {@link https://react.dev/reference/react/Component#componentdidcatch}
 * @see {@link https://rnfirebase.io/crashlytics/usage#crashlytics-javascript-stacktrace-issue-generation}
 * @see {@link https://reactnative.dev/docs/symbolication}
 */
export class FirebaseCrashlyticsWorkaround extends React.Component<PropsWithChildren> {
  componentDidCatch(error: Error) {
    throw error;
  }

  render() {
    return this.props.children;
  }
}
