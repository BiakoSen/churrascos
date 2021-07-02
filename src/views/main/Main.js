import React from 'react'
import { Image, ImageBackground, TouchableOpacity, View, Text } from 'react-native'

import styles from '../../styles/ConsStyles'

import Logo from '../../static/images/Logo.png'
import Back from '../../static/images/Back.png'
import Ad from '../../static/images/Anuncio.png'
import RS from '../../static/images/RS.png'
import CS from '../../static/images/CS.png'

const Main = (props) => {

    const navigation = props.navigation

    const goResService = () => {
        navigation.navigate('RestaurantService')
    }

    return (
        <View style={styles.principalContainer}>

            <View style={styles.barRed}/>

            <ImageBackground source={Back} style={styles.secundaryContainer}>

                <Image source={Logo} style={styles.logoStyle} />

                <View style={styles.buttomContainer}>
                    <TouchableOpacity
                        onPress={goResService}
                    >
                        <Image source={RS} style={styles.principalButtom} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={CS} style={styles.principalButtom} />
                    </TouchableOpacity>
                </View>

                <Image source={Ad} style={styles.adStyle} />

            </ImageBackground>

            <View style={styles.barRed} />

        </View>
    )
}

export default Main