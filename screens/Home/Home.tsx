import { Container } from './style';
import { useEffect, useState } from 'react';
import { articles } from '../../types';
import axios from 'axios';
import { Alert, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../../components/Post/Post';
import { Loader } from '../../components/Loader/Loader';
import { Link } from '@react-navigation/native';

const Home = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<articles[]>();

    const fetchData = () => {
        setIsLoading(true);
        axios
            .get<articles[]>('https://65c4466adae2304e92e26a12.mockapi.io/articles/articles')
            .then(({ data }) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Xatolik', "Serverdan javob kelmadi");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => fetchData(), []);

    if (isLoading) {
        return (
            <Loader />
        );
    }

    return (
        <Container>
            <FlatList
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
                } data={data} renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Link to={{ screen: 'Post', params: item }}>
                            <Post
                                createdAt={item.createdAt}
                                image={item.image}
                                title={item.name}
                            />
                        </Link>
                    </TouchableOpacity>
                )} />
        </Container>
    )
}

export default Home;