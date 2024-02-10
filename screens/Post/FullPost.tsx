import { FC } from 'react'
import { Frame, PostImage, PostText, PostTitle } from './style';
import { articles } from '../../types';
import { useRoute } from '@react-navigation/native';

const FullPost: FC = () => {
    const route = useRoute();

    return (
        <Frame>
            <PostImage source={{ uri: (route.params as articles).image }} />
            <PostTitle>{(route.params as articles).name}</PostTitle>
            <PostText>{(route.params as articles).decreption}</PostText>
        </Frame>
    )
}

export default FullPost;