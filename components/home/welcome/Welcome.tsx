import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ImageStyle,
} from 'react-native';
import styles from './welcome.style';
import {icons, SIZES, COLORS, FONT} from '../../../constants';

const jobTypes = ['Full-time', 'Part-time', 'Contractor'];

const Welcome = ({searchTerm, setSearchTerm, handleClick, navigation}: any) => {
  const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage as ImageStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                paddingVertical: SIZES.small / 2,
                paddingHorizontal: SIZES.small,
                borderRadius: SIZES.medium,
                borderWidth: 1,
                borderColor:
                  activeJobType === item ? COLORS.secondary : COLORS.gray2,
              }}
              onPress={() => {
                setActiveJobType(item);
                navigation.navigate('Search', {id: item});
              }}>
              <Text
                style={{
                  fontFamily: FONT.medium,
                  color:
                    activeJobType === item ? COLORS.secondary : COLORS.gray2,
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
