import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const StarRating = ({ rating, sizeStar = 12 }) => {
    const renderRating = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Ionicons
                    key={i}
                    color='#FFD700'
                    size={sizeStar}
                    name={i <= rating ? 'star' : 'star-outline'}
                />
            );
        }
        return stars;
    }

    return (
        <View style={styles.ratingProduct}>
            {renderRating()}
        </View>
    )
}
const styles = StyleSheet.create({
    ratingProduct: {
        flexDirection: 'row',
        gap: 1
    }
})
export default StarRating;