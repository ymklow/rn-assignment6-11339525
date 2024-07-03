import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/header.component";
import { FunnelIcon, ListBulletIcon } from "react-native-heroicons/outline";
import { useState } from "react";
import Product from "../components/product.component";
import { ArefRuqaa_400Regular, useFonts } from '@expo-google-fonts/aref-ruqaa'


export function HomePage({ navigation,  refresh, refreshFlag }){
    const [ isListView, setIsListView ] = useState(false);


    let [ fontsLoaded ] =  useFonts({ ArefRuqaa_400Regular});

    if(!fontsLoaded){
        return null
    }


    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.container}>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 600, fontFamily: 'ArefRuqaa_400Regular'}}>OUR STORY</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <ListBulletIcon onPress={()=>{ setIsListView(prev => !prev)}} color={'black'} size={20} />
                        <FunnelIcon color={'black'} size={20} />
                    </View>
                </View>
                <ScrollView style={{ display: 'flex' }}>
                    <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', flex: 2, columnGap: 10}}>
                        {
                            products.map((prod, idx) => <Product {...prod} isListView={isListView} refresh={refresh} refreshFlag={refreshFlag} key={idx} />)
                        }
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
        paddingBottom: 50,
        backgroundColor: 'white',
        marginBottom: 100,
        fontFamily: 'ArefRuqaa_400Regular'
    }
})

export const products = [
    {
        id: '0001',
        name: 'OFFICE WEAR',
        description: 'Reversible angora cardigan',
        price: '120',
        image: require('../assets/dress1.png')
    },
    {
        id: '0002',
        name: 'BLACK',
        description: 'Reversible angora cardigan',
        price: '120',
        image: require('../assets/dress2.png')
    },
    {
        id: '0003',
        name: 'CHURCH WEAR',
        description: 'Reversible angora cardigan',
        price: '120',
        image: require('../assets/dress3.png')
    },
    {
        id: '0004',
        name: 'LAMEREI',
        description: 'Reversible angora cardigan',
        price: '120',
        image: require('../assets/dress4.png')
    },
    {
        id: '0005',
        name: '21WN',
        description: 'Reversible angora cardigan',
        price: '120',
        image: require('../assets/dress5.png')
    },
    {
        id: '0006',
        name: 'LOPO',
        description: 'Reversible angora cardigan',
        price: '120',
        image: require('../assets/dress6.png')
    },
    {
        id: '0007',
        name: 'LAME',
        description: 'Reversible angora cardigan',
        price: '120',
        image: require('../assets/dress7.png')
    },
]