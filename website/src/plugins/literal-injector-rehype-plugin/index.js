const injectionKeywordPrefix = '{@inject:';

function hasPlaceHolder(value) {
  return value && value.includes(injectionKeywordPrefix);
}

module.exports = function htmlInjector(options) {
  const keys = Object.keys(options);
  const placeHolders = keys.map((key) => new RegExp(`${injectionKeywordPrefix} *${key}}`));
  return inject;

  function inject(tree) {
    if (tree.type === 'root' || tree.type === 'element') {
      tree.children = tree.children.map(inject);
      if (tree.tagName === 'a' && tree.properties?.href) {
        const href = decodeURI(tree.properties.href);
        if (hasPlaceHolder(href)) {
          tree.properties.href = encodeURI(replace(href));
        }
      }
    }
    if (tree.type === 'text' && hasPlaceHolder(tree.value)) {
      tree.value = replace(tree.value);
    }
    return tree;
  }

  function replace(value) {
    return keys.reduce((replaced, key, index) => {
      return replaced.replace(placeHolders[index], options[key]);
    }, value);
  }
};
