import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const AlbumList = () => {
    return (
      <ScrollView>
        <View style={styles.cardContainerStyle}>
            <View style={[
                styles.thumbnailContainerStyle,
                styles.cardSectionStyle
            ]}>
                <Image 
                    style={styles.thumbnailStyle}
                    source={{
                    uri:"https://i.imgur.com/K3KJ3w4h.jpg"
                    }}
                />
                <View style={styles.headerContentStyle}>
                    <Text>Taylor Swift</Text>
                    <Text>Taylor Swift</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{
                    uri:"https://images-na.ssl-images-amazon.com/images/I/51NVUGBsq1L._SX300_SY300_QL70_FMwebp_.jpg"
                    }}
                />
            </View>
        </View>

        <View style={styles.cardContainerStyle}>
            <View style={[
                styles.thumbnailContainerStyle,
                styles.cardSectionStyle
            ]}>
                <Image 
                    style={styles.thumbnailStyle}
                    source={{
                    uri:"https://i.imgur.com/K3KJ3w4h.jpg"
                    }}
                />
                <View style={styles.headerContentStyle}>
                    <Text>Taylor Swift</Text>
                    <Text>Taylor Swift</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{
                    uri:"https://images-na.ssl-images-amazon.com/images/I/51NVUGBsq1L._SX300_SY300_QL70_FMwebp_.jpg"
                    }}
                />
            </View>
        </View>

        <View style={styles.cardContainerStyle}>
            <View style={[
                styles.thumbnailContainerStyle,
                styles.cardSectionStyle
            ]}>
                <Image 
                    style={styles.thumbnailStyle}
                    source={{
                    uri:"https://i.imgur.com/K3KJ3w4h.jpg"
                    }}
                />
                <View style={styles.headerContentStyle}>
                    <Text>Taylor Swift</Text>
                    <Text>Taylor Swift</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{
                    uri:"https://images-na.ssl-images-amazon.com/images/I/51NVUGBsq1L._SX300_SY300_QL70_FMwebp_.jpg"
                    }}
                />
            </View>
        </View>
      </ScrollView> 
        
        
    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    cardSectionStyle: {
        padding: 5,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderBottomWidth: 1,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
    },
    imageStyle: {
        height: 300,
        width: null,
    },
});

export default AlbumList;