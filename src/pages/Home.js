
import React, { useState } from 'react';
import {
    SafeAreaView, ScrollView, StatusBar
} from 'react-native';
import { Collections } from '../components/Collections';
import { FeaturedCollections } from '../components/FeaturedCollections';
import { Filters } from '../components/Filters';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { InfoWindow } from '../components/InfoWindow';
import { Promotions } from '../components/Promotions';
import SaleBanner from '../components/SaleBanner';
import { ShopByCategory } from '../components/ShopByCategory';
import { BANNERS, CATEGORIES, COLLECTIONS, COLORS, FILTERS, PRODUCTS } from '../utils/Contstants';
import { styles } from '../utils/Styles';


function Home() {

    const [filtersVisibility, setFiltersVisibility] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />

            <Header />

            <InfoWindow
                name={"KUMAR'S"}
                location={"Farmington, IA"}
                openTil={"9:00pm"}
            />

            <ScrollView>

                <FeaturedCollections
                    BANNERS={BANNERS}
                />

                <ShopByCategory
                    setFiltersVisibility={setFiltersVisibility}
                    CATEGORIES={CATEGORIES}
                />

                <Promotions PRODUCTS={PRODUCTS} />

                <SaleBanner />

                <Collections COLLECTIONS={COLLECTIONS} />

            </ScrollView>

            <Footer />

            <Filters
                FILTERS={FILTERS}
                COLORS={COLORS}
                filtersVisibility={filtersVisibility}
                setFiltersVisibility={setFiltersVisibility} />

        </SafeAreaView >
    );
};

export default Home;
