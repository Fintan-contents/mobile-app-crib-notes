import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {log} from 'bases/logging';
import {Barcode, BarcodeProps, CODE_SET_CHARACTERS, Format, START_CHARACTERS} from 'bases/ui/barcode/Barcode';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {AddIllustration} from 'bases/ui/illustration/AddIllustration';
import {RemoveIllustration} from 'bases/ui/illustration/RemoveIllustration';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import React, {useCallback, useMemo, useState} from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {CODE128DataSet, formInitialValues, useBarcodeForm} from '../forms/useBarcodeForm';
import {BarcodeCharacter} from '../types/BarcodeCharacter';

const formatItems: Item<Format>[] = [
  {value: 'CODE128', label: 'CODE128'},
  {value: 'CODE128AUTO', label: 'CODE128AUTO'},
];

const characterSet: Item<BarcodeCharacter>[] = [
  {value: 'CODE-A', label: 'CODE-A'},
  {value: 'CODE-B', label: 'CODE-B'},
  {value: 'CODE-C', label: 'CODE-C'},
];

const initialLineWidth = Number(formInitialValues.lineWidth);
const initialCode128Value = `${START_CHARACTERS[formInitialValues.code128Data[0].character]}${
  formInitialValues.code128Data[0].value
}`;
const initialCode128Text = formInitialValues.code128Data[0].value;
const initialCode128AutoValue = formInitialValues.code128AutoData;
const initialCode128AutoText = formInitialValues.code128AutoData;

const onError = (e: unknown) => log.error(new ApplicationError('Failed to generate barcode.', e, 'BarcodeError'));
export const BarcodePage: React.FC = () => {
  const frame = useSafeAreaFrame();
  // 画面幅 - Boxのpadding - バーコードに指定するquietZone * 2
  const maxWidth = useMemo(() => Math.trunc(frame.width) - 32 - 10 * 2, [frame.width]);
  const {
    form,
    setFormLineWidth,
    setFormCode128Character,
    setFormCode128Value,
    setFormCode128AutoData,
    addCode128DataField,
    removeCode128DataField,
  } = useBarcodeForm();
  const [lineWidth, setLineWidth] = useState(initialLineWidth);
  const [code128Value, setCode128Value] = useState(initialCode128Value);
  const [code128Text, setCode128Text] = useState(initialCode128Text);
  const [code128AutoValue, setCode128AutoValue] = useState(initialCode128AutoValue);
  const [code128AutoText, setCode128AutoText] = useState(initialCode128AutoText);

  const onSelectedFormatChange = useCallback(
    (selectedItem?: Item<Format>) => form.setFieldValue('format', selectedItem?.value),
    [form],
  );

  const setLineWidthAndValidate = useCallback(
    async (value: string) => {
      const errors = await setFormLineWidth(value);
      if (!errors?.lineWidth) {
        setLineWidth(Number(value));
      }
    },
    [setFormLineWidth],
  );

  const setCode128Data = useCallback((code128Data: CODE128DataSet[]) => {
    const value = code128Data
      .map((d, index) =>
        d.value
          ? `${index === 0 ? START_CHARACTERS[d.character] : CODE_SET_CHARACTERS[d.character]}${d.value}`
          : undefined,
      )
      .join('');
    const text = code128Data.map(d => d.value).join('');
    setCode128Value(value);
    setCode128Text(text);
  }, []);

  const setCode128AutoData = useCallback((code128AutoData: string) => {
    setCode128AutoValue(code128AutoData);
    setCode128AutoText(code128AutoData);
  }, []);

  return (
    <Box flex={1} p="p16">
      <StyledScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>
        <StyledSafeAreaView>
          <SpecAndSourceCodeLink feature="barcode" />
          <Text>CODE128のバーコードを生成し、表示します。</Text>
          <StyledSpace height="p32" />
          <StyledColumn space="p16">
            <StyledColumn space="p4">
              <Text>フォーマット:</Text>
              <SelectPicker
                selectedItemKey={form.values.format}
                items={formatItems}
                onSelectedItemChange={onSelectedFormatChange}
                textInputComponent={
                  <StyledTextInput value={form.values.format} borderBottomWidth={1} editable={false} />
                }
              />
            </StyledColumn>
            <StyledColumn space="p4">
              <Text>バーコードに設定するデータ:</Text>
              <BarcodeDataInput
                form={form}
                setFormCode128Character={setFormCode128Character}
                setFormCode128Value={setFormCode128Value}
                setFormCode128AutoData={setFormCode128AutoData}
                addCode128DataField={addCode128DataField}
                removeCode128DataField={removeCode128DataField}
                // onValidCode128Data, onValidCode128AutoData: Formik のバリデーションが非同期であり、 form.values, form.errors を使ってのバーコード更新ができないため、以下のmethodの返り値からバリデーション結果を使って更新している。
                // 対象method: setFormCode128Character, setFormCode128Value, setFormCode128AutoData, removeCode128DataField
                // ※ form.isValidating は非同期バリデーションに対応しておらず、不正な値が入力されている状態でも form.isValidating: false, form.errors[key]: undefined の瞬間が存在するので使用できない
                // 関連 Issue: https://github.com/jaredpalmer/formik/issues/2405
                onValidCode128Data={setCode128Data}
                onValidCode128AutoData={setCode128AutoData}
              />
            </StyledColumn>
            <StyledColumn space="p4">
              <Text>{`ライン幅:
（表示領域を超える場合は自動的に小さくします）`}</Text>
              <StyledTextInput
                value={form.values.lineWidth}
                keyboardType="numeric"
                borderBottomWidth={1}
                onChangeText={setLineWidthAndValidate}
                errorMessage={form.errors.lineWidth}
                placeholder="ライン幅を入力してください"
              />
            </StyledColumn>
          </StyledColumn>
          <StyledSpace height="p48" />
          <Box alignSelf="center">
            <Code128Barcode
              value={form.values.format === 'CODE128' ? code128Value : code128AutoValue}
              text={form.values.format === 'CODE128' ? code128Text : code128AutoText}
              format={form.values.format}
              lineWidth={lineWidth}
              maxWidth={maxWidth}
              quietZone={10}
              onError={onError}
            />
          </Box>
        </StyledSafeAreaView>
      </StyledScrollView>
    </Box>
  );
};

