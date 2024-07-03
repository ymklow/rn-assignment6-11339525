import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../components/header.component";
import { useEffect, useState } from "react";
import { getProducts, removeProduct } from "../storage";
import { products } from "./Home.page";
import { XMarkIcon } from "react-native-heroicons/solid";

import { ArefRuqaa_400Regular, useFonts } from '@expo-google-fonts/aref-ruqaa'


export function CheckoutPage({ navigation, refresh, refreshFlag } ){
    const [ favourites, setFavourites] = useState([]);
    
    
    
    async function getFavourites(){
        const faveIds = await getProducts();
        const faves = products.filter(p => faveIds.includes(p.id) )
        setFavourites(faves)
    }
    
    useEffect(() => {
        getFavourites();
    }, [refreshFlag])

    let [ fontsLoaded ] =  useFonts({ ArefRuqaa_400Regular});

    if(!fontsLoaded){
        return null
    }
    
    return (
        <>        
            <Header navigation={navigation} />
            <View style={styles.container}>
                <Text style={{ fontSize: 25, textAlign: 'center', fontFamily: 'ArefRuqaa_400Regular' }}>Checkout</Text>
                <ScrollView style={{ marginTop: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        { favourites.map((f, idx) => {
                            return (
                                <View key={idx} style={{ height: 120, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                                    <Image
                                        source={f.image} 
                                        style={{ 
                                            width: undefined, 
                                            height: '100%', 
                                            aspectRatio: 1,
                                            objectFit: 'contain'
                                        }}
                                    />
                                    <View style={{ display: 'flex', gap: 5 }}>
                                        <Text style={{ fontSize: 20, fontFamily: 'ArefRuqaa_400Regular' }}>{f.name}</Text>
                                        <Text style={{ color: 'grey', fontFamily: 'ArefRuqaa_400Regular' }}>{f.description}</Text>
                                        <Text style={{ color: 'orange', fontFamily: 'ArefRuqaa_400Regular', fontSize: 20 }}>${f.price}</Text>
                                        <View style={{ width: '100%', position: 'relative'}}>
                                            <XMarkIcon
                                                color={'red'} 
                                                size={20} 
                                                style={{ position: 'absolute', right: 5 }}
                                                onPress={async () => { await removeProduct(f.id), refresh(prev => !prev) }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        })}


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
        height: '100%',
        fontFamily: 'ArefRuqaa_400Regular'
    }
})