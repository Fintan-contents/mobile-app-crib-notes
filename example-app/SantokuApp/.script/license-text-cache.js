const fetch = require('node-fetch'); // TODO: node v18 を使うようになったら削除する [検索用キーワード: 16.18.0]
/**
 * 外部に同時に複数リクエストして負荷がかからないように直列化する
 */
const serialFetch = (() => {
  /**
   * @type {Promise<Response>}
   */
  let prevRequest = Promise.resolve();
  return (resource, options) => {
    prevRequest = prevRequest.then(() => {
      console.info(`request to ${resource}`);
      return fetch(resource, options);
    });
    return prevRequest;
  };
})();

module.exports = new class LicenseTextCache {
  constructor() {
    this._cache = {};
  }
  /**
   * 
   * @param {string} url 
   * @returns {Promise<string>} licenseText
   */
  fetch(url) {
    if (!url) return Promise.reject('url must be non-empty');
    url = url
      .replace(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\//, (_all, p1, p2) => {
        return `https://raw.githubusercontent.com/${p1}/${p2}/`;
      })
      .replace(/^https?:\/\/www\.apache\.org\/licenses\/LICENSE-2.0\.(txt|html)/, () => {
        return 'https://www.apache.org/licenses/LICENSE-2.0.txt';
      });
    if (!this._cache[url]) {
      this._cache[url] = serialFetch(url).then(res => {
        if (res.ok) return res.text();
        throw new Error(`${res.status} ${res.statusText}`);
      });
    }
    return this._cache[url];
  }
};
