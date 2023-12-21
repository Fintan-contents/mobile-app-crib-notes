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

import {Button, ButtonProps} from 'bases/ui/button/Button';
import {TextInput, TextInputProps} from 'bases/ui/input/TextInput';
import {MapView, MapViewRef} from 'bases/ui/map/MapView';
import {Marker, MarkerProps} from 'bases/ui/map/Marker';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import React, {PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Dimensions, Platform, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {MapType, Region} from 'react-native-maps';

import {defaultMapTypeItem, MapTypePicker} from '../components/MapTypePicker';
import {ToggleButton, ToggleButtonProps} from '../components/ToggleButton';
import {initialMarker} from '../constants/initialMarker';
import {initialRegion} from '../constants/initialRegion';
import {MarkerFormKeys, MarkerFormValues, useMarkerForm} from '../form/useMarkerForm';
import {RegionFormKeys, RegionFormValues, useRegionForm} from '../form/useRegionForm';

const regionFormFields: {formKey: RegionFormKeys; description: string}[] = [
  {formKey: 'latitude', description: '緯度'},
  {formKey: 'longitude', description: '経度'},
  {formKey: 'latitudeDelta', description: '緯度範囲（縦幅）'},
  {formKey: 'longitudeDelta', description: '経度範囲（横幅）'},
];

const markerFormCoordinate: {formKey: Extract<MarkerFormKeys, 'latitude' | 'longitude'>; description: string}[] = [
  {formKey: 'latitude', description: '緯度'},
  {formKey: 'longitude', description: '経度'},
];

const numberKeyboard = Platform.select({
  ios: 'numbers-and-punctuation',
  android: 'number-pad',
} as const);

export const DemoMapPage: React.FC = () => {
  const [defaultMarker, setDefaultMarker] = useState<MarkerProps>(initialMarker);
  const [formSubmittedMarker, setFormSubmittedMarker] = useState<MarkerProps>();

  const [region, setRegion] = useState<Region>(initialRegion);

  const [mapType, setMapType] = useState<MapType>(defaultMapTypeItem.value);
  const [showBuildings, setShowBuildings] = useState<boolean>(true);
  const markerList = useMemo(
    () => (formSubmittedMarker ? [defaultMarker, formSubmittedMarker] : [defaultMarker]),
    [defaultMarker, formSubmittedMarker],
  );

  const onSubmit = useCallback(
    (values: RegionFormValues) => {
      const latitude = Number(values.latitude);
      const longitude = Number(values.longitude);
      const latitudeDelta = Number(values.latitudeDelta);
      const longitudeDelta = Number(values.longitudeDelta);
      setRegion({latitude, longitude, latitudeDelta, longitudeDelta});
      setDefaultMarker({coordinate: {latitude, longitude}});
    },
    [setRegion],
  );
  const {form} = useRegionForm({
    initialValues: {
      latitude: initialRegion.latitude.toString(),
      longitude: initialRegion.longitude.toString(),
      latitudeDelta: initialRegion.latitudeDelta.toString(),
      longitudeDelta: initialRegion.longitudeDelta.toString(),
    },
    onSubmit,
  });
  const onMarkerFormSubmit = useCallback((values: MarkerFormValues) => {
    // 緯度と経度が入力されていた場合のみマーカーを追加し、そうでない場合はマーカーをクリアする
    if (values.latitude && values.longitude) {
      const marker = {
        coordinate: {
          latitude: Number(values.latitude),
          longitude: Number(values.longitude),
        },
        title: values.title,
        description: values.description,
        draggable: values.draggable,
      };
      setFormSubmittedMarker(marker);
    } else {
      setFormSubmittedMarker(undefined);
    }
  }, []);
  const {form: markerForm, setMarkerFormDraggable} = useMarkerForm({onSubmit: onMarkerFormSubmit});

  const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);
  const [zoomEnabled, setZoomEnabled] = useState<boolean>(true);
  const [rotateEnabled, setRotateEnabled] = useState<boolean>(true);
  const [pitchEnabled, setPitchEnabled] = useState<boolean>(true);

  const mapViewRef = useRef<MapViewRef>(null);

  useEffect(() => {
    mapViewRef.current?.animateToRegion(region);
  }, [region]);

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text>地図を表示します。オプションを変更し、表示や操作を確認できます。</Text>
        <View style={styles.mapContainer}>
          <MapView
            ref={mapViewRef}
            initialRegion={initialRegion}
            // initialRegionは初期レンダリングのみ参照されるので
            // デモ画面から他のPropsを変更しても地図に表示される場所が変わらない。
            // 一方でregionに位置情報を渡しておくとレンダリングのたびに参照される。
            mapType={mapType}
            showsBuildings={showBuildings}
            scrollEnabled={scrollEnabled}
            zoomEnabled={zoomEnabled}
            rotateEnabled={rotateEnabled}
            pitchEnabled={pitchEnabled}
            style={styles.map}>
            {markerList.map((item, index) => (
              <Marker key={index} {...item} />
            ))}
          </MapView>
        </View>
        <ScrollView
          scrollToOverflowEnabled={false}
          alwaysBounceVertical={false}
          automaticallyAdjustsScrollIndicatorInsets={false}
          automaticallyAdjustContentInsets={false}>
          <View style={styles.flexContainer}>
            <SpecAndSourceCodeLink feature="map" />
            <SectionBox title="表示領域の変更" description="表示領域を変更できます。">
              {regionFormFields.map(({formKey, description}, index) => (
                <FormTextInput
                  key={`region-field-${index}`}
                  title={formKey}
                  description={description}
                  value={form.values[formKey]}
                  onChangeText={form.handleChange(formKey)}
                  errorMessage={form.errors[formKey]}
                  keyboardType={numberKeyboard}
                />
              ))}
              <FormButton title="更新する" onPress={form.submitForm} />
            </SectionBox>
          </View>
          <SectionBox title="地図の種類選択" description="地図の見た目を変更できます。">
            <FieldBox title="MapType" description="マップタイプ">
              <MapTypePicker mapType={mapType} setMapType={setMapType} />
            </FieldBox>
            <FormToggleButton
              title="showBuilding"
              description="建物の輪郭を表示"
              isPressed={showBuildings}
              setIsPressed={setShowBuildings}
            />
            <Text style={styles.notice}>建物の輪郭表示の切り替えが確認できたのは、iOSのバージョン15以下だけです。</Text>
          </SectionBox>
          <SectionBox
            title="画面操作の制限"
            description="以下のトグルスイッチをOFFにすると画面操作を制限することができます。">
            <FormToggleButton
              title="scrollEnabled"
              description="スクロールを許可"
              isPressed={scrollEnabled}
              setIsPressed={setScrollEnabled}
            />
            <FormToggleButton
              title="zoomEnabled"
              description="拡大縮小を許可"
              isPressed={zoomEnabled}
              setIsPressed={setZoomEnabled}
            />
            <FormToggleButton
              title="rotateEnabled"
              description="回転を許可"
              isPressed={rotateEnabled}
              setIsPressed={setRotateEnabled}
            />
            <FormToggleButton
              title="pitchEnabled"
              description="視点の角度変更を許可"
              isPressed={pitchEnabled}
              setIsPressed={setPitchEnabled}
            />
          </SectionBox>
          <SectionBox title="マーカーの追加" description="マーカーを追加できます。">
            {markerFormCoordinate.map(({formKey, description}, index) => (
              <FormTextInput
                key={`marker-coordinate-field-${index}`}
                title={formKey}
                description={description}
                value={markerForm.values[formKey]}
                onChangeText={markerForm.handleChange(formKey)}
                errorMessage={markerForm.errors[formKey]}
                keyboardType={numberKeyboard}
              />
            ))}
            <FormTextInput
              title="title"
              description="タイトル"
              value={markerForm.values.title}
              onChangeText={markerForm.handleChange('title')}
            />
            <FormTextInput
              title="description"
              description="説明"
              value={markerForm.values.description}
              onChangeText={markerForm.handleChange('description')}
            />
            <FormToggleButton
              title="draggable"
              description="ドラッグを許可"
              isPressed={markerForm.values.draggable}
              setIsPressed={setMarkerFormDraggable}
            />
            <FormButton title="更新する" onPress={markerForm.submitForm} />
          </SectionBox>
        </ScrollView>
      </View>
    </View>
  );
};

