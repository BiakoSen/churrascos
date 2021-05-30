import { RFValue } from '../utils/constants'

export default {
    principalContainer: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    barRed: {
        width: '100%',
        height: RFValue(60),
        backgroundColor: 'red'
    },
    secundaryContainer: {
        flex: 1,
        width: '100%',
        margin: RFValue(10),
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttomContainer: {
        width: '100%',
        height: RFValue(180),
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logoStyle: {
        resizeMode: 'contain',
        width: RFValue(320),
        height: RFValue(100),
        marginBottom: RFValue(40)
    },
    miniLogoStyle:{
        resizeMode: 'contain',
        alignSelf: 'center',
        width: RFValue(150),
        height: RFValue(60)
    },
    principalButtom: {
        resizeMode: 'contain',
        width: RFValue(290),
        height: RFValue(80),
    },
    secundaryButtom: {
        resizeMode: 'contain',
        width: RFValue(290),
        height: RFValue(100),
    },
    adStyle: {
        resizeMode: 'contain',
        width: RFValue(290),
        height: RFValue(160),
    }
}