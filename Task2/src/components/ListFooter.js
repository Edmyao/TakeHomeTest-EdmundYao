import React from 'react';
import {View, ActivityIndicator, TouchableHighlight, Text} from 'react-native';

const ListFooter = ({isLoading, isError, handleRetry}) => {
  return (
    <View>
      {isLoading && (
        <View style={{padding: 10}}>
          <ActivityIndicator />
        </View>
      )}
      {isError && (
        <TouchableHighlight onPress={handleRetry}>
          <View style={{display: 'flex', flex: 1, alignItems: 'center'}}>
            <Text>Something went wrong.</Text>
            <Text>Press here to retry</Text>
          </View>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default ListFooter;
