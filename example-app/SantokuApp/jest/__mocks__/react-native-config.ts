export abstract class Config {
  static get APP_ID_FLAVOR_SUFFIX() {
    return '.test';
  }
  static get APP_NAME_HOME() {
    return 'Test SantokuApp';
  }
  static get PROVISIONING_PROFILE_FLAVOR() {
    return 'Not Available';
  }
  static get TERMS_URL() {
    return 'https://www.tis.co.jp/termsofuse/';
  }
  static get SANTOKU_APP_BACKEND_URL() {
    return 'http://localhost:9080';
  }
  static get REQUEST_TIMEOUT() {
    return undefined;
  }
}