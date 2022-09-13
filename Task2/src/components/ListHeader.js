import React from 'react';
import {Text, View} from 'react-native';

const ListHeader = ({title}) => {
  return (
    <View style={{padding: 10, backgroundColor: '#E1E1E1'}}>
      <Text style={{fontWeight: 'bold', color: '#000000'}}>{title}</Text>
    </View>
  );
};

export default ListHeader;
