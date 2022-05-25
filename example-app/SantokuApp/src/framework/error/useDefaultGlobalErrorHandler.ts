import axios from 'axios';
import {useSnackbar} from 'components/overlay';
import {useAccountContextOperation} from 'context/useAccountContextOperation';
import {AuthenticationService} from 'framework/authentication';
import {isApplicationError} from 'framework/error/ApplicationError';
import {RequestTimeoutError} from 'framework/error/RequestTimeoutError';
import {sendErrorLog} from 'framework/error/sendErrorLog';
import {log} from 'framework/logging';
import {m} from 'framework/message';
import {useCallback} from 'react';
import {Alert} from 'react-native';

const outDebugLog = (error: unknown) => {
  try {
    if (axios.isAxiosError(error)) {
      log.debug(
        `
Backend API Request Error:
req.url=[${error.config.url ?? ''}]
req.method=[${error.config.method ?? ''}]
req.headers=[${JSON.stringify(error.config.headers, null, 2)}]
req.body=[${JSON.stringify(error.config.data, null, 2)}]
res.status=[${error.response?.status ?? ''}]
res.statusText=[${error.response?.statusText ?? ''}]
res.headers=[${JSON.stringify(error.response?.headers, null, 2)}]
res.body=[${JSON.stringify(error.response?.data, null, 2)}]
`,
      );
    } else {
      const errorMessage = error instanceof Error ? error.message : 'unknown';
      log.debug(`UnexpectedError: message=[${errorMessage}]`);
    }
  } catch (e) {}
};

export const useDefaultGlobalErrorHandler = () => {
  const snackbar = useSnackbar();
  const accountContextOperation = useAccountContextOperation();

  const showRequireLoginDialog = useCallback(() => {
    AuthenticationService.clientLogout().finally(() => {
      accountContextOperation.logout();
      Alert.alert(m('fw.error.再ログインタイトル'), m('fw.error.再ログイン本文'));
    });
  }, [accountContextOperation]);

  return useCallback(
    (error: unknown) => {
      outDebugLog(error);
      if (isApplicationError(error)) {
        // ApplicationErrorは呼出し元で処理する
        return;
      }
      if (axios.isCancel(error)) {
        // Timeout以外の理由でcancelされた場合 (cancelQueries呼び出し時など)
        // デフォルトの動作としては特に処理を実施しない
      } else if (error && axios.isAxiosError(error)) {
        const statusCode = error.response?.status;
        switch (statusCode) {
          case 400: // Bad Request
            // デフォルトの動作としては特に処理を実施しない
            break;
          case 401: // Unauthorized
            // 401応答が返ってきて、自動セッション更新にも失敗したケース
            // 再ログインを促すアラートを表示
            showRequireLoginDialog();
            break;
          case 403: // Forbidden
            // 暫定的に最新の利用規約への同意が必要なことを伝えるアラートのみ表示
            // TODO: 最新の利用規約同意画面を開けるようにする
            Alert.alert(m('fw.error.利用規約未同意タイトル'), m('fw.error.利用規約未同意本文'));
            break;
          case 404: // Not Found
            // デフォルトの動作としては特に処理を実施しない
            break;
          case 412: // Precondition Failed
            // アプリを新しいバージョンにアップデートするように促すダイアログを表示
            // TODO: ダイアログからApp Storeを開けるようにする
            Alert.alert(m('fw.error.アプリバージョンエラータイトル'), m('fw.error.アプリバージョンエラー本文'));
            break;
          case 429: // Too Many Requests
            // 時間をおいてから再操作をするように促すスナックバーを表示
            snackbar.show(m('fw.error.リクエスト過多'));
            break;
          case 503: // Service Unavailable
            // システムメンテナンス中であることを伝えるスナックバーを表示
            snackbar.show(m('fw.error.システムメンテナンス'));
            break;
          case 504: // Gateway Timeout
            // 時間をおいてから再操作をするように促すスナックバーを表示
            snackbar.show(m('fw.error.リクエストタイムアウト'));
            break;
          default:
            // 想定外のエラーが発生したことを伝えるスナックバーを表示し、Firebase Clashlyticsへログを送信
            snackbar.show(m('fw.error.予期せぬ通信エラー'));
            sendErrorLog(error);
            break;
        }
      } else if (error instanceof RequestTimeoutError) {
        // 時間をおいてから再操作をするように促すスナックバーを表示
        snackbar.show(m('fw.error.リクエストタイムアウト'));
      } else {
        // 想定外のエラーが発生したことを伝えるスナックバーを表示し、Firebase Clashlyticsへログを送信
        snackbar.show(m('fw.error.予期せぬ通信エラー'));
        sendErrorLog(error);
      }
    },
    [showRequireLoginDialog, snackbar],
  );
};
