import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'

const RestaurantServices = () => {

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
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>

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
                    }}>Restaurant services</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={()=>{
                    Linking.openURL('https://churrascoscatering.com/events/#inquiryform')
                }}
                >
                    <View style={{width: 70, height: 70, backgroundColor: 'gray', borderRadius: 50, marginRight: 10}}/>
                    <Text style={{
                        color: 'white',
                        width: 220,
                        fontSize: 20,
                    }}
                    >Catering</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{width: 70, height: 70, backgroundColor: 'gray', borderRadius: 50, marginRight: 10}}/>
                    <Text style={{
                        color: 'white',
                        width: 220,
                        fontSize: 20,
                    }}>Table reservation</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{width: 70, height: 70, backgroundColor: 'gray', borderRadius: 50, marginRight: 10}}/>
                    <Text style={{
                        color: 'white',
                        width: 220,
                        fontSize: 20,
                    }}>Delivery</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{width: 70, height: 70, backgroundColor: 'gray', borderRadius: 50, marginRight: 10}}/>
                    <Text style={{
                        color: 'white',
                        width: 220,
                        fontSize: 20,
                    }}>Menu</Text>
                </TouchableOpacity>

            </View>

            <View style={{
                width: '100%',
                height: 100,
                backgroundColor: 'red'
            }} />

        </View>
    )
}

export default RestaurantServices