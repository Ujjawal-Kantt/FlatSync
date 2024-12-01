import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { ArrowRight, DollarSign, Bell, Users } from 'react-native-feather';
import styles from '../styles';

const LandingPage = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={styles.logo}>FlatSync</Text>
                </View>

                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <Text style={styles.heroTitle}>Sync Your Flat Expenses with Ease</Text>
                    <Text style={styles.heroSubtitle}>
                        FlatSync helps flatmates manage shared expenses and stay on budget effortlessly.
                    </Text>
                    <TouchableOpacity style={styles.heroButton}>
                        <Text style={styles.heroButtonText}>Start Syncing</Text>
                        <ArrowRight width={20} height={20} color="white" />
                    </TouchableOpacity>
                    <Image
                        source={require('../assets/landing.png')}
                        style={styles.heroImage}
                    />
                </View>

                {/* Features Section */}
                <View style={styles.featuresSection}>
                    <Text style={styles.featuresTitle}>Why Choose FlatSync?</Text>

                    <View style={styles.featureItem}>
                        <DollarSign width={24} height={24} color="black" />
                        <Text style={styles.featureText}>Track shared expenses effortlessly.</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Users width={24} height={24} color="black" />
                        <Text style={styles.featureText}>Collaborate with flatmates in real-time.</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Bell width={24} height={24} color="black" />
                        <Text style={styles.featureText}>Get timely notifications for dues.</Text>
                    </View>
                </View>

                {/* Call-to-Action Section */}
                <View style={styles.ctaSection}>
                    <Text style={styles.ctaTitle}>Ready to Sync Your Flat Expenses?</Text>
                    <TouchableOpacity style={styles.ctaButton}>
                        <Text style={styles.ctaButtonText}>Get Started for Free</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Footer Section */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>FlatSync © 2024. All rights reserved.</Text>
            </View>
        </ScrollView>
    );
};

export default LandingPage;