const BarcodeDataInput: React.FC<
  Omit<ReturnType<typeof useBarcodeForm>, 'setFormLineWidth'> & {
    onValidCode128Data: (value: CODE128DataSet[]) => void;
    onValidCode128AutoData: (value: string) => void;
  }
> = props => {
  return props.form.values.format === 'CODE128AUTO' ? (
    <Code128AutoDataInput {...props} />
  ) : (
    <Code128DataInput {...props} />
  );
};
const Code128AutoDataInput: React.FC<
  Pick<ReturnType<typeof useBarcodeForm>, 'form' | 'setFormCode128AutoData'> & {
    onValidCode128AutoData: (value: string) => void;
  }
> = ({form, setFormCode128AutoData, onValidCode128AutoData}) => {
  const setCode128AutoDataAndValidate = useCallback(
    async (value: string) => {
      const errors = await setFormCode128AutoData(value);
      if (!errors?.code128AutoData) {
        onValidCode128AutoData(value);
      }
    },
    [onValidCode128AutoData, setFormCode128AutoData],
  );

  return (
    <StyledTextInput
      value={form.values.code128AutoData}
      borderBottomWidth={1}
      onChangeText={setCode128AutoDataAndValidate}
      errorMessage={form.errors.code128AutoData}
      placeholder="値を入力してください"
    />
  );
};

const Code128DataInput: React.FC<
  Omit<ReturnType<typeof useBarcodeForm>, 'setFormLineWidth' | 'setFormCode128AutoData'> & {
    onValidCode128Data: (value: CODE128DataSet[]) => void;
  }
> = ({
  form,
  setFormCode128Value,
  setFormCode128Character,
  addCode128DataField,
  removeCode128DataField,
  onValidCode128Data,
}) => {
  return (
    <StyledColumn space="p16">
      {form.values.code128Data.map((d, index) => {
        const onSelectedCharacterSetChange = async (selectedItem?: Item<BarcodeCharacter>) => {
          const character = selectedItem?.value ?? formInitialValues.code128Data[0].character;
          const errors = await setFormCode128Character(character, index);
          if (!errors?.code128Data) {
            const newData = {character, value: d.value};
            const code128Data = [...form.values.code128Data];
            code128Data.splice(index, 1, newData);
            onValidCode128Data(code128Data);
          }
        };
        const setCode128ValueAndValidate = async (value: string) => {
          const errors = await setFormCode128Value(value, index);
          if (!errors?.code128Data) {
            const newData = {character: d.character, value};
            const code128Data = [...form.values.code128Data];
            code128Data.splice(index, 1, newData);
            onValidCode128Data(code128Data);
          }
        };

        const code128DataError = [
          form.getFieldMeta(`code128Data[${index}].character`).error,
          form.getFieldMeta(`code128Data[${index}].value`).error,
        ];

        return (
          <StyledRow key={`barcode-data-${index}`} space="p8">
            <StyledColumn flex={4}>
              <StyledRow space="p8">
                <Box>
                  <SelectPicker
                    selectedItemKey={d.character}
                    items={characterSet}
                    onSelectedItemChange={onSelectedCharacterSetChange}
                    textInputComponent={<StyledTextInput value={d.character} borderBottomWidth={1} editable={false} />}
                  />
                </Box>
                <Box flex={1}>
                  <StyledTextInput
                    value={d.value}
                    borderBottomWidth={1}
                    onChangeText={setCode128ValueAndValidate}
                    placeholder="値を入力してください"
                  />
                </Box>
              </StyledRow>
              {code128DataError.filter(Boolean).map((error, index) => (
                <Text key={`code128-data-error-${index}`} color="textRed">
                  ・{error}
                </Text>
              ))}
            </StyledColumn>
            <StyledRow flex={1} space="p8">
              {form.values.code128Data.length > 1 ? (
                <Pressable
                  onPress={async () => {
                    const {values, errors} = await removeCode128DataField(index);
                    if (!errors?.code128Data) {
                      onValidCode128Data(values);
                    }
                  }}>
                  <RemoveIllustration color="textRed" />
                </Pressable>
              ) : (
                <StyledSpace width="p24" />
              )}
              {index === form.values.code128Data.length - 1 ? (
                <Pressable onPress={addCode128DataField}>
                  <AddIllustration color="blue" />
                </Pressable>
              ) : (
                <StyledSpace width="p24" />
              )}
            </StyledRow>
          </StyledRow>
        );
      })}
    </StyledColumn>
  );
};

const Code128Barcode: React.FC<BarcodeProps> = props => {
  return props.value ? <Barcode {...props} /> : null;
};
