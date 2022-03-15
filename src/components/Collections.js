
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import fonts from '../utils/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export function Collections({ COLLECTIONS }) {

    return <View >
        <Text style={styles.sectionHeaderCont}>Collections</Text>
        <FlatList
            data={COLLECTIONS}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            scrollEnabled={false}
            style={{ width: wp(96), alignSelf: 'center', paddingBottom: hp(10) }}
            renderItem={({ item }) => {
                return <Pressable style={styles.collectionImageCont}>
                    <Image style={styles.collectionImage} resizeMode={'contain'} source={item.image} />
                </Pressable>
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    sectionHeaderCont: { fontFamily: fonts.latoRegular, fontSize: RFPercentage(2.5), padding: RFPercentage(2) },
    collectionImage: { width: wp(50), height: wp(50) },
    collectionImageCont: { width: wp(48), height: wp(48) },
})