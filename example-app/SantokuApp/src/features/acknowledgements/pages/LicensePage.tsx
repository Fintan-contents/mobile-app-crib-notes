import React, {useCallback} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

import {useAssetContent} from '../services/useAssetContent';
import {ThirdPartyDependency} from '../types/ThirdPartyDependency';
import {openRepositoryLink} from '../utils/openRepositoryLink';

type LicensePageProps = {
  dependency: ThirdPartyDependency;
};
export const LicensePage: React.FC<LicensePageProps> = ({dependency}) => {
  const {data: licenseContentText, isLoading: isLoadingLicenseContentText} = useAssetContent(
    dependency.licenseContentModuleId,
  );
  const {data: noticeContentText, isLoading: isLoadingNoticeContentText} = useAssetContent(
    dependency.noticeContentModuleId,
  );
  const onOpenRepositoryLink = useCallback(() => openRepositoryLink(dependency), [dependency]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dependencyInfo}>
          <Text>
            <Text h4 h4Style={styles.dependencyName}>
              {dependency.name ?? dependency.id}
            </Text>
            {dependency.version && <Text style={styles.dependencyVersion}> ({dependency.version})</Text>}
          </Text>
        </View>
        {dependency.repository?.startsWith('https://') && (
          <TouchableOpacity style={styles.externalLinkTouchable} onPress={onOpenRepositoryLink}>
            <Icon name="launch" color="rgba(50,50,50,0.5)" size={15} />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {dependency.licenseContentModuleId && (
          <>
            <FileName fileName="LICENSE" />
            <FileContent isLoading={isLoadingLicenseContentText} content={licenseContentText} />
          </>
        )}
        {dependency.noticeContentModuleId && (
          <>
            <FileName fileName="NOTICE" />
            <FileContent isLoading={isLoadingNoticeContentText} content={noticeContentText} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

const FileName: React.FC<{fileName?: string}> = ({fileName}) => {
  return (
    <View style={styles.fileNameContainer}>
      <Text style={styles.fileNameText}>{fileName}</Text>
    </View>
  );
};
const FileContent: React.FC<{isLoading: boolean; content?: string}> = ({isLoading, content}) => {
  return (
    <View style={styles.fileContentContainer}>
      {isLoading ? (
        <View style={styles.contentLoadingIndicator}>
          <ActivityIndicator color="rgba(50,50,50,0.65)" />
        </View>
      ) : (
        <Text style={styles.fileContentText}>{content}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'rgba(50,50,50,0.15)',
    borderBottomWidth: 1,
  },
  dependencyInfo: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flex: 1,
    justifyContent: 'center',
  },
  dependencyName: {
    color: 'rgba(50,50,75,1)',
    fontWeight: 'bold',
  },
  dependencyVersion: {
    color: 'rgba(50,50,50,0.5)',
  },
  externalLinkTouchable: {
    padding: 10,
    flexShrink: 0,
    justifyContent: 'flex-end',
  },
  body: {
    flexGrow: 1,
  },
  fileNameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  fileNameText: {
    fontWeight: 'bold',
  },
  fileContentContainer: {
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: 'rgba(235,235,235,1)',
    borderRadius: 5,
  },
  fileContentText: {
    color: 'rgba(50,50,50,0.65)',
  },
  contentLoadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
