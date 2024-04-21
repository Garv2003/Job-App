import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONT, SHADOWS, SIZES} from '../../../../constants';
import styles from './popularjobcard.style';
import {checkImageURL} from '../../../../utils';

const PopularJobCard = ({item, selectedJob, handleCardPress}: any) => {
  return (
    <TouchableOpacity
      style={{
        width: 250,
        padding: SIZES.xLarge,
        backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#FFF',
        borderRadius: SIZES.medium,
        justifyContent: 'space-between',
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
      }}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
          borderRadius: SIZES.medium,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONT.medium,
            color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
          }}
          numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text
            style={{
              fontSize: SIZES.medium - 2,
              fontFamily: FONT.regular,
              color:
                selectedJob === item.job_id ? COLORS.white : COLORS.primary,
            }}>
            {item?.job_publisher} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
