import { StyleSheet, Text, View } from "react-native"
import { Avatar } from "react-native-elements"
import StarRating from "./StarRating"

export default function Comment({ comment }) {
    return (
        <View style={styles.comment}>
            <Avatar 
                source={{ uri: comment.avatar }} 
                rounded
            />
            <View style={styles.content}>
                <Text style={{fontWeight: 600}} >{comment.user}</Text>
                <StarRating rating={comment.rating}/>
                <Text>{comment.content}</Text>
                <Text style={{fontSize: 10, opacity: 0.5}}>{comment.time}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    comment: {
        flexDirection: 'row',
        gap: 10,
        paddingBottom: 5,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderRadius: 5,
        marginTop: 10
    },
    content: {
        gap: 5
    }
})