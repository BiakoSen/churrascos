import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Main = (props) => {

    const navigation = props.navigation

    const goResService = () => {
        navigation.navigate('RestaurantService')
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'space-between', alignItems: 'center' }}>

            <View style={{
                width: '100%',
                height: 100,
                backgroundColor: 'red'
            }} />

            <View style={{
                width: '80%',
                height: '70%',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>

                <View style={{
                    width: '80%',
                    height: '30%',
                    alignItems: 'center'
                }}>
                    <Text style={{ color: 'white', fontSize: 52 }}>Churrascos</Text>
                </View>

                <View style={{ paddingHorizontal: 20, height: 150, justifyContent: 'space-around' }}>
                    <TouchableOpacity>
                        <Text style={{
                            color: 'white',
                            width: 220,
                            fontSize: 20,
                            borderRadius: 25,
                            borderWidth: 2,
                            borderColor: 'white',
                            backgroundColor: 'red',
                            paddingVertical: 10,
                            paddingLeft: 30
                        }}
                        onPress={goResService}>Restaurant services</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{
                            color: 'white',
                            width: 220,
                            fontSize: 20,
                            borderRadius: 25,
                            borderWidth: 2,
                            borderColor: 'white',
                            backgroundColor: 'red',
                            paddingVertical: 10,
                            paddingLeft: 30
                        }}>Customer services</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: '80%',
                    height: '30%',
                    backgroundColor: 'gray',
                    borderRadius: 20
                }} />

            </View>

            <View style={{
                width: '100%',
                height: 100,
                backgroundColor: 'red'
            }} />

        </View>
    )
}

export default Main