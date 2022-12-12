import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';

import {DateTimePickerProps} from './DateTimePicker';
import {DateTimePickerItems, DateTimePickerItemsIOSProps} from './DateTimePickerItems';
import {DefaultPickerAccessory} from './DefaultPickerAccessory';
import {PickerBackdrop} from './PickerBackdrop';
import {PickerContainer} from './PickerContainer';
import {useDateTimePickerIOS} from './useDateTimePickerIOS';

export type DateTimePickerIOSProps = Omit<DateTimePickerProps, 'displayAndroid' | 'pickerItemsProps'> & {
  pickerItemsProps?: Omit<
    DateTimePickerItemsIOSProps,
    'value' | 'onChange' | 'mode' | 'display' | 'maximumDate' | 'minimumDate'
  >;
};

const DEFAULT_DURATION = 300;

/**
 * 日時を表示するPickerとしてReact Native DateTimePickerを使用しています。
 * React Native DateTimePickerは、NativeのUIDatePickerを使用しています。
 * UIDatePickerは、↓に記載されている「Support for Languages and Regions」の設定を追加しないと、OSに設定されている言語・地域に従った表示になりません。
 * https://developer.apple.com/documentation/xcode/adding-support-for-languages-and-regions
 *
 * 言語・地域を追加する大まかな手順は以下になります。
 * - Add Localizations
 *   - Xcodeを開いて、PROJECT -> Info ->LocalizationsにLocalizationを追加
 * - View Localizable Resources
 *   - Xcodeを開いて、左ペインのナビゲータエリアでTargetを選択
 *   - New FileでStrings Fileを「InfoPlist」というファイル名で作成（拡張子の.stringsは自動で付与されます）
 *   - 作成した「InfoPlist」を選択して、右ペインのLocalization -> Localize...をタップ
 *   - 対応するLocalizationを選択
 *
 * 上記を実行すると、「en.lproj」、「ja.lproj」のようなLocalization毎のディレクトリが作成され、それぞれのディレクトリの中にInfoPlist.stringsファイルが作成されます。
 * InfoPlist.stringsの中身は特に何も定義されていない空のファイルですが、UIDatePickerを使用するだけであれば定義の追加は必要ありません。
 *
 * 参考までに、このアプリでLocalizationの対応を実施したPRのリンクを記載します。
 * https://github.com/ws-4020/mobile-app-crib-notes/pull/861
 *
 * 【不具合事項】
 * displayIOSを「inline」に設定すると、一部機種で曜日や時刻が潰れて表示される事象を確認しています。
 * pickerItemsPropsのstyleのheightを大きめに設定することで上記事象は解決可能です。
 */
export const DateTimePicker = (props: DateTimePickerIOSProps) => {
  const {
    isVisible,
    requiredSelectedValue,
    inputValue,
    handleDismiss,
    onValueChange,
    open,
    handleDelete,
    handleCancel,
    handleDone,
  } = useDateTimePickerIOS(props);
  const {
    maximumDate,
    minimumDate,
    mode,
    displayIOS = 'spinner',
    placeholder,
    textInputProps,
    pickerAccessoryComponent,
    pickerItemsComponent,
    textInputComponent,
    pickerItemsContainerProps: {style: pickerItemsContainerStyle, ...pickerItemsContainerProps} = {},
    pickerItemsProps,
    pickerBackdropProps: {
      fadeInDuration = DEFAULT_DURATION,
      fadeOutDuration = DEFAULT_DURATION,
      ...pickerBackdropProps
    } = {},
    pickerContainerProps: {
      style: pickerContainerStyle,
      slideInDuration = DEFAULT_DURATION,
      slideOutDuration = DEFAULT_DURATION,
      ...pickerContainerProps
    } = {},
    pickerAccessoryProps,
  } = props;

  return (
    <>
      <PickerBackdrop
        isVisible={isVisible}
        onPress={handleDismiss}
        fadeInDuration={fadeInDuration}
        fadeOutDuration={fadeOutDuration}
        {...pickerBackdropProps}>
        <PickerContainer
          isVisible={isVisible}
          style={[styles.pickerContainer, pickerContainerStyle]}
          slideInDuration={slideInDuration}
          slideOutDuration={slideOutDuration}
          {...pickerContainerProps}>
          {pickerAccessoryComponent ? (
            pickerAccessoryComponent
          ) : (
            <DefaultPickerAccessory
              onDelete={handleDelete}
              onCancel={handleCancel}
              onDone={handleDone}
              {...pickerAccessoryProps}
            />
          )}
          <View {...pickerItemsContainerProps}>
            {pickerItemsComponent ? (
              pickerItemsComponent
            ) : (
              <DateTimePickerItems
                value={requiredSelectedValue}
                onChange={onValueChange}
                mode={mode}
                display={displayIOS}
                maximumDate={maximumDate}
                minimumDate={minimumDate}
                {...pickerItemsProps}
              />
            )}
          </View>
        </PickerContainer>
      </PickerBackdrop>
      <Pressable onPress={open} testID="pressableContainer">
        <View pointerEvents="box-only">
          {textInputComponent ? (
            textInputComponent
          ) : (
            // テキスト入力とスタイルを合わせるために、TextではなくTextInputを使用する
            <TextInput placeholder={placeholder} value={inputValue} editable={false} {...textInputProps} />
          )}
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: 'white',
  },
});
