
import React, { useCallback, useState } from 'react';
import { FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fonts from '../utils/fonts';

export function Filters({ filtersVisibility, FILTERS, setFiltersVisibility, COLORS }) {
    const [colorFilter, setColorFilter] = useState(false)
    const [priceFilter, setPriceFilter] = useState(false)
    const [sortBy, setSortBy] = useState("Featured Items")
    const [lowPriceFilter, setLowPriceFilter] = useState()
    const [highPriceFilter, setHighPriceFilter] = useState()


    const renderThumb = useCallback(() => <View style={{ height: wp(4), width: wp(4), borderRadius: wp(2), backgroundColor: 'black' }} />, []);
    const renderRail = useCallback(() => <View style={{ height: 1, width: wp(60), backgroundColor: 'black' }} />, []);
    const renderRailSelected = useCallback(() => <View />, []);
    const renderLabel = useCallback(value => <View></View>, []);
    const renderNotch = useCallback(() => <View />, []);
    const handleValueChange = useCallback((low, high) => {
        setLowPriceFilter(low);
        setHighPriceFilter(high);
    }, []);


    return <Modal
        visible={filtersVisibility}
        onRequestClose={() => setFiltersVisibility(false)}
        transparent={true}
        animationType='fade'>
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }} style={styles.fullModalBack}>
            <View style={styles.modalCont}>
                <View style={styles.modalHeadCont}>
                    <Text style={{ fontFamily: fonts.regular }}>SORT BY</Text>
                    <Pressable onPress={() => setFiltersVisibility(false)} >
                        <Image source={require('../assets/images/cross.png')} />
                    </Pressable>
                </View>
                <View>
                    <FlatList
                        data={FILTERS}
                        renderItem={({ item }) => {
                            return <Pressable onPress={() => setSortBy(item)} style={{ flexDirection: 'row', paddingVertical: hp(0.5), alignItems: 'center' }}>
                                <Image source={sortBy == item ? require('../assets/images/radio.png') : require('../assets/images/whitecircle.png')} />
                                <Text style={{ fontFamily: fonts.medium, fontSize: RFPercentage(2), paddingHorizontal: wp(1) }}>{item}</Text>
                            </Pressable>
                        }}
                    />
                </View>
                <Text style={styles.refineBy}>REFINE BY</Text>
                <Text style={{ fontFamily: fonts.regular, fontSize: RFPercentage(2), paddingVertical: hp(1), color: 'gray' }}>No filters applied</Text>

                <Pressable onPress={() => setPriceFilter(!priceFilter)} style={styles.modalFilterCont}>
                    <Text style={styles.modalFilterText}>Price</Text>
                    <Image source={priceFilter ? require('../assets/images/vectorcross.png') : require('../assets/images/plus.png')} />
                </Pressable>

                {priceFilter && <View>
                    <View style={styles.priceFilterLabelCont}>
                        <Text style={styles.priceFilterLabel}>{lowPriceFilter} USD</Text>
                        <Text style={styles.priceFilterLabel}>{highPriceFilter} USD</Text>
                    </View>
                    <RangeSlider
                        style={styles.slider}
                        min={10}
                        max={2000}
                        step={10}
                        floatingLabel
                        onValueChanged={handleValueChange}
                        renderThumb={renderThumb}
                        renderRail={renderRail}
                        renderRailSelected={renderRailSelected}
                        renderLabel={renderLabel}
                        renderNotch={renderNotch}
                    />

                </View>}

                <View style={styles.modalFilterCont}>
                    <Text style={styles.modalFilterText}>Brand</Text>
                    <Pressable>
                        <Image source={require('../assets/images/plus.png')} />
                    </Pressable>
                </View>

                <Pressable onPress={() => setColorFilter(!colorFilter)} style={styles.modalFilterCont}>
                    <Text style={styles.modalFilterText}>Color</Text>
                    <Image source={colorFilter ? require('../assets/images/vectorcross.png') : require('../assets/images/plus.png')} />
                </Pressable>

                {colorFilter && <View>
                    <FlatList
                        data={COLORS}
                        scrollEnabled={false}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return <View style={{ flexDirection: 'row', width: wp(30), alignItems: 'center', paddingVertical: wp(1) }}>
                                <View style={{ backgroundColor: item.color, borderRadius: wp(0.5), height: wp(3), width: wp(3) }} />
                                <Text style={{ fontSize: RFPercentage(1.5), marginStart: wp(1) }}>{item.name}</Text>
                            </View>
                        }}
                    />
                </View>}

                <View style={styles.modalFilterCont}>
                    <Text style={styles.modalFilterText}>Size</Text>
                    <Pressable>
                        <Image source={require('../assets/images/plus.png')} />
                    </Pressable>
                </View>

            </View>
        </ScrollView>
    </Modal>

}

const styles = StyleSheet.create({
    modalHeadCont: { flexDirection: 'row', paddingVertical: wp(4), justifyContent: 'space-between' },
    modalCont: {
        width: wp(70), borderTopEndRadius: wp(10),
        padding: wp(4),
        borderBottomEndRadius: wp(10), backgroundColor: 'white', top: hp(11),
        shadowColor: '#00000044',
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 1,
        elevation: 4
    },
    fullModalBack: { backgroundColor: 'rgba(0,0,0,0.5)', height: hp(100), width: wp(100) },
    refineBy: { fontFamily: fonts.regular, fontSize: RFPercentage(2), paddingVertical: hp(2), },
    modalFilterText: { fontFamily: fonts.medium, fontSize: RFPercentage(2), paddingVertical: hp(0.3), },
    modalFilterCont: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: wp(3) },
    priceFilterLabel: { fontFamily: fonts.medium, fontSize: RFPercentage(1.8) },
    priceFilterLabelCont: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(2) },

})