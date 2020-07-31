import React, { useState } from 'react'
import {
    Text,
    View,
    SectionList,
    StyleSheet,
    RefreshControl,
    ActivityIndicator,
} from 'react-native'

const initList = [
    {
        data: ['《你不知道的 JS》', '《JS 权威指南》', '《JS 高级程序设计》'],
        title: 'JS',
    },
    {
        data: ['《CSS 禅意花园》', '《CSS 那些事儿》', '《CSS 权威指南》'],
        title: 'CSS',
    },
]

SectionListDemo = () => {
    const [sectionListData, setSectionListData] = useState(initList.slice())
    const [isLoading, setIsLoading] = useState(false)

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.sectionItem, styles.center]}>
                <Text style={styles.sectionItemText}>{item}</Text>
            </View>
        )
    }

    const renderSectionHeader = ({ section }) => {
        return (
            <View style={[styles.sectionHeader, styles.center]}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
        )
    }

    const ItemSeparatorComponent = () => {
        return <View style={styles.separator}></View>
    }

    const ListFooterComponent = () => {
        return (
            <View style={[styles.center, styles.footer]}>
                <ActivityIndicator style={styles.indicator} color="red" />
                <Text>loading</Text>
            </View>
        )
    }

    const getData = (refresh = true) => {
        if (refresh) {
            setIsLoading(true)
            setTimeout(() => {
                setSectionListData((list) => list.reverse())
                setIsLoading(false)
            }, 1000)
        } else {
            setTimeout(() => {
                setSectionListData((list) => [...list, ...initList])
            }, 1000)
        }
    }

    return (
        <View style={styles.container}>
            <SectionList
                sections={sectionListData}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={ItemSeparatorComponent}
                refreshControl={
                    <RefreshControl
                        color="red"
                        tintColor="red"
                        title="loading.."
                        refreshing={isLoading}
                        onRefresh={() => getData(true)}
                    />
                }
                onEndReached={() => getData(false)}
                ListFooterComponent={ListFooterComponent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
    },

    sectionItem: {
        backgroundColor: '#fefefe',
        height: 80,
    },

    sectionItemText: {
        fontSize: 20,
        color: '#e29471',
    },

    sectionHeader: {
        backgroundColor: '#e29471',
        height: 40,
    },

    sectionHeaderText: {
        fontSize: 20,
        color: '#333',
    },

    separator: {
        height: 1,
        flex: 1,
        backgroundColor: '#e29471',
    },

    footer: {
        padding: 10,
    },

    indicator: {
        marginBottom: 10,
    },
})

export default SectionListDemo
