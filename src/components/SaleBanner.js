

import React from 'react';
import { Image, Pressable, View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function SaleBanner() {

    return <View style={styles.container}>
        <Image source={require('../assets/images/salebanner.png')} />
    </View>
}

const styles = StyleSheet.create({
    container: { paddingVertical: hp(2) },
})