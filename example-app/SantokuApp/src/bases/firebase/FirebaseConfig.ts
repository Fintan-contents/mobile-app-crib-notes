import firebase from '@react-native-firebase/app';
import type {ReactNativeFirebase} from '@react-native-firebase/app';

const dummyProjectId = 'dummy';

/**
 * Firebaseインスタンスの情報を取得するクラスです。
 */
export class FirebaseConfig {
  private app: ReactNativeFirebase.FirebaseApp;

  /**
   * コンストラクタ
   * @param name Firebaseインスタンスの名前
   */
  constructor(name?: string) {
    this.app = firebase.app(name);
  }
  /**
   * Firebaseインスタンス名です。
   * @returns Firebaseインスタンス名
   */
  get name() {
    return this.app.name;
  }
  /**
   * FirebaseインスタンスのOption情報です。
   * 接続するFirebaseの情報などが入っています。
   * @returns Firebaseインスタンスに設定されているOption情報
   */
  get options() {
    return this.app.options;
  }
  /**
   * Firebaseの接続情報がダミーかどうかを判定します。
   * Firebaseに接続するための設定ファイル（Android: google-services.json、iOS: GoogleService-Info.plist）に定義されているプロジェクトIDを使用して判定します。
   * @returns Firebaseの設定ファイルがダミーの場合はtrue、それ以外の場合はfalseを返却します。
   */
  get isDummy() {
    return this.options.projectId === dummyProjectId;
  }
}

export const firebaseConfig = new FirebaseConfig();
