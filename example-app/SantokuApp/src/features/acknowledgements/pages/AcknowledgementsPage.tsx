import type {ThirdPartyDependency} from 'features/acknowledgements/types/ThirdPartyDependency';
import React, {useMemo} from 'react';
import {FlatList, ListRenderItem, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

import {DependencyWithAction} from '../types/DependencyWithAction';
import {requireThirdPartyDependenciesWithAction} from '../utils/requireThirdPartyDependenciesWithAction';

/**
 * 要素の高さを固定し、getItemLayoutで各要素の高さとオフセットを返却できるようにしています。
 * そうしないと、各要素をレンダリングしないと高さを計算できず、数百件程度のリストでもスクロール中に引っかかりが発生してしまいます。
 *
 * @see getItemLayout
 * @see styles.listItemTouchable
 */
const ACKNOWLEDGEMENT_ITEM_HEIGHT = 70;

const getItemLayout = (_: unknown, index: number) => ({
  length: ACKNOWLEDGEMENT_ITEM_HEIGHT,
  offset: ACKNOWLEDGEMENT_ITEM_HEIGHT * index,
  index,
});

type AcknowledgementsPageProps = {
  navigateToLicense: (dependency: ThirdPartyDependency) => void;
};

export const keyExtractor = ({id}: DependencyWithAction) => id;

export const AcknowledgementsPage: React.FC<AcknowledgementsPageProps> = ({navigateToLicense}) => {
  const thirdPartyDependenciesWithAction = useMemo(
    () => requireThirdPartyDependenciesWithAction(navigateToLicense),
    [navigateToLicense],
  );
  return (
    <FlatList
      style={styles.container}
      data={thirdPartyDependenciesWithAction}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
    />
  );
};

const renderItem: ListRenderItem<DependencyWithAction> = ({item}) => <ListItem {...item} />;
const ListItem: React.FC<DependencyWithAction> = React.memo(({id, name, version, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listItemTouchable}>
      <View style={styles.listItemContainer}>
        <Text>
          <Text style={styles.dependencyName}>{name ?? id}</Text>
          {version && <Text style={styles.dependencyVersion}> ({version})</Text>}
        </Text>
      </View>
      <View style={styles.listItemRightIconContainer}>
        <Icon name="chevron-right" color="rgba(50,50,50,0.5)" style={styles.listItemRightIcon} />
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemTouchable: {
    height: ACKNOWLEDGEMENT_ITEM_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(50,50,50,0.15)',
  },
  listItemContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  dependencyName: {
    color: 'rgba(50,50,50,1)',
    fontWeight: 'bold',
  },
  dependencyVersion: {
    color: 'rgba(50,50,50,0.5)',
  },
  listItemRightIconContainer: {
    flexShrink: 0,
    justifyContent: 'center',
  },
  listItemRightIcon: {
    width: 30,
  },
});
