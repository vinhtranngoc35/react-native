import React, { useState, useEffect, FC } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useStores } from '../models/root-store-context'

interface Props {
    item: {
        id: string,
        name: string,
        avatar: string,
        createdAt: number,
    }
}
const UserList = () => {
    const { userStore } = useStores()
    const [data, setData] = useState([])
    const { userList } = userStore
    useEffect(() => {
        async function fetchData() {
            await userStore.getUserList().then(res => {
                console.log('fetch data')
            })
        }
        fetchData()
    }, [])
    useEffect(() => {
        console.log(data)
        console.log('userList,:', userList.length)
    }, [data])

    const renderItem: FC<Props> = ({ item }) => (
        (
            <View style={{ marginTop: 30, marginBottom: 30 }}>
                <Text >{item.name}</Text>
            </View>
        )
    )
    return (
        <FlatList
            data={[...userList]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            enabledScroll={true}
        // ItemSeparatorComponent={() => (<View style={{ width: 10, height: 10 }}></View>)}
        />

    )
}

export default UserList

const styles = StyleSheet.create({})
