// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        top: 30,
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#92e3a9',
        elevation: 3,
    },
    heroSection: {
        alignItems: 'center',
        padding: 20,
    },
    featuresSection: {
        padding: 20,
        backgroundColor: '#000',
        borderRadius: 10,
        marginVertical: 15,
    },
    featuresTitle: {
        fontSize: 20,
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    featureText: {
        fontSize: 16,
        color: '#555',
        marginLeft: 10,
    },
    heroTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    heroSubtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    heroButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#92e3a9',
        padding: 12,
        borderRadius: 25,
    },
    heroButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 8,
    },
    heroImage: {
        width: '100%',
        height: 350,
        marginTop: 20
    },
    featuresSection: {
        padding: 20,
    },
    featuresTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    featuresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    featureCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        width: 100,
        shadowColor: '#92e3a9',
    },
    featureIcon: {
        marginBottom: 10,
    },
    featureTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    featureDescription: {
        textAlign: 'center',
    },
    ctaSection: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#def7e5',
    },
    ctaTitle: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ctaButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
    },
    ctaButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'center',
        padding: 20,
        position: 'bottom',
        backgroundColor: '#f9f9f9',
    },
    footerText: {
        color: '#333',
    },
});

export default styles;
