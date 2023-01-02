import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend N1'},
        { name: 'Friend N2'},
        { name: 'Friend N3'},
        { name: 'Friend N4'},
        { name: 'Friend N5'},
        { name: 'Friend N6'},
        { name: 'Friend N7'},
        { name: 'Friend N8'},
        { name: 'Friend N9'},
    ]
    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={(element)=>{
             return <Text style={styles.textStyle}>{element.item.name}</Text>
          }} />)
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50  
    }
});

export default ListScreen;