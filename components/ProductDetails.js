import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getProductDetailsFromApi } from '../api';

export default function ProductDetail({ navigation }) {
    const route = useRoute();
    const { productId } = route.params;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProductDetails() {
            const productDetails = await getProductDetailsFromApi(productId);
            setProduct(productDetails);
        }
        fetchProductDetails();
    }, [productId]);

    if (!product) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Image source={{ uri: product.image }} style={{ width: '100%', height: 300 }} />
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{product.title}</Text>
                <Text style={{ marginVertical: 10 }}>{product.description}</Text>
                <Text style={{ fontSize: 20, color: 'green' }}>${product.price}</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text>Icons: Do not bleach, Do not tumble dry, Dry clean, Iron at max</Text>
                </View>
                <Button
                    title="Checkout"
                    onPress={() => navigation.navigate('Checkout')}
                />
            </View>
        </ScrollView>
    );
}
