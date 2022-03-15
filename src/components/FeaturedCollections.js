
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image, TextInput, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import fonts from '../utils/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export function FeaturedCollections({ BANNERS }) {
    const [searchWidth, setSearchWidth] = useState(14)

    async function showSearch() {
        for (let i = 14; i <= 80; i++) {
            await new Promise(resolve => setTimeout(resolve, 1));
            setSearchWidth(i)
        }
    }

    async function hideSearch() {
        for (let i = 80; i >= 14; i--) {
            await new Promise(resolve => setTimeout(resolve, 1));
            setSearchWidth(i)
        }
    }

    return <View>
        <View style={styles.featuredHeaderCont}>
            <Text style={styles.sectionHeaderCont}>Featured Collections</Text>
            <View style={[styles.searchSmallCont, { width: wp(searchWidth) }]}>
                <Pressable onPress={showSearch}>
                    <Image style={{ margin: wp(5) }} source={require('../assets/images/magnifyingglass.png')} />
                </Pressable>
                <TextInput style={{ flex: 1 }} />
                {searchWidth == 80 && <Pressable onPress={hideSearch}>
                    <Image style={{ margin: wp(5) }} source={require('../assets/images/vectorcross.png')} />
                </Pressable>}
            </View>
        </View>
        <FlatList
            data={BANNERS}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Image style={styles.banner} resizeMode={'contain'} source={item} />
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    banner: { height: hp(30) },
    featuredHeaderCont: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: hp(2) },
    sectionHeaderCont: { fontFamily: fonts.latoRegular, fontSize: RFPercentage(2.5), padding: RFPercentage(2) },
    searchSmallCont: {
        alignItems: 'center', right: 0,
        flexDirection: 'row', position: 'absolute', justifyContent: 'space-between',
        height: wp(12), marginVertical: wp(4), borderRadius: wp(2), alignItems: 'center',
        marginHorizontal: wp(5), backgroundColor: '#EBEBEB',
        shadowColor: '#00000044',
        shadowOpacity: 1,
        shadowOffset: { height: 4, width: 0 },
        elevation: 4
    },
})