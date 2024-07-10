import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { getProductsFromApi } from '../api';
import { getProducts } from '../storage';
import Header from '../components/header';

export default function CheckoutPage({ navigation }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const productsData = await getProductsFromApi();
            setProducts(productsData);
        }

        async function fetchCart() {
            const cartData = await getProducts();
            setCart(cartData);
        }

        fetchProducts();
        fetchCart();
    }, []);

    return (
        <>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Cart</Text>
                    {products.map(product => {
                        if (!cart.includes(product.id)) return null;
                        return (
                            <View key={product.id} style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={{ uri: product.image }} style={{ width: 50, height: 50, marginRight: 10 }} />
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18 }}>{product.title}</Text>
                                    <Text style={{ color: 'green', fontSize: 16 }}>${product.price}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </>
    );
}
