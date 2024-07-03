import { View, Image, Text } from "react-native"
import { PlusCircleIcon } from "react-native-heroicons/outline"
import { ShoppingBagIcon } from 'react-native-heroicons/solid';
import { addProduct, hasProduct, removeProduct } from "../storage"
import { useEffect, useState } from "react"

export default function Product({ id, name, description, price, image, isListView, refresh, refreshFlag }){
    const [ isFavourite, setIsFavourite ] = useState(false);
    

    async function getIsFavourite(){
        const storageHasProduct = await hasProduct(id) 
        setIsFavourite(storageHasProduct);
    }

    useEffect(() => {
        getIsFavourite()
    }, [refreshFlag])

    return ( 
        <View style={{ width: isListView ? '100%' : 155, height: isListView ? 150 : undefined, marginBottom: 20 }}>
            {   
                !isListView &&
                <View style={{ width: '100%' }}>
                    <View style={{ position: 'relative', marginBottom: 10 }}>
                        <Image
                            source={image} 
                            style={{ width: '100%', height: undefined, aspectRatio: 0.5}}
                        />
                        {
                            isFavourite ?
                            <ShoppingBagIcon
                                style={{ position: 'absolute', bottom: 10, right: 10 }} 
                                color={'red'} 
                                size={20} 
                                onPress={async () => { await removeProduct(id), refresh(prev => !prev) }}
                            />
                            :
                            <PlusCircleIcon 
                                style={{ position: 'absolute', bottom: 10, right: 10 }} 
                                color={'black'} 
                                size={20} 
                                onPress={async () => { await addProduct(id), refresh(prev => !prev) }}
                            />
                        }
                    </View>
                    <View style={{ display: 'flex', gap: 5}}>
                        <Text style={{ fontSize: 20, fontFamily: 'ArefRuqaa_400Regular' }}>{name}</Text>
                        <Text style={{ color: 'grey', fontFamily: 'ArefRuqaa_400Regular' }}>{description}</Text>
                        <Text style={{ color: 'orange', fontFamily: 'ArefRuqaa_400Regular', fontSize: 20 }}>${price}</Text>
                    </View>
                </View>
            }
            {
                isListView && 
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                    <Image
                        source={image} 
                        style={{ 
                            width: undefined, 
                            height: '100%', 
                            aspectRatio: 1,
                            objectFit: 'contain'
                        }}
                    />
                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'ArefRuqaa_400Regular' }}>{name}</Text>
                        <Text style={{ color: 'grey', fontFamily: 'ArefRuqaa_400Regular' }}>{description}</Text>
                        <Text style={{ color: 'orange', fontFamily: 'ArefRuqaa_400Regular', fontSize: 20 }}>${price}</Text>
                        {
                            isFavourite ?
                            <ShoppingBagIcon
                                color={'red'} 
                                size={20} 
                                onPress={async () => { await removeProduct(id), refresh(prev => !prev) }}
                            />
                            :
                            <PlusCircleIcon 
                                color={'black'} 
                                size={20} 
                                onPress={async () => { await addProduct(id), refresh(prev => !prev) }}
                                />
                        }
                    </View>
                </View>
            }
        </View>
    )
}