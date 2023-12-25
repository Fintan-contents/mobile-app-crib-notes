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

import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTheme} from '@shopify/restyle';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import {m} from 'bases/message/Message';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {GoBackIllustration} from 'bases/ui/illustration/GoBackIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React, {useMemo} from 'react';

import {useMainTabNav} from './MainTabNav';
import {QuestionAndEventPostStackNav} from './QuestionAndEventPostStackNav';
import {AuthenticatedStackParamList} from './types';
import {withInitialData} from '../components/withInitialData';
import {QuestionDetailScreen} from '../screens/qa-question/QuestionDetailScreen';

const nav = createNativeStackNavigator<AuthenticatedStackParamList>();

const getInitialRouteName = (initialData: AppInitialData): keyof AuthenticatedStackParamList => {
  return 'MainTabNav';
};

type Props = {
  initialData: AppInitialData;
};
const Component: React.FC<Props> = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const mainTabNav = useMainTabNav(initialData);
  const theme = useTheme<RestyleTheme>();

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen
        name="MainTabNav"
        component={mainTabNav}
        options={{
          headerShown: false,
        }}
      />
      <nav.Screen
        component={QuestionDetailScreen}
        name="QuestionDetail"
        options={({navigation}: {navigation: NativeStackNavigationProp<AuthenticatedStackParamList>}) => ({
          title: '',
          headerStyle: {backgroundColor: theme.colors.orange1},
          contentStyle: {backgroundColor: theme.colors.orange2},
          headerBackTitleVisible: false,
          headerLeft: () => (
            <>
              <StyledColumn>
                <StyledSpace height="p4" />
                <StyledTouchableOpacity onPress={navigation.goBack}>
                  <GoBackIllustration />
                </StyledTouchableOpacity>
              </StyledColumn>
              <StyledSpace width="p32" />
              <Text color="white" fontSize={20} fontWeight="500">
                {m('質問詳細')}
              </Text>
            </>
          ),
        })}
      />
      <nav.Screen
        name="QuestionAndEventStackNav"
        component={QuestionAndEventPostStackNav}
        /*
         presentationに「modal」「transparentModal」「containedModal」「containedTransparentModal」「formSheet」を指定した場合は、
         端末の向きを変更（横画面⇔縦画面）しても画面の向きが変わらない場合があります。
         【発生環境】
           OS: iOS13〜15
           ※ iOS16では端末の向き変更に画面が追従することを確認しています
           ※ iOS13未満は動作検証していません
         【回避方法１】
            presentationに「card」「fullScreenModal」を指定した場合は、端末の向きを変更すると画面の向きも変わります。（ただし、画面レイアウトも変わります）
         【回避方法２】
           Native StackではなくStackのcardStyleInterpolatorにCardStyleInterpolator.forModalPresentationIOSを使用することで、
           Native Stackのmodalと同様のレイアウトで端末の向き変更にも対応したナビゲーションを実現可能です。
        */
        options={{presentation: 'modal', headerShown: false}}
      />
    </nav.Navigator>
  );
};

export const useAuthenticatedStackNav = (initialData: AppInitialData) => {
  return useMemo(() => withInitialData(initialData, Component), [initialData]);
};
