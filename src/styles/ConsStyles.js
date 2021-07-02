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
        backgroundColor: '#8f0000',
    },
    secundaryContainer: {
        flex: 1,
        width: '100%',
        margin: RFValue(10),
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    subContainer: {
        height: '95%',
        width: '95%',
        padding: '5%',
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
    miniLogoStyle: {
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
    buttomLogin: {
        height: '100%',
        width: '40%',
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttomSolo: {
        height: RFValue(40),
        width: RFValue(120),
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    adStyle: {
        resizeMode: 'contain',
        width: RFValue(290),
        height: RFValue(160),
    },
    inputContainer: {
        paddingVertical:RFValue(10),
        width: '100%',
        justifyContent: 'space-between',
    },
    generalInput: {
        height: RFValue(40),
        width: '100%',
        backgroundColor: 'white',
        borderRadius: RFValue(10),
        paddingVertical: 0,
        // paddingHorizontal: '5%',
    },
    bigInput: {
        height: RFValue(110),
        backgroundColor: 'white',
        borderRadius: RFValue(10),
        // paddingHorizontal: '5%',
    },
    titleWhite: {
        color: 'white',
        fontSize: RFValue(18),
        // paddingHorizontal: '5%',
    },
    titleWhiteSmall: {
        color: 'white',
        fontSize: RFValue(13),
        // paddingHorizontal: '5%',
    },
    rowItems: {
        height: RFValue(40),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    datePicker: {
        height: RFValue(90),
        width: RFValue(340),
    }
}