import React from 'react'
import { Image, ImageBackground, Linking, TouchableOpacity, View } from 'react-native'

import styles from '../../styles/ConsStyles'

import Logo from '../../static/images/Logo.png'
import Back from '../../static/images/Back.png'
import Catering from '../../static/images/Catering.png'
import TR from '../../static/images/TR.png'
import RS from '../../static/images/RS.png'
import Delivery from '../../static/images/Delivery.png'
import Menu from '../../static/images/Menu.png'

const RestaurantServices = (props) => {

    const { navigation } = props

    const go = (option) => {
        navigation.navigate('Restaurants', {option})
    }

    return (
        <View style={styles.principalContainer}>

            <View style={styles.barRed}>
                <Image source={Logo} style={styles.miniLogoStyle} />
            </View>

            <Image source={RS} style={styles.principalButtom} />

            <ImageBackground source={Back} style={styles.secundaryContainer}>

                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL('https://churrascoscatering.com/events/#inquiryform')
                    }}
                >
                    <Image source={Catering} style={styles.secundaryButtom} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        go('reservation')
                    }}>
                    <Image source={TR} style={styles.secundaryButtom} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        go('delivery')
                    }}>
                    <Image source={Delivery} style={styles.secundaryButtom} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL('https://churrascos.com/menus-by-location/menus/')
                    }}>
                    <Image source={Menu} style={styles.secundaryButtom} />
                </TouchableOpacity>

            </ImageBackground>

            <View style={styles.barRed} />

        </View>
    )
}

export default RestaurantServices