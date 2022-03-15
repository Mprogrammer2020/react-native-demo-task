
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import fonts from '../utils/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export function ShopByCategory({ setFiltersVisibility, CATEGORIES }) {
    const [selectedCategory, setSelectedCategory] = useState("Women")

    return <View >
        <Text style={styles.sectionHeaderCont}>Shop by Category</Text>
        <View style={styles.categoryCont}>
            <Pressable onPress={() => setFiltersVisibility(true)} style={{ padding: wp(4) }}>
                <Image source={require('../assets/images/settings.png')} />
            </Pressable>
            <FlatList
                data={CATEGORIES}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => {
                    return <Pressable onPress={() => setSelectedCategory(item)} style={selectedCategory == item ? styles.categoryItemSelected : styles.categoryItem}>
                        <Text style={{ textAlign: 'center' }} numberOfLines={2}>{item}</Text>
                    </Pressable>
                }}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    sectionHeaderCont: { fontFamily: fonts.latoRegular, fontSize: RFPercentage(2.5), padding: RFPercentage(2) },
    categoryCont: { flexDirection: 'row', height: hp(8), alignItems: 'center' },
    categoryItem: {
        backgroundColor: '#EDF5FD', height: hp(4), alignItems: 'center', justifyContent: 'center',
        width: wp(25), paddingHorizontal: wp(2), margin: wp(2), borderRadius: wp(2),
        shadowColor: '#00000044',
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 1,
        elevation: 4
    },
    categoryItemSelected: {
        backgroundColor: '#8B9DC3', height: hp(4), alignItems: 'center', justifyContent: 'center',
        width: wp(25), paddingHorizontal: wp(2), margin: wp(2), borderRadius: wp(2),
        shadowColor: '#00000044',
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 1,
        elevation: 4
    },
})