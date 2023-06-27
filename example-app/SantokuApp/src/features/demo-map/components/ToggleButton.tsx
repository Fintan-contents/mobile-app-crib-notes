import React from 'react';
import {Switch} from 'react-native';

export type ToggleButtonProps = {
  isPressed: boolean;
  setIsPressed: (isPressed: boolean) => void;
};
export const ToggleButton: React.FC<ToggleButtonProps> = ({isPressed, setIsPressed}) => {
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isPressed ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={setIsPressed}
      value={isPressed}
    />
  );
};
