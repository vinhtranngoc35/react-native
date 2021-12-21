import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MY_STYLE from '../Styles/Common'

const Chart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.chartHeader}>
                <View style={MY_STYLE.flexAndCenter}>
                    <Text style={MY_STYLE.h3}> $ 4,732.97</Text>
                    <Text>Global Avg.</Text>
                </View>
                <View style={MY_STYLE.flexAndCenterItemContent}>
                    <Text style={MY_STYLE.h3}> $ 80.3M</Text>
                    <Text>Market Cap</Text>
                </View>
                <View style={MY_STYLE.flexAndEndItemContent}>
                    <Text style={MY_STYLE.h3}>$ 1.73M</Text>
                    <Text>Volume</Text>
                </View>
            </View>
            <View style={styles.chartBody}>
                <View style={styles.chartContent}></View>
            </View>
            <View style={styles.chartEnd}>
                <Text>1D</Text>
                <Text>1W</Text>
                <Text>1M</Text>
                <Text>6M</Text>
                <Text>9M</Text>
                <Text>1Y</Text>
            </View>
        </View>
    )
}

export default Chart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F5F2',
        padding: 20
    },
    chartHeader: {
        ...MY_STYLE.row,
        alignItems: 'center'
    },
    chartBody: {
        flex: 4,
        padding: 20
    },
    chartContent: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'grey'
    },
    chartEnd: {
        ...MY_STYLE.row,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
