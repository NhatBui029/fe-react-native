import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "./StarRating";
import comments from "../data/comments";
import Comment from "./Comment";

function ReviewProduct({ productId, rating }) {
    return (
        <View style={styles.review}>
            <Text style={{fontWeight: 600, fontSize: 17}}>Đánh giá sản phẩm</Text>
            <View style={styles.rating}>
                <StarRating rating={rating} sizeStar={14}/>
                <Text style={{color: 'red'}}>{rating}/5</Text>
                <Text>({comments.length} đánh giá)</Text>
            </View>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </View>
    )
};

const styles = StyleSheet.create({
    review: {
        padding: 10
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    }

})

export default ReviewProduct