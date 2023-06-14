import React from 'react';
import {Marker as RNMMarker, MapMarkerProps as RNMapMarkerProps} from 'react-native-maps';

// iOSでGoogle Mapのみで指定できるProps（tappable, tracksInfoWindowChanges）を削除する
export type MarkerProps = Omit<RNMapMarkerProps, 'tappable' | 'tracksInfoWindowChanges'>;

export const Marker: React.FC<MarkerProps> = (props: MarkerProps) => {
  return <RNMMarker {...props} />;
};
