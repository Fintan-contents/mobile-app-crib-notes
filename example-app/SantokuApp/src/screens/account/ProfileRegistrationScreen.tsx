import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FilledButton} from 'components/button';
import {TextInput} from 'components/input';
import {Spacer} from 'components/spacer/Spacer';
import {useFormik} from 'formik';
import {m} from 'framework/message';
import {RootStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {profileFormInitialValues, profileFormValidationSchema} from './data-types';
import {useProfileRegistrationUseCase} from './usecases';

const ScreenName = 'ProfileRegistration';

const Screen: React.FC<NativeStackScreenProps<RootStackParamList, typeof ScreenName>> = ({route}) => {
  const form = useFormik({
    initialValues: profileFormInitialValues,
    validationSchema: profileFormValidationSchema,
    validateOnChange: false,
    onSubmit: () => {},
  });

  const {clearNickname, signup, isExecutingSignup} = useProfileRegistrationUseCase(form, route.params);

  return (
    <View style={styles.container} testID="ProfileRegistration">
      <TextInput
        label={m('ニックネーム')}
        value={form.values.nickname}
        onChangeText={form.handleChange('nickname')}
        showClearButton={!!form.values.nickname}
        onClearButtonPress={clearNickname}
        errorMessage={form.errors.nickname}
      />
      <Spacer heightRatio={0.05} />
      <FilledButton title={m('登録')} onPress={signup} loading={isExecutingSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});

export const ProfileRegistrationScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    title: m('プロフィール登録'),
    animation: 'slide_from_bottom',
  },
};
