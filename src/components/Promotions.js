
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import fonts from '../utils/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export function Promotions({ PRODUCTS }) {

    return <View>
        <Text style={styles.sectionHeaderCont}>Promotions</Text>
        <FlatList
            data={PRODUCTS}
            renderItem={({ item }) => {
                return <View style={styles.promotionCont}>
                    <Image source={item.image} />
                    <View style={styles.promotionsDetailsCont}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <View>
                            <Text style={styles.productPrice}>${item.price}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/images/star.png')} />
                                <Text style={styles.rating}>{item.rating} <Text style={styles.reviews}>({item.reviews})</Text></Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Pressable style={styles.promotionAction}>
                            <Image source={require('../assets/images/heartCircle.png')} />
                        </Pressable>
                        <Pressable style={styles.promotionAction}>
                            <Image source={require('../assets/images/share.png')} />
                        </Pressable>
                    </View>
                </View>
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    sectionHeaderCont: { fontFamily: fonts.latoRegular, fontSize: RFPercentage(2.5), padding: RFPercentage(2) },
    promotionCont: {
        backgroundColor: '#EDF5FD', borderRadius: wp(2), padding: wp(4), flex: 1, margin: wp(2), flexDirection: 'row',
        shadowColor: '#00000044',
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 1,
        elevation: 4
    },
    rating: { color: '#FBBC04', fontSize: RFPercentage(1.5) },
    productName: { fontFamily: fonts.latoRegular, fontSize: RFPercentage(2.2) },
    productPrice: { fontFamily: fonts.latoLight, fontSize: RFPercentage(2.5) },
    promotionsDetailsCont: { flex: 1, paddingHorizontal: wp(4), justifyContent: 'space-between' },
    promotionAction: { padding: wp(1) },
    reviews: { color: 'black', fontFamily: fonts.latoLight },

})