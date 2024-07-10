import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import Product from '../components/product';
import Header from '../components/header';
import { getProductsFromApi } from '../api';

export default function HomePage({ navigation, refresh, refreshFlag }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const productsData = await getProductsFromApi();
            setProducts(productsData);
        }
        fetchProducts();
    }, [refreshFlag]);

    return (
        <>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={{ padding: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {products.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.title}
                            price={product.price}
                            image={{ uri: product.image }}
                            isListView={false}
                            refresh={refresh}
                            refreshFlag={refreshFlag}
                            navigation={navigation}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    );
}
