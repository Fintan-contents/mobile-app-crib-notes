import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {ThirdPartyDependency} from 'generated/ThirdPartyDependencies';
import {DemoStackParamList} from 'navigation/types';
import React, {useMemo} from 'react';
import {FlatList, ListRenderItem, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

/**
 * 要素の高さを固定し、getItemLayoutで各要素の高さとオフセットを返却できるようにしています。
 * そうしないと、各要素をレンダリングしないと高さを計算できず、数百件程度のリストでもスクロール中に引っかかりが発生してしまいます。
 *
 * @see getItemLayout
 * @see styles.listItemTouchable
 */
const ITEM_HEIGHT = 70;

const ScreenName = 'Acknowledgements';
const Screen: React.FC<NativeStackScreenProps<DemoStackParamList, typeof ScreenName>> = ({navigation}) => {
  // 依存パッケージの一覧は表示されるときに読み込むようにしたいので、importではなく必要に応じてrequireしています。
  // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const thirdPartyDependencies = require('generated/ThirdPartyDependencies')
    .ThirdPartyDependencies as ThirdPartyDependency[];
  const thirdPartyDependenciesWithAction = useMemo(() => {
    return thirdPartyDependencies.map(dependency => {
      return {...dependency, onPress: () => navigation.navigate('License', {dependency})};
    });
  }, [thirdPartyDependencies, navigation]);

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

type DependencyWithAction = ThirdPartyDependency & {onPress: () => unknown};
const keyExtractor = ({id}: DependencyWithAction) => id;
const getItemLayout = (_: unknown, index: number) => ({length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index});
const renderItem: ListRenderItem<DependencyWithAction> = ({item}) => <ListItem {...item} />;
const ListItem: React.FC<DependencyWithAction> = React.memo(({id, name, version, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listItemTouchable}>
      <View style={styles.listItemContainer}>
        <Text>
          <Text style={styles.dependencyName}>{name ?? id}</Text>
          <Text style={styles.dependencyVersion}> ({version})</Text>
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
    height: ITEM_HEIGHT,
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

export const AcknowledgementsScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Acknowledgements',
    contentStyle: {
      backgroundColor: 'rgb(250,250,250)',
    },
  },
};
