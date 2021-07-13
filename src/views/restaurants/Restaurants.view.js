import React from 'react'
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    Linking
} from 'react-native'

import styles from '../../styles/ConsStyles'

import Back from '../../static/images/Back.png'
import Me from '../../static/images/MemorialCityDSinFondo.png'
import RO from '../../static/images/RiverOaksSinFondo.png'
import Su from '../../static/images/SugarlandSinFondo.png'
import Wo from '../../static/images/WoodlandsSinFondo.png'

const RestaurantsView = (props) => {

    const { option } = props.route.params

    let links = {
        woodland: {
            delivery: 'https://orderstart.com/churrascos-woodland',
            reservation: 'https://www.opentable.com/r/churrascos-the-woodlands?corrid=8368aad0-1358-4a6e-94db-479a35d073a5&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2021-06-11T19%3A00%3A00'
        },
        memorial: {
            delivery: 'https://orderstart.com/churrascosmemorial',
            reservation: 'https://www.opentable.com/r/churrascos-memorial-city-houston?corrid=8368aad0-1358-4a6e-94db-479a35d073a5&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2021-06-11T19%3A00%3A00'
        },
        sugarland: {
            delivery: 'https://orderstart.com/churrascossugarland',
            reservation: 'https://www.opentable.com/r/churrascos-sugar-land?corrid=8368aad0-1358-4a6e-94db-479a35d073a5&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2021-06-11T19%3A00%3A00'
        },
        riveroaks: {
            delivery: 'https://orderstart.com/churrascosriveroaks',
            reservation: 'https://www.opentable.com/r/churrascos-river-oaks-houston?corrid=8368aad0-1358-4a6e-94db-479a35d073a5&avt=eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2021-06-11T19%3A00%3A00'
        },
    }

    const goToBrowser = (res) => {
        switch (res) {
            case 'woodland': {
                option === 'delivery' ?
                    Linking.openURL(links.woodland.delivery) :
                    Linking.openURL(links.woodland.reservation)
                break;
            }
            case 'memorial': {
                option === 'delivery' ?
                    Linking.openURL(links.memorial.delivery) :
                    Linking.openURL(links.memorial.reservation)
                break;
            }
            case 'sugarland': {
                option === 'delivery' ?
                    Linking.openURL(links.sugarland.delivery) :
                    Linking.openURL(links.sugarland.reservation)
                break;
            }
            case 'riveroaks': {
                option === 'delivery' ?
                    Linking.openURL(links.riveroaks.delivery) :
                    Linking.openURL(links.riveroaks.reservation)
                break;
            }
        }
    }

    return (
        <View style={styles.principalContainer}>
            <View style={styles.barRed} />
            <ImageBackground source={Back} style={styles.secundaryContainer}>

                <View style={styles.subContainer}>

                    <View style={{
                        flexDirection: 'row',
                        height: '45%',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>

                        <TouchableOpacity style={{
                            height: '100%',
                            width: '49%',
                            backgroundColor: '#c9c9c9',
                            borderRadius: 10
                        }}
                            onPress={_ => goToBrowser('memorial')}
                        >
                            <Image style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'contain',
                            }}
                                source={Me}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            height: '100%',
                            width: '49%',
                            backgroundColor: '#c9c9c9',
                            borderRadius: 10
                        }}
                        onPress={_ => goToBrowser('riveroaks')}
                        >
                            <Image style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'contain',
                            }}
                                source={RO}
                            />
                        </TouchableOpacity>


                    </View>

                    <View style={{
                        flexDirection: 'row',
                        height: '45%',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>

                        <TouchableOpacity style={{
                            height: '100%',
                            width: '49%',
                            backgroundColor: '#c9c9c9',
                            borderRadius: 10
                        }}
                        onPress={_ => goToBrowser('sugarland')}
                        >
                            <Image style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'contain',
                            }}
                                source={Su}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            height: '100%',
                            width: '49%',
                            backgroundColor: '#c9c9c9',
                            borderRadius: 10
                        }}
                        onPress={_ => goToBrowser('woodland')}
                        >
                            <Image style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'contain',
                            }}
                                source={Wo}
                            />
                        </TouchableOpacity>

                    </View>

                </View>

            </ImageBackground>
            <View style={styles.barRed} />
        </View>
    )
}

export default RestaurantsView