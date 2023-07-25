// IDEでフォーマッタを使用している場合、正規表現がフォーマットされる場合があるのでこのファイルを編集する場合注意して下さい。
export function loginPasswordValidator(value: string | undefined) {
  if (!value) {
    return true;
  }
  return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,50}/.test(value);
}
