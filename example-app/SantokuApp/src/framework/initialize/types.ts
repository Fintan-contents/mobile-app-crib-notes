import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

export interface AppInitialData {
  account: AccountData;
  notification?: FirebaseMessagingTypes.RemoteMessage;
}

interface AccountData {
  terms?: TermsAgreement;
}

type TermsAgreement = {
  hasAgreedValidTermsOfService: boolean;
  agreedTermsOfServiceVersion: string;
};
