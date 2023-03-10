import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {log} from 'bases/logging';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import {QRCode} from 'bases/ui/qrcode/QRCode';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import React, {useCallback, useMemo, useState} from 'react';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {formInitialValues, useQRCodeForm} from '../forms/useQRCodeForm';
import {ErrorCorrectionLevelType} from '../types/errorCorrectionLevel';

const errorCorrectionLevelItems: Item<ErrorCorrectionLevelType>[] = [
  {value: 'L', label: 'L'},
  {value: 'M', label: 'M'},
  {value: 'Q', label: 'Q'},
  {value: 'H', label: 'H'},
];

const initialSize = Number(formInitialValues.size);
export const QRCodePage: React.FC = () => {
  const frame = useSafeAreaFrame();
  const maxSize = useMemo(() => Math.trunc(frame.width) - 32, [frame.width]);

  const {form, setFormSize} = useQRCodeForm(maxSize);

  const [size, setSize] = useState(initialSize);

  // form.handleChange('size')で実施すると、バリデーションに成功した場合のみQRCodeに入力サイズを設定することができない
  // const size = useMemo(() => {
  //   if (!form.isValidating && !form.errors.size) {
  //     // バリデーション実施前に入力された値がformに保持されてしまうため、NaNやmaxSizeを超えた値が返却される場合がある
  //     return Number(form.values.size);
  //   } else {
  //     // バリデーション前の値を返却
  //   }
  // }, [form.errors.size, form.isValidating, form.values.size]);
  // そのため、自身でformの値の設定とバリデーションを実施して、バリデーションに成功した場合のみQRCodeに入力サイズを設定する
  const setSizeAndValidate = useCallback(
    async (value: string) => {
      const errors = await setFormSize(value);
      if (!errors?.size) {
        setSize(Number(value));
      }
    },
    [setFormSize],
  );

  const onSelectedErrorCorrectionLevelChange = useCallback(
    (selectedItem?: Item<ErrorCorrectionLevelType>) =>
      form.setFieldValue('errorCorrectionLevel', selectedItem?.value ?? formInitialValues.errorCorrectionLevel),
    [form],
  );

  return (
    <Box flex={1} p="p16">
      <StyledScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>
        <StyledSafeAreaView>
          <SpecAndSourceCodeLink feature="qrcode" />
          <Text>
            {`
モデル2のQRコードを生成し、表示します。
エンコーディングモードやシンボルバージョン、マスキングパターンは設定するデータや誤り訂正レベルに応じて自動計算します。
        `}
          </Text>
          <StyledSpace height="p32" />
          <StyledColumn space="p16">
            <StyledColumn space="p4">
              <Text>QRコードに設定するデータ:</Text>
              <StyledTextInput
                value={form.values.data}
                borderBottomWidth={1}
                onChangeText={form.handleChange('data')}
                errorMessage={form.errors.data}
                placeholder="値を入力してください"
              />
            </StyledColumn>
            <StyledColumn space="p4">
              <Text>誤り訂正レベル:</Text>
              <SelectPicker
                selectedItemKey={form.values.errorCorrectionLevel}
                items={errorCorrectionLevelItems}
                onSelectedItemChange={onSelectedErrorCorrectionLevelChange}
                textInputComponent={
                  <StyledTextInput value={form.values.errorCorrectionLevel} borderBottomWidth={1} editable={false} />
                }
              />
            </StyledColumn>
            <StyledColumn space="p4">
              <Text>サイズ:</Text>
              <StyledTextInput
                value={form.values.size}
                keyboardType="numeric"
                borderBottomWidth={1}
                onChangeText={setSizeAndValidate}
                errorMessage={form.errors.size}
                placeholder="サイズを入力してください"
              />
            </StyledColumn>
          </StyledColumn>
          <StyledSpace height="p48" />
          {form.values.data && (
            <Box alignSelf="center">
              <QRCode
                value={form.values.data}
                ecl={form.values.errorCorrectionLevel}
                size={size}
                onError={(e: unknown) =>
                  log.error(new ApplicationError('Failed to generate qrcode.', e), 'QRCodeError')
                }
              />
            </Box>
          )}
        </StyledSafeAreaView>
      </StyledScrollView>
    </Box>
  );
};
