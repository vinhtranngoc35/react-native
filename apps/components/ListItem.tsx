import React, { FC } from 'react'
import { FlatList, StyleSheet, Text, View, ViewStyle } from 'react-native'
import MY_STYLE from '../Styles/Common'


interface Props {
    cart: {
        id: string,
        nameOfIcons: string,
        style: ViewStyle,
        quantity: string,
        description: string,
        attributes: string
    }
}

const Item: FC<Props> = ({ cart }) => (
    <View style={{
        ...MY_STYLE.row,
    }}>
        {/* <Ionicons name={cart.nameOfIcons} size={30} color="black" /> */}
        <View style={{ ...(cart.style) }}>
            <Text>Icons</Text>
        </View>
        <View style={{ flex: 1, paddingLeft: 10, padding: 5 }}>
            <Text style={MY_STYLE.h3}>{cart.attributes}</Text>
            <Text>{cart.description}</Text>
        </View>
        <View style={MY_STYLE.itemEnd}>
            <Text style={MY_STYLE.h3}>{cart.quantity}</Text>
        </View>
    </View>
)
const ListItem = () => {
    const backgroundColor1: ViewStyle = {
        backgroundColor: '#C0DEDD',
        ...styles.image
    }
    const backgroundColor2: ViewStyle = {
        backgroundColor: '#E6DFF1',
        ...styles.image
    }
    const backgroundColor3: ViewStyle = {
        backgroundColor: '#F1EEE9',
        ...styles.image
    }
    const backgroundColor4: ViewStyle = {
        backgroundColor: '#F1DFDF',
        ...styles.image
    }
    const DATA = [
        {
            id: '1',
            nameOfIcons: 'cart',
            style: backgroundColor1,
            quantity: '230K',
            description: 'Since last week',
            attributes: 'Sales'
        },
        {
            id: '2',
            nameOfIcons: 'person-circle',
            style: backgroundColor2,
            quantity: '8.549K',
            description: 'Since last week',
            attributes: 'Customer'
        },
        {
            id: '3',
            nameOfIcons: 'basket',
            style: backgroundColor3,
            quantity: '1.423K',
            description: 'Since last week',
            attributes: 'Products'
        },
        {
            id: '4',
            nameOfIcons: 'cash',
            style: backgroundColor4,
            quantity: '$9745',
            description: 'Since last week',
            attributes: 'Revenue'
        },

    ]
    return (
        <View style={styles.container}>
            <Text style={MY_STYLE.h1}>Sales Revenue</Text>
            <FlatList
                style={{ marginTop: 30 }}
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Item cart={item} />}
                ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
            />
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
