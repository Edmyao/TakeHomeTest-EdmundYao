import React, {useEffect, useState} from 'react';
import {View, FlatList, Animated} from 'react-native';
import {getGists} from '../requests';
import ListHeader from '../components/ListHeader';
import ListFooter from '../components/ListFooter';
import GistItem from '../components/GistItem';
import AvatarPreview from '../components/AvatarPreview';

const GistScreen = ({}) => {
  const [page, setPage] = useState(1);
  const [gists, setGists] = useState([]);
  const [selectedAvatarUrl, setSelectedAvatarUrl] = useState(null);

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetchGists();
  }, [page]);

  const fetchGists = async () => {
    try {
      console.log('fetching');
      const gistList = await getGists(page, setLoading);
      setGists(prevState => [...prevState, ...gistList]);
    } catch (e) {
      setError(true);
    }
  };

  const handlePageEnd = (isRetry = false) => {
    if (isRetry && page === 1) {
      setError(false);
      fetchGists();
    } else if (isRetry || (!isLoading && !isError)) {
      setPage(prevState => prevState + 1);
    }
  };

  const handleSelectGist = avatarUrl => {
    setSelectedAvatarUrl(avatarUrl);
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={gists}
        keyExtractor={(item, i) => `${item.id}_${i}`}
        renderItem={({item}) => (
          <GistItem gist={item} handleSelectGist={handleSelectGist} />
        )}
        ListHeaderComponent={<ListHeader title={'Gists'} />}
        ListFooterComponent={
          <ListFooter
            isLoading={isLoading}
            isError={isError}
            handleRetry={() => handlePageEnd(true)}
          />
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => handlePageEnd()}
      />
      <AvatarPreview
        selectedAvatarUrl={selectedAvatarUrl}
        setSelectedAvatarUrl={setSelectedAvatarUrl}
      />
    </View>
  );
};

export default GistScreen;
