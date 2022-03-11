
import React, { useCallback, useState } from 'react';
import {
    SafeAreaView, StatusBar,
    StyleSheet, TextInput,
    View, Pressable, Image, Text, FlatList, ScrollView, Modal
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fonts from '../utils/fonts';
import RangeSlider from 'rn-range-slider';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const BANNERS = [require('../assets/images/banner.png'), require('../assets/images/banner2.png'), require('../assets/images/banner3.png')]
const CATEGORIES = ['Women', 'Sale', 'Collections', 'Shop by Brand', 'Shoes', 'Kids', 'Men']
const PRODUCTS = [
    { name: "Howler Brothers Men's Plusherman Terry Polo - Irie Paradise", image: require('../assets/images/product1.png'), price: '55.00', reviews: '123', rating: '4.6' },
    { name: "Billabong Women's Feeling Groovy Puff Sleeve Crop Top", image: require('../assets/images/girlimage.png'), price: '59.00', reviews: '123', rating: '4.6' },
    { name: "Vans Women's Mix Match Slip-On SF Shoes", image: require('../assets/images/shoe.png'), price: '70.00', reviews: '123', rating: '4.6' },
]
const COLLECTIONS = [
    { image: require('../assets/images/drinkware.png') },
    { image: require('../assets/images/hats.png') },
    { image: require('../assets/images/sunglasses.png') },
    { image: require('../assets/images/bags.png') },
    { image: require('../assets/images/sunbum.png') },
    { image: require('../assets/images/forkids.png') },
]
const FILTERS = [
    "Featured Items",
    "Newest Items",
    "Best Selling",
    "A to Z",
    "Z to A",
    "By Review",
    "Price: Ascending",
    "Price: Decending",
]
const COLORS = [
    { name: "Ash Green", color: "#817A6A" },
    { name: "Fig Winter Dreams", color: "#817A6A" },
    { name: "Balsam Green", color: "#465655" },
    { name: "Flax / Bleached Sand", color: "#B6A38A" },
    { name: "Blackberry Wine", color: "#724961" },
    { name: "Gardenia White", color: "#F7EFE7" },
    { name: "Dusty Olive", color: "#767159" },
    { name: "Graphite", color: "#271E1C" },
    { name: "Filed Geo; Pumice", color: "#B2A087" },
    { name: "Grey", color: "#BEB4AE" },
]

function Home() {

    const [selectedCategory, setSelectedCategory] = useState("Women")
    const [filtersVisibility, setFiltersVisibility] = useState(false)
    const [colorFilter, setColorFilter] = useState(false)
    const [priceFilter, setPriceFilter] = useState(false)
    const [sortBy, setSortBy] = useState("Featured Items")
    const [lowPriceFilter, setLowPriceFilter] = useState()
    const [highPriceFilter, setHighPriceFilter] = useState()
    const [searchWidth, setSearchWidth] = useState(14)
    const [searchFilter, setSearchFilter] = useState(false)

    const renderThumb = useCallback(() => <View style={{ height: wp(4), width: wp(4), borderRadius: wp(2), backgroundColor: 'black' }} />, []);
    const renderRail = useCallback(() => <View style={{ height: 1, width: wp(60), backgroundColor: 'black' }} />, []);
    const renderRailSelected = useCallback(() => <View />, []);
    const renderLabel = useCallback(value => <View></View>, []);
    const renderNotch = useCallback(() => <View />, []);
    const handleValueChange = useCallback((low, high) => {
        setLowPriceFilter(low);
        setHighPriceFilter(high);
    }, []);

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

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />

            <Header />

            {/* Info Window */}
            <View style={[styles.infoWindowCont, styles.shadow]}>
                <View>
                    <Text style={styles.infoWindowName}>KUMAR'S</Text>
                    <Text style={styles.infoWindowLoc}>Farmington, IA</Text>
                </View>
                <View>
                    <Text style={styles.infoWindowTiming}>Open{'\n'}until 9:00pm</Text>
                </View>
            </View>

            <ScrollView>

                {/* Featured Collections */}
                <View>
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

                {/* Shop by Category */}
                <View >
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

                {/* Promotions */}
                <View>
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

                <View style={{ paddingVertical: hp(2) }}>
                    <Image source={require('../assets/images/salebanner.png')} />
                </View>

                {/* Collections */}
                <View >
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

            </ScrollView>

            <Footer />

            {/* Filters Modal */}
            <Modal
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

        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F7FD' },
    infoWindowCont: { backgroundColor: '#70DFC1', alignItems: 'center', height: hp(6), paddingHorizontal: wp(4), justifyContent: 'space-between', flexDirection: 'row' },
    sectionHeaderCont: { fontFamily: fonts.latoRegular, fontSize: RFPercentage(2.5), padding: RFPercentage(2) },
    infoWindowName: { fontSize: RFPercentage(2), fontFamily: fonts.bold },
    infoWindowLoc: { fontSize: RFPercentage(2), fontFamily: fonts.regular },
    infoWindowTiming: { fontSize: RFPercentage(2), fontFamily: fonts.latoRegular, textAlign: 'center' },
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
    banner: { height: hp(30) },
    promotionCont: {
        backgroundColor: '#EDF5FD', borderRadius: wp(2), padding: wp(4), flex: 1, margin: wp(2), flexDirection: 'row',
        shadowColor: '#00000044',
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 1,
        elevation: 4
    },
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
    promotionsDetailsCont: { flex: 1, paddingHorizontal: wp(4), justifyContent: 'space-between' },
    promotionAction: { padding: wp(1) },
    productName: { fontFamily: fonts.latoRegular, fontSize: RFPercentage(2.2) },
    productPrice: { fontFamily: fonts.latoLight, fontSize: RFPercentage(2.5) },
    featuredHeaderCont: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: hp(2) },
    rating: { color: '#FBBC04', fontSize: RFPercentage(1.5) },
    reviews: { color: 'black', fontFamily: fonts.latoLight },
    collectionImage: { width: wp(50), height: wp(50) },
    collectionImageCont: { width: wp(48), height: wp(48) },
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
    shadow: {
        shadowColor: '#00000044',
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 1,
        elevation: 4
    },
    darkShadow: {
        shadowColor: '#00000044',
        shadowOffset: { height: 2, width: 0 },
        elevation: 4
    },
});

export default Home;
