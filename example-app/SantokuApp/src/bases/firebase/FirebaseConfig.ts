/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
