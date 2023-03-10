import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AcknowledgementsScreen} from 'apps/app/screens/acknowledgements/AcknowledgementsScreen';
import {LicenseScreen} from 'apps/app/screens/acknowledgements/LicenseScreen';
import {AppStateScreen} from 'apps/app/screens/demo-app-state/AppStateScreen';
import {AuthenticationScreen} from 'apps/app/screens/demo-authentication/AuthenticationScreen';
import {ButtonScreen} from 'apps/app/screens/demo-button/ButtonScreen';
import {CacheScreen} from 'apps/app/screens/demo-cache/CacheScreen';
import {ConfigScreen} from 'apps/app/screens/demo-config/ConfigScreen';
import {ErrorCaseScreen} from 'apps/app/screens/demo-error/ErrorCaseScreen';
import {ErrorInEventHandlerScreen} from 'apps/app/screens/demo-error/ErrorInEventHandlerScreen';
import {ErrorInNativeModuleScreen} from 'apps/app/screens/demo-error/ErrorInNativeModuleScreen';
import {ErrorInReactComponentScreen} from 'apps/app/screens/demo-error/ErrorInReactComponentScreen';
import {ErrorInUseEffectAsyncProcessScreen} from 'apps/app/screens/demo-error/ErrorInUseEffectAsyncProcessScreen';
import {ErrorInUseEffectScreen} from 'apps/app/screens/demo-error/ErrorInUseEffectScreen';
import {ErrorInUseEffectSyncProcessScreen} from 'apps/app/screens/demo-error/ErrorInUseEffectSyncProcessScreen';
import {HttpApiScreen} from 'apps/app/screens/demo-http-api/HttpApiScreen';
import {AppInfoScreen} from 'apps/app/screens/demo-info/AppInfoScreen';
import {InstructionsScreen} from 'apps/app/screens/demo-instructions/InstructionsScreen';
import {LocalAuthenticationScreen} from 'apps/app/screens/demo-local-authn/LocalAuthenticationScreen';
import {LogScreen} from 'apps/app/screens/demo-log/LogScreen';
import {DemoMenuScreen} from 'apps/app/screens/demo-menu/DemoMenuScreen';
import {MessageScreen} from 'apps/app/screens/demo-message/MessageScreen';
import {NavigationScreen} from 'apps/app/screens/demo-navigation/NavigationScreen';
import {PickerScreen} from 'apps/app/screens/demo-picker/PickerScreen';
import {PushNotificationScreen} from 'apps/app/screens/demo-push-notification/PushNotificationScreen';
import {QRCodeScreen} from 'apps/app/screens/demo-qrcode/QRCodeScreen';
import {CreateTodoDemoScreen} from 'apps/app/screens/demo-react-query/CreateTodoDemoScreen';
import {DependentQueryDemo1Screen} from 'apps/app/screens/demo-react-query/DependentQueryDemo1Screen';
import {DependentQueryDemo2Screen} from 'apps/app/screens/demo-react-query/DependentQueryDemo2Screen';
import {DependentQueryDemo3Screen} from 'apps/app/screens/demo-react-query/DependentQueryDemo3Screen';
import {DisableErrorHandlerDemoScreen} from 'apps/app/screens/demo-react-query/DisableErrorHandlerDemoScreen';
import {DisabledQueryDemoScreen} from 'apps/app/screens/demo-react-query/DisabledQueryDemoScreen';
import {EditTodoDemoScreen} from 'apps/app/screens/demo-react-query/EditTodoDemoScreen';
import {GetAccountsMeDemoScreen} from 'apps/app/screens/demo-react-query/GetAccountsMeDemoScreen';
import {ListTodoDemoScreen} from 'apps/app/screens/demo-react-query/ListTodoDemoScreen';
import {ReactQueryDemoScreen} from 'apps/app/screens/demo-react-query/ReactQueryDemoScreen';
import {SearchBarTodoDemoScreen} from 'apps/app/screens/demo-react-query/SearchBarTodoDemoScreen';
import {SearchFormTodoDemoScreen} from 'apps/app/screens/demo-react-query/SearchFormTodoDemoScreen';
import {SnackbarScreen} from 'apps/app/screens/demo-snackbar/SnackbarScreen';
import React from 'react';

import {DemoStackParamList} from './types';
import {useCloseThisNavigatorButton} from './useCloseThisNavigatorButton';

const nav = createNativeStackNavigator<DemoStackParamList>();

