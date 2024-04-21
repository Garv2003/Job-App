import {Image, TouchableOpacity} from 'react-native';
import {SIZES} from '../../../constants';
import styles from './screenheader.style';
import {useNavigation} from '@react-navigation/native';

const ScreenHeaderBtn = ({iconUrl, dimension}: any) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{
          width: dimension,
          height: dimension,
          borderRadius: SIZES.small / 1.25,
        }}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