type SectionBoxProps = {
  title: string;
  description: string;
};
const SectionBox: React.FC<PropsWithChildren<SectionBoxProps>> = ({title, description, children}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text h4>{title}</Text>
      <Text>{description}</Text>
      <View>{children}</View>
    </View>
  );
};

type FieldBoxProps = {
  title: string;
  description: string;
  fieldStyles?: StyleProp<ViewStyle>;
};
const FieldBox: React.FC<PropsWithChildren<FieldBoxProps>> = ({title, description, fieldStyles, children}) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.flexContainer}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={StyleSheet.flatten([styles.flexContainer, fieldStyles])}>{children}</View>
    </View>
  );
};

type FormTextInputProps = Omit<FieldBoxProps, 'fieldStyles'> &
  Pick<TextInputProps, 'value' | 'onChangeText' | 'errorMessage' | 'keyboardType'>;
const FormTextInput: React.FC<FormTextInputProps> = ({
  title,
  description,
  value,
  onChangeText,
  errorMessage,
  keyboardType,
}) => {
  return (
    <FieldBox title={title} description={description}>
      <TextInput value={value} onChangeText={onChangeText} errorMessage={errorMessage} keyboardType={keyboardType} />
    </FieldBox>
  );
};

type FormToggleButtonProps = Omit<FieldBoxProps, 'fieldStyles'> & ToggleButtonProps;
const FormToggleButton: React.FC<FormToggleButtonProps> = ({title, description, isPressed, setIsPressed}) => {
  return (
    <FieldBox title={title} description={description} fieldStyles={styles.toggleConfigContainer}>
      <ToggleButton isPressed={isPressed} setIsPressed={setIsPressed} />
    </FieldBox>
  );
};

type FormButtonProps = Pick<ButtonProps, 'title' | 'onPress'>;
const FormButton: React.FC<FormButtonProps> = ({title, onPress}) => {
  return (
    <View style={styles.button}>
      <Button title={title} onPress={onPress} size="middle" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  mapContainer: {
    height: Dimensions.get('screen').height * 0.25,
    paddingVertical: 10,
  },
  map: {
    height: '100%',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    columnGap: 10,
    rowGap: 10,
    paddingVertical: 20,
  },
  toggleConfigContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  notice: {color: 'red'},
});
