import React, {Fragment, memo} from 'react';
import {Text, TouchableHighlight, Image, StyleSheet} from 'react-native';

const GistItem = ({gist, handleSelectGist}) => {
  return (
    <Fragment>
      {Object.keys(gist.files).map((fileName, i) => (
        <TouchableHighlight
          key={`${gist.id}_${fileName}_${i}`}
          style={styles.container}
          onPress={() => handleSelectGist(gist.owner.avatar_url)}>
          <Fragment>
            <Image source={{uri: gist.owner.avatar_url}} style={styles.image} />
            <Text>{fileName}</Text>
          </Fragment>
        </TouchableHighlight>
      ))}
    </Fragment>
  );
};

function areEqual(prevProps, nextProps) {
  const prevGist = prevProps.gist;
  const nextGist = nextProps.gist;
  return prevGist.id === nextGist.id;
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#E1E1E1',
    borderBottomWidth: 1,
  },
  image: {width: 50, height: 50, marginRight: 10},
});
export default memo(GistItem, areEqual);