export const DemoStackNav: React.FC = () => {
  const {CloseThisNavigatorButton} = useCloseThisNavigatorButton();

  return (
    <nav.Navigator
      initialRouteName="DemoMenu"
      screenOptions={{
        headerRight: CloseThisNavigatorButton,
      }}>
      <nav.Screen
        name="AppInfo"
        component={AppInfoScreen}
        options={{
          title: 'Application Information',
        }}
      />
      <nav.Screen name="AppState" component={AppStateScreen} options={{title: 'Track AppState'}} />
      <nav.Screen
        name="Config"
        component={ConfigScreen}
        options={{
          title: 'Configuration',
        }}
      />
      <nav.Screen
        name="DemoMenu"
        component={DemoMenuScreen}
        options={{
          title: 'Demo Screens',
        }}
      />
      <nav.Screen name="ErrorCase" component={ErrorCaseScreen} />
      <nav.Screen name="ErrorInEventHandler" component={ErrorInEventHandlerScreen} />
      <nav.Screen name="ErrorInNativeModule" component={ErrorInNativeModuleScreen} />
      <nav.Screen name="ErrorInReactComponent" component={ErrorInReactComponentScreen} />
      <nav.Screen name="ErrorInUseEffectAsyncProcess" component={ErrorInUseEffectAsyncProcessScreen} />
      <nav.Screen name="ErrorInUseEffect" component={ErrorInUseEffectScreen} />
      <nav.Screen name="ErrorInUseEffectSyncProcess" component={ErrorInUseEffectSyncProcessScreen} />
      <nav.Screen name="Instructions" component={InstructionsScreen} />
      <nav.Screen
        name="Log"
        component={LogScreen}
        options={{
          title: 'Log',
        }}
      />
      <nav.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: 'Message',
        }}
      />
      <nav.Screen
        name="Button"
        component={ButtonScreen}
        options={{
          title: 'Button',
          presentation: 'formSheet' as const,
        }}
      />
      <nav.Screen
        name="Snackbar"
        component={SnackbarScreen}
        options={{
          title: 'Message',
          presentation: 'formSheet' as const,
        }}
      />
      <nav.Screen name="LocalAuthentication" component={LocalAuthenticationScreen} />
      <nav.Screen name="Authentication" component={AuthenticationScreen} />
      <nav.Screen name="HttpApi" component={HttpApiScreen} />
      <nav.Screen name="Navigation" component={NavigationScreen} />
      <nav.Screen name="PushNotification" component={PushNotificationScreen} />
      <nav.Screen name="Cache" component={CacheScreen} />
      <nav.Screen name="ListTodoDemo" component={ListTodoDemoScreen} />
      <nav.Screen name="CreateTodoDemo" component={CreateTodoDemoScreen} />
      <nav.Screen name="EditTodoDemo" component={EditTodoDemoScreen} />
      <nav.Screen name="ReactQueryDemo" component={ReactQueryDemoScreen} />
      <nav.Screen name="DisabledQueryDemo" component={DisabledQueryDemoScreen} />
      <nav.Screen name="DependentQueryDemo1" component={DependentQueryDemo1Screen} />
      <nav.Screen name="DependentQueryDemo2" component={DependentQueryDemo2Screen} />
      <nav.Screen name="DependentQueryDemo3" component={DependentQueryDemo3Screen} />
      <nav.Screen name="DisableErrorHandlerDemo" component={DisableErrorHandlerDemoScreen} />
      <nav.Screen name="GetAccountsMeDemo" component={GetAccountsMeDemoScreen} />
      <nav.Screen name="SearchFormTodoDemo" component={SearchFormTodoDemoScreen} />
      <nav.Screen name="SearchBarTodoDemo" component={SearchBarTodoDemoScreen} />
      <nav.Screen name="Picker" component={PickerScreen} />
      <nav.Screen name="QRCode" component={QRCodeScreen} />
      <nav.Screen
        name="Acknowledgements"
        component={AcknowledgementsScreen}
        options={{
          title: 'Acknowledgements',
          contentStyle: {
            backgroundColor: 'rgb(250,250,250)',
          },
        }}
      />
      <nav.Screen
        name="License"
        component={LicenseScreen}
        options={{
          title: 'Acknowledgements',
          contentStyle: {
            backgroundColor: 'rgb(250,250,250)',
          },
        }}
      />
    </nav.Navigator>
  );
};
