import React, {useRef, useEffect} from 'react';
import {Image, StyleSheet, Animated, View} from 'react-native';

const AvatarPreview = ({selectedAvatarUrl, setSelectedAvatarUrl}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (selectedAvatarUrl) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => setSelectedAvatarUrl(null));
    }
  }, [selectedAvatarUrl]);

  if (!selectedAvatarUrl) return <View />;

  return (
    <Animated.View style={[{opacity}, styles.container]}>
      <Image source={{uri: selectedAvatarUrl}} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1E1E1',
  },
  image: {width: 300, height: 300},
});
export default AvatarPreview;
