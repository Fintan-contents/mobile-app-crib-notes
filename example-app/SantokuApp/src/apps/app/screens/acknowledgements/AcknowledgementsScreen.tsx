import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import {AcknowledgementsPage} from 'features/acknowledgements/pages/AcknowledgementsPage';
import {ThirdPartyDependency} from 'features/acknowledgements/types/ThirdPartyDependency';
import React, {useCallback} from 'react';

export const AcknowledgementsScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'Acknowledgements'>> = ({
  navigation,
}) => {
  const navigateToLicense = useCallback(
    (dependency: ThirdPartyDependency) => navigation.navigate('License', {dependency}),
    [navigation],
  );
  return <AcknowledgementsPage navigateToLicense={navigateToLicense} />;
};
