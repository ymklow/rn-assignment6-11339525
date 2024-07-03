import { View, Image } from "react-native";
import { Bars2Icon, MagnifyingGlassIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'

export default function Header({ navigation }){

    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 10, backgroundColor: 'white'}}>
            <View  style={{ width: 50 }}  >
                <Bars2Icon onPress={navigation.toggleDrawer} color={'black'} size={20} />
            </View>
            <Image
                source={require('../assets/Logo.png')}
                style={{
                    height: 32
                }}
            />
            <View style={{ width: 50, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <MagnifyingGlassIcon color={'black'} size={20}/>
                <ShoppingBagIcon color={'black'} size={20} />
            </View>
        </View>
    )

}