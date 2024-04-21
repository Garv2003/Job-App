import {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {COLORS, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, Welcome} from '../components';

const Home = ({navigation}: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            navigation={navigation}
            handleClick={() => {
              if (searchTerm) {
                navigation.navigate('Search', {id: searchTerm});
              }
            }}
          />

          <Popularjobs navigation={navigation} />
          <Nearbyjobs navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
