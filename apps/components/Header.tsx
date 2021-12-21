import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MY_STYLE from '../Styles/Common'

const Header = () => {
    return (
        <View style={MY_STYLE.row}>
            <View style={MY_STYLE.flexAndCenter}>
                <Text style={MY_STYLE.h3}>
                    Icons
                </Text>
            </View>
            <View style={styles.left}>
                <Text style={MY_STYLE.h3}>
                    Avatar
                </Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    left: {
        alignItems: 'flex-end',
        ...MY_STYLE.flexAndCenter
    },
})


