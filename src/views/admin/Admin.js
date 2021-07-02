import React, { useState, useEffect } from 'react'
import {
    View,
    ImageBackground,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'

import Back from '../../static/images/Back.png'

import { http } from '../../service/api'
import { errorMessage } from '../../utils/constants'

import styles from '../../styles/ConsStyles'


const Admin = (props) => {

    const [userData, setUserData] = useState([])

    const userRequest = async () => {

        try {

            const { data } = await http.get('/users/')
            console.log('get users: ', data)

            if (data.success === true) {
                setUserData(data.users)
            } else {
                errorMessage(data.errorMessage)
            }

        } catch (error) {
            errorMessage(error)
        }

    }

    

    useEffect(_ => {
        userRequest()
    }, [])

    return (
        <View style={styles.principalContainer}>
            <View style={styles.barRed} />

            <ImageBackground source={Back} style={styles.secundaryContainer}>

                <View style={styles.subContainer}>
                    <Text style={styles.titleWhite}>User list</Text>

                    <View style={{
                        height: '90%',
                        width: '100%',
                    }}>

                        <FlatList
                            keyExtractor={(item) => item.idusuario}
                            data={userData}
                            renderItem={({ item }) => (
                                <View style={{
                                    height: 60,
                                    width: '100%',
                                    backgroundColor: 'black',
                                    borderRadius: 10,
                                    marginBottom: 5,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'

                                }}>

                                    <View style={{
                                        height: '100%',
                                        width: '47.5%',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Text style={styles.titleWhite}>{item.username}</Text>

                                        <Text style={styles.titleWhiteSmall}>{item.email}</Text>

                                        <Text style={styles.titleWhite}>{item.fk_perfil === 1 ? 'Client' : 'Admin'}</Text>
                                    </View>

                                    <TouchableOpacity style={{
                                        height: '100%',
                                        width: '47.5%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                        disabled={item.fk_perfil === 1 ? false : true}
                                    >
                                        <Text style={
                                            [styles.titleWhite, {color: item.fk_perfil === 1 ? 'white' : 'gray'}]
                                        }>Delete</Text>
                                    </TouchableOpacity>

                                </View>
                            )}
                        />

                    </View>
                </View>

            </ImageBackground>

        </View>
    )
}

export default Admin