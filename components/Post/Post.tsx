import { FC } from 'react'
import { PostDate, PostDetails, PostView, Title } from './style'
import { Image, StyleSheet } from 'react-native';

interface IProps {
    image: string;
    title: string;
    createdAt: string;
}

const styles = StyleSheet.create({
    img: {
        width: 60,
        height: 60,
        objectFit: 'cover',
        borderRadius: 12,
        marginRight: 12
    }
});

export const Post: FC<IProps> = ({ image, title, createdAt }) => {
    return (
        <PostView>
            <Image
                source={{ uri: image, }}
                style={styles.img}
            />
            <PostDetails>
                <Title>{title}</Title>
                <PostDate>{createdAt}</PostDate>
            </PostDetails>
        </PostView>
    );
}