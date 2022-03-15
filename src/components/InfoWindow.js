
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import fonts from '../utils/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export function InfoWindow({ name, location, openTil }) {

    return <View style={[styles.infoWindowCont, styles.shadow]}>
        <View>
            <Text style={styles.infoWindowName}>{name}</Text>
            <Text style={styles.infoWindowLoc}>{location}</Text>
        </View>
        <View>
            <Text style={styles.infoWindowTiming}>Open{'\n'}until {openTil}</Text>
        </View>
    </View>

}

const styles = StyleSheet.create({
    infoWindowName: { fontSize: RFPercentage(2), fontFamily: fonts.bold },
    infoWindowCont: { backgroundColor: '#70DFC1', alignItems: 'center', height: hp(6), paddingHorizontal: wp(4), justifyContent: 'space-between', flexDirection: 'row' },
    infoWindowLoc: { fontSize: RFPercentage(2), fontFamily: fonts.regular },
    infoWindowTiming: { fontSize: RFPercentage(2), fontFamily: fonts.latoRegular, textAlign: 'center' },
})