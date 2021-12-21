import { StyleSheet } from "react-native"
const MY_STYLE = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    itemEnd: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    flexAndCenter: {
        flex: 1,
        justifyContent: 'center',
    },
    flexAndCenterItemContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexAndEndItemContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default MY_STYLE