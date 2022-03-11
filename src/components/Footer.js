
import React from 'react';
import { Image, Pressable, View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export function Footer() {

    return <View style={styles.footerCont}>
        <Pressable style={styles.tabImageCont}>
            <Image source={require('../assets/images/tab1.png')} />
        </Pressable>
        <Pressable style={styles.tabMore}>
            <Image source={require('../assets/images/tabMore.png')} />
        </Pressable>
        <Pressable style={styles.tabImageCont}>
            <Image source={require('../assets/images/tab2.png')} />
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    footerCont: { backgroundColor: '#8B9DC3', height: hp(6), flexDirection: 'row' },
    tabImageCont: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    tabMore: { top: hp(-3), flex: 0 },
})