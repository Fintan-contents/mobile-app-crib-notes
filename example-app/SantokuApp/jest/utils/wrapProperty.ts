function hasOwnProperty<T, K extends PropertyKey>(obj: T, propertyKey: K): obj is T & Record<K, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, propertyKey);
}

/**
 * `{...original, [key]: value}`だとgetterにdeprecated warn logが存在する場合warnログが出てしまう問題対策
 */
export function wrapProperty<T extends object>(original: T, propertyObj: object): T {
  return new Proxy(original, {
    get(target, name, ...rest) {
      if (hasOwnProperty(propertyObj, name)) {
        return propertyObj[name];
      }
      return Reflect.get(target, name, ...rest);
    },
  });
}
