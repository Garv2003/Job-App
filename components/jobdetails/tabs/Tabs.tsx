import React from 'react';
import {TouchableOpacity, FlatList, Text, View} from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../../../constants';

function TabButton({name, activeTab, onHandleSearchType}: any) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: name === activeTab ? COLORS.primary : '#F3F4F8',
        borderRadius: SIZES.medium,
        marginLeft: 2,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
      }}
      onPress={onHandleSearchType}>
      <Text
        style={{
          fontFamily: 'DMMedium',
          fontSize: SIZES.small,
          color: name === activeTab ? '#C3BFCC' : '#AAA9B8',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const Tabs = ({tabs, activeTab, setActiveTab}: any) => {
  return (
    <View
      style={{
        marginTop: SIZES.small,
        marginBottom: SIZES.small / 2,
      }}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{columnGap: SIZES.small / 2}}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default Tabs;
