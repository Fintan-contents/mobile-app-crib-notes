// 表示用のデータに対して型を厳しく制約する（型ごとにtranslatorを作る）のはコスパ悪すぎると判断しました。
// @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any を有効にしても、この行は無視する。eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types @typescript-eslint/no-explicit-any
function translateToViewData<T>(domain: any): T {
  // @typescript-eslint/no-unsafe-return を有効にしても、この行は無視する。 eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {...domain};
}

export {translateToViewData};
