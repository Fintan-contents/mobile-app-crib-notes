import {useEffect, useRef} from 'react';

/**
 * This React hook provides the previous value. (To be precise, it returns the previous reference.)
 *
 * 基本はusePreviousを使用しないパターンで実装して、どうしてもRefを使う必要がある場面だけusePreviousを使用してください。
 *
 * See [Hooks FAQ - How to get the previous props or state?](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state).
 *
 * > We have previously suggested a custom Hook called usePrevious to hold the previous value.
 * > However, we’ve found that most use cases fall into the two patterns described above.
 * > If your use case is different, you can hold a value in a ref and manually update it when needed.
 * > Avoid reading and updating refs during rendering because this makes your component’s behavior difficult to predict and understand.
 *
 * @See [Storing information from previous renders](https://ja.react.dev/reference/react/useState#storing-information-from-previous-renders).
 */
export const usePrevious = <T>(current: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = current;
  });

  return ref.current;
};
