import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    RefreshControl,
    ActivityIndicator,
} from 'react-native'

const initList = ['北京', '上海', '广州', '深圳', '杭州', '武汉', '南京']
const FlatListDemo = () => {
    const [cityNames, setCityNames] = useState(initList.slice())
    const [isLoading, setIsLoading] = useState(false)

    const renderItem = (item) => {
        return (
            <View style={styles.listItem}>
                <Text style={styles.itemText}>{item}</Text>
            </View>
        )
    }

    const loadData = (refresh = true) => {
        if (refresh) {
            // 下拉刷新
            setIsLoading(true)
            setTimeout(() => {
                setCityNames((arr) => arr.reverse())
                setIsLoading(false)
            }, 1000)
        } else {
            // 上拉加载
            setTimeout(() => {
                setCityNames((arr) => [...arr, ...initList])
            }, 1000)
        }
    }

    const getIndicator = () => {
        return (
            <View style={styles.indicatorContainer}>
                <ActivityIndicator
                    style={styles.indicator}
                    size="large"
                    animating={true}
                    color="red"
                />
                <Text>正在加载</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cityNames}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => item + index}
                // 默认刷新效果
                // refreshing={isLoading}
                // onRefresh={loadData}

                // 自定义刷新（顶部的）
                refreshControl={
                    <RefreshControl
                        title="loading"
                        refreshing={isLoading}
                        onRefresh={() => loadData(true)}
                        // 安卓
                        colors={['red', 'blue', 'yellow']}
                        // IOS
                        tintColor="red"
                    />
                }
                // 底部的上拉加载效果
                ListFooterComponent={getIndicator}
                onEndReached={() => loadData(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
    },
    listItem: {
        backgroundColor: '#169',
        height: 200,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemText: {
        color: '#fff',
        fontSize: 20,
    },

    indicatorContainer: {
        alignItems: 'center',
        paddingBottom: 10,
    },

    indicator: {
        marginBottom: 8,
    },
})

export default FlatListDemo
