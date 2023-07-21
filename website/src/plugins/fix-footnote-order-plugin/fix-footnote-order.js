export default (function () {
  if (typeof window === 'undefined') {
    return null;
  }

  return {
    onRouteDidUpdate() {
      const idRegExp = /^fn-([0-9]+)$/;
      const checkKey = 'data-already-sorted';
      document.querySelectorAll('.footnotes ol').forEach((ol) => {
        if (ol.hasAttribute(checkKey)) return;
        ol.setAttribute(checkKey, '');

        [...ol.querySelectorAll('li[id]')]
          .flatMap((li) => {
            // 念のため入れ子チェック
            if (li.parentNode !== ol) return [];

            const str = (idRegExp.exec(li.id) || [])[1];
            // id形式が想定外
            if (!str) return [];

            const num = Number(str);
            return [{li, num}];
          })
          .sort((a, b) => {
            if (a.num < b.num) return -1;
            if (a.num > b.num) return 1;
            return 0;
          })
          .forEach(({li}) => {
            ol.appendChild(li);
          });
      });
    },
  };
})();
