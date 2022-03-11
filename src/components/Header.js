
import React from 'react';
import { Image, Pressable, View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export function Header() {

    return <View style={[styles.headerCont, styles.shadow]}>
        <View style={styles.headerLeftCont}>
            <Pressable style={{ width: wp(10), alignItems: 'center' }}>
                <Image source={require('../assets/images/back.png')} />
            </Pressable>
            <Pressable style={{ width: wp(20), alignItems: 'center' }}>
                <Image source={require('../assets/images/user.png')} />
            </Pressable>
        </View>
        <Image source={require('../assets/images/logo.png')} />
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Pressable style={{ width: wp(20) }}>
                <Image source={require('../assets/images/trollyCart.png')} />
            </Pressable>
        </View>
    </View>
}

const styles = StyleSheet.create({
    headerCont: { backgroundColor: '#8B9DC3', height: hp(6), alignItems: 'center', flexDirection: 'row' },
    headerLeftCont: { flex: 1, flexDirection: 'row', alignItems: 'center' },
})